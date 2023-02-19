---
title: Backup and restore database
---

## Backup database
The database can be backed up by running the following command, which uses [pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html):
```shell
docker exec -t <postgres_container_name> pg_dumpall -c -U postgres > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

## Restore database
The database can be restored by running the following command
```shell
docker exec -i <postgres_container_name> psql -U postgres -d jtl-report < <backup_file.sql>
```
