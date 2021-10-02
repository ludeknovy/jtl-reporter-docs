---
title: Installing JTL Reporter on AWS ECS (EC2 or Fargate)
---

### Prerequisites
* AWS Account
* ECS Cluster (either [ECS using Amazon EC2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-ecs-ec2.html)
  or [ECS on AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html))
* PostgreSQL Database accessible from the ECS Cluster (either self-hosted or 
  [hosted by AWS RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html))


### Preparation

#### Configure PostgreSQL

You will need the following information:
* PostgreSQL Hostname (from here on: _<psqlhost\>_)
* PostgreSQL Username (from here on: _<psqluser\>_)
* PostgreSQL Password (from here on: _<psqlpassword\>_)

Log into the PostgreSQL Database via `psql` and execute the following commands:

```
CREATE DATABASE jtl_report;

\c jtl_report

CREATE EXTENSION "uuid-ossp";

CREATE SCHEMA IF NOT EXISTS jtl;

CREATE TABLE jtl.projects(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_name character varying(50) NOT NULL UNIQUE
);

CREATE TABLE jtl.items (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    test_name character varying(40) NOT NULL,
    project_id uuid NOT NULL REFERENCES jtl.projects(id),
    jtl_data jsonb NOT NULL,
    note character varying(150),
    environment character varying(20),
    upload_time timestamp without time zone DEFAULT now(),
    start_time timestamp without time zone,
    duration integer
);

CREATE TABLE jtl.item_stat (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    item_id uuid NOT NULL REFERENCES jtl.items(id),
    stats jsonb NOT NULL
);
```


#### Configure AWS Elastic File System (EFS) for MongoDB Persistent Storage

Amazon DocumentDB does not support several features required by JTL Reporter to serve as a drop-in  replacement for
MongoDB (see [Using JTL-Reporter with AWS DocumentDB](https://github.com/ludeknovy/jtl-reporter/issues/68)), so we are
going to use [AWS Elastic File System](https://aws.amazon.com/efs/) for the MongoDB persistent storage.

Create an EFS File System and Mount Target(s) accessible from the ECS Cluster (see the 
[EFS documentation for a walkthrough](https://docs.aws.amazon.com/efs/latest/ug/wt1-create-efs-resources.html)).  Note
the File System ID, which looks like `fs-0a1b2c3d` (from now on: _<efsid\>_).


### ECS Task

#### Required Variables

You require the following information:
* _<efsid\>_
* _<psqlhost\>_
* _<psqlpassword\>_
* _<psqluser\>_
* Any string to serve as the JWT Token (from here on: _<jwt_token\>_)
* Any string to serve as the JWT Token Login (from here on: _<jwt_token_login\>_)

#### Additional Notes
The hostnames for the docker containers in the task are hard coded.  This is no problem when bringing up the service
via `docker-compose`, but in ECS Fargate you cannot assign hostnames to the containers in a Task.  To work around this,
we will append the hostnames for the backend, frontend, listener, and mongodb to `/etc/hosts` on the containers (which
contains the IP address of the Task, so it will resolve the local hostnames to the correct IP address).

Do do that, we modify the `command` of the containers in the `ContainerDefinitions` to first echo the hostnames into
`/etc/hosts`, then start the actual service.

For MongoDB, we also first echo all commands to prepare the database into `/docker-entrypoint-initdb.d/mongo-init.js`
before starting the service.  We also attach the EFS volume we created earlier to the `/data/db/` directory to serve as
persistent storage.

**IMPORTANT:** Only one MongoDB can access the database files on the EFS volume concurrently, so you need to ensure that
only one JTL Reporter service is running at a time and spin down the old service before replacing it with a newer
version.

#### ECS Task Definition
Below is a minimum viable ECS Task Definition CloudFormation resource.  You will have to adjust it to your environment
and configuration.

```yaml
Resources:
  JtlTaskDefinition:
    Type: AWS::ECS::TaskDefinition
    Properties:
      Cpu: 256
      Memory: 512
      ContainerDefinitions:
        - Name: jtl_reporter_fe
          Command:
            - /bin/sh
            - -c
            - echo " be fe listener mongodb" >> /etc/hosts && nginx -g "daemon off;"
          DependsOn:
            - Condition: START
              ContainerName: jtl_reporter_be
            - Condition: START
              ContainerName: jtl_reporter_mongodb
          Essential: true
          Image: novyl/jtl-reporter-fe:v3.4.1
          PortMappings:
            - ContainerPort: 80
              HostPort: 80
              Protocol: tcp
              
        - Name: jtl_reporter_mongodb
          Command:
            - /bin/sh
            - -c
            - >
              echo 'db.createCollection("data-chunks"); newCol = db.getCollection("data-chunks"); newCol.createIndex({ dataId: -1 }, { name: "data-id-index" });' > /docker-entrypoint-initdb.d/mongo-init.js &&
              /usr/local/bin/docker-entrypoint.sh mongod
          Environment:
            - Name: MONGO_INITDB_DATABASE
              Value: jtl-data
          Essential: true
          Image: mongo:4.2.5-bionic
          MountPoints:
            - ContainerPath: /data/db/
              SourceVolume: mongodb-efs
              
        - Name: jtl_reporter_be
          Command:
            - /bin/sh
            - -c
            - echo " be fe listener mongodb" >> /etc/hosts && npm run start
          Environment:
            - Name: DB_HOST
              Value: <psqlhost>
            - Name: DB_PASS
              Value: <psqlpassword>
            - Name: DB_USER
              Value: <psqluser>
            - Name: JWT_TOKEN
              Value: <jwt_token>
            - Name: JWT_TOKEN_LOGIN
              Value: <jwt_token_login>
            - Name: MONGO_CONNECTION_STRING
              Value: mongodb://mongodb:27017              
          Essential: true
          Image: novyl/jtl-reporter-be:v3.4.2
          
        - Name: jtl_reporter_migration
          Command:
            - /bin/sh
            - -c
            - echo " be fe listener mongodb" >> /etc/hosts && npm run migrate up
          Environment:
            - Name: DATABASE_URL
              Value: postgres://<psqluser>:<psqlpassword>@<psqlhost>/jtl_report
          Essential: false
          Image: novyl/jtl-reporter-be:v3.4.2
          
        - Name: jtl_reporter_listener
          Command:
            - /bin/sh
            - -c
            - echo " be fe listener mongodb" >> /etc/hosts && npm run start
          Environment:
            - Name: JWT_TOKEN
              Value: <jwt_token>
            - Name: MONGO_CONNECTION_STRING
              Value: mongodb://mongodb:27017
          Essential: true
          Image: novyl/jtl-reporter-listener-service:v1.0.1
      NetworkMode: awsvpc  # https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-networkmode
      Volumes:
        - EfsVolumeConfiguration:
            FilesystemId: <efsid>
          Name: mongodb-efs
```
