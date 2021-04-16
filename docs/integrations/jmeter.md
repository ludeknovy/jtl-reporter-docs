---
title: JMeter
---

JMeter offers you two output formats - xml and CSV. In order to make it work with JtlReporter you will need to use the CSV output, please see [the expected CSV format](/docs/integrations/introduction#csv-data-format). JMeter does not export all of these data by default (eg: *URL*, *Hostname*). Please refer to [JMeter docs](https://jmeter.apache.org/usermanual/listeners.html#defaults) on how to expose them.

:::note
If you run your tests in **distributed mode** you need to provide *Hostname* in csv output. You can do it by setting `jmeter.save.saveservice.hostname=true` in `jmeter.properties`
:::
