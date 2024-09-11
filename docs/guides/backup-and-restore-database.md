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
docker exec -i <postgres_container_name> psql -U postgres -d jtl_report < <backup_file.sql>
```

## Disabling the triggers
You might struggle with foreign keys validation during DB restoration. 
Consider turning off the triggers temporarily by running:
```
ALTER TABLE jtl_report.jtl.api_tokens DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.charts DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.data DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.global_settings DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.item_stat DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.items DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.notifications DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.projects DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.scenario DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.scenario_share_tokens DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.share_tokens DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.user_item_chart_settings DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.user_project_access DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.user_scenario_settings DISABLE TRIGGER ALL;
ALTER TABLE jtl_report.jtl.users DISABLE TRIGGER ALL;
```

Do not forget to enable to triggers once restoration is finished!
