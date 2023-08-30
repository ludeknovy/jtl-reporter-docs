---
title: Locust.io
---

:::note
Some of the metrics wont be available with Locust.io as it does not provide them, eg: latency, connection time and others.
:::

You have two options here - [generate CSV file and upload it to the application](/docs/integrations/introduction#1-uploading-csv-file), or use jtl listener service and [upload the results continuously](/docs/integrations/introduction#2-continuous-data-streaming) while running your test.

:::note
Please note that the below-mentioned listeners currenty support only distributed mode.
:::

## Generating and uploading JTL file
Download [jtl_listener.py](https://github.com/ludeknovy/jtl-reporter/blob/master/scripts/jtl_listener.py) into your locust project folder.

Register the listener in your locust test by placing event listener at the very end of the file:

```
from jtl_listener import JtlListener
...

@events.init.add_listener
def on_locust_init(environment, **_kwargs):
    JtlListener(env=environment,  project_name="project name",
                scenario_name="scenario name",
                environment="tested envitonment",
                backend_url="http://IP_ADDRESS")
```

[Generate api token](../guides/administration/api-token) in the application and set it as `JTL_API_TOKEN` env variable.

After the test finishes you will find a jtl file in `logs` folder.

## Continuous results uploading

Download [jtl_listener_service.py](https://github.com/ludeknovy/jtl-reporter/blob/master/scripts/jtl_listener_service.py) into your locust project folder.

Register the listener in your locust test by placing event listener at the very end of the file:

```
from jtl_listener_service import JtlListener

...

@events.init.add_listener
def on_locust_init(environment, **_kwargs):
    JtlListener(env=environment,  project_name="project name",
                scenario_name="scenario name",
                hostname="hostname",
                backend_url="http://IP_ADDRESS")
```

[Generate api token](../guides/administration/api-token) in the application and set it as `JTL_API_TOKEN` env variable.

Once you run your test, the plugin will start uploading results to [jtl listener service](https://github.com/ludeknovy/jtl-reporter-listener-service).

