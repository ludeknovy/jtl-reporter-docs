---
title: Taurus
---

JtlReporter can be easily integrated with [Taurus](https://gettaurus.org/). To do it we are going to use [shell exec module](https://gettaurus.org/docs/ShellExec/) and custom python upload script. Here is an example of test yaml configuration:

```
settings:
  env:
    BASE_URL: yourBaseUrl.com
    SCENARIO: demoScenario
    PROJECT: demoProject
  artifacts-dir: logs/%Y-%m-%d_%H-%M-%S.%f
execution:
  concurrency: 50
  ramp-up: 3m
  hold-for: 30m
  scenario: demoScenario

scenarios:
  demoScenario:
    script: jmx/demo.jmx
    variables:
      baseUrl: ${BASE_URL}

services:
 - module: shellexec
   post-process:
   - python $PWD/helper/upload_jtl.py -p ${PROJECT} -s ${SCENARIO} -e ${BASE_URL} -ec $TAURUS_EXIT_CODE -er "${TAURUS_STOPPING_REASON:-''}"
```

Do not forget to copy [upload_jtl.py](https://github.com/ludeknovy/jtl-reporter/blob/master/scripts/upload_jtl.py) script into your project folder.

Launch your test and after it finishes it will upload .jtl file(s) into Jtl Reporter automatically.

Please note that "demoProject" and "demoScenario" have to exist in Jtl Reporter beforehand otherwise it will return an error.


:::note
Taurus does not expose [all the data](/docs/integrations/introduction#csv-data-format) (e.g. `sentBytes`) by default. Please refer to [Taurus documentation on how to change CSV file content](https://gettaurus.org/docs/JMeter/#CSV-file-content-configuration).
:::
