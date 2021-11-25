---
title: Getting Started
slug: /
---

## Prerequisites

* docker
* docker-compose

:::note
On Windows platform it is highly recommended to use [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install) and enable `Use the WSL 2 based engine` in docker settings.
:::

## Step 1: Clone repository

If you haven't already, clone JtlReporter repository:

```shell
git clone https://github.com/ludeknovy/jtl-reporter.git
```

## Step 2: Deploy JtlReporter with docker-compose

After cloning the project repository `cd` into the `jtl-reporter` folder and deploy the application:

```
docker-compose up -d
```

and wait a bit for all the services to be up and migrations to finish.

## Step 3: That's it! 🎉

Congratulations! You've successfully deployed JtlReporter

Now open the application in your browser:

```
http://IP_ADDRESS:2020
```

To log in use the default credentials:

```
username: admin
password: 2Txnf5prDknTFYTVEXjj
```

Now refer to the [Integration](/docs/integrations/introduction) section on how to get some data in.