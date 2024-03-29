---
title: How to get data in?
---

## Core concepts

With JtlReporter you have two options how to provide it with data:
1. Uploading CSV file
2. Streaming data continuously.

### 1. Uploading CSV file
#### CSV data format

To get most from you data, please make sure you provide all of these data in the CSV file.

```
elapsed
label
responseCode
responseMessage
threadName
dataType
success
failureMessage
bytes
sentBytes
grpThreads
allThreads
URL
Latency
IdleTime
Connect
Hostname
```

:::note
The above-mentioned CSV properties are [JMeter output properties](https://jmeter.apache.org/usermanual/listeners.html#csvlogformat). The order of the columns is not important. And if you provide additional columns does not matter either - they will be ignored.
:::

You can upload the CSV either **[manually via UI](/docs/guides/manual-data-upload)** or using **[REST API](/docs/guides/api-data-upload)**.


### 2. Continuous data streaming

To continuously stream data from your performance test you need to have the `jtl-reporter-listener-service` running. The service is up and running by default if you used the [docker-compose.yml](https://github.com/ludeknovy/jtl-reporter/blob/master/docker-compose.yml) for bringing the project up.

For mode detailed tutorial visit **[Continuous data streaming](/docs/integrations/samples-streaming)** page.

