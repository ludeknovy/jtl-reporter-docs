---
title: Load Testing using Taurus
author: Luděk Nový
author_url: https://ludeknovy.tech
hide_table_of_contents: false
tags: ["load testing","performance testing", "taurus", "jmeter"]
---

Performance testing is a crucial step in ensuring that a software application can perform optimally under stress. Taurus
is an open-source performance testing tool that simplifies performance testing, offering developers and testers a
complete performance testing environment. This tool supports different protocols such as HTTP, JMS, JDBC, MQTT, and
others. In this article, we will look at Taurus, its features, and how to use it.

## Features of Taurus

Taurus has numerous features that make it a great tool for performance testing. Below are some of its key features:

1. Support for Multiple Protocols: Taurus supports various protocols, including HTTP, JMS, JDBC, MQTT, and others,
   making it a versatile tool.
2. Easy Test Creation: With Taurus, creating a test script is easy. You can create your script using YAML or JSON
   format, or use existing scripts from popular performance testing tools like JMeter, Gatling, and Locust.
3. Cloud Integration: Taurus supports integration with cloud-based testing platforms such as BlazeMeter. This feature allows you to run performance tests on the cloud, helping you save on hardware costs.
4. Real-Time Results and Reporting: Taurus provides real-time results and reporting, allowing you to analyze your test
   results as they happen. This feature is critical in identifying performance issues quickly.
5. Compatibility with CI/CD: Taurus is compatible with Continuous Integration/Continuous Delivery (CI/CD) systems such
   as Jenkins and Travis. This compatibility allows for easy integration with the development pipeline.

## How to Use Taurus

Using Taurus is relatively easy and straightforward. Here's a step-by-step guide on how to use Taurus:

### Step 1: Create a Test Scenario

To create a test scenario, you need to define a YAML file that contains the test configuration. A YAML file is a
human-readable text file that uses indentation to indicate the structure of data. In the case of Taurus, YAML files
define the test scenario, which includes the testing tool to be used, the location of the test script, and the test
configuration parameters.
Here's an example of a simple test scenario for testing a web application using the JMeter testing tool:

```yaml
execution:
  - concurrency: 10
    ramp-up: 1m
    hold-for: 5m
    scenario: with_script
 
scenarios:
   with_script:
      script: script:path/to/test_script.jmx 
```

In the above example, the test scenario contains the JMeter test script located at path/to/test_script.jmx.

The test will be executed with a concurrency of 10 users, a ramp-up time of 1 minute, and a hold time of 5 minutes.

### Step 2: Run the Test

To run the test, you need to execute the following command in the terminal:

```bash
bzt path/to/test_scenario.yml
```

Optionally, you can override any value from the YAML in the CLI command. Let's say we want to increase the concurrency:
```
bzt path/to/test_scenario.yml -o execution.concurrency=50
```

The test will be executed with a concurrency of 50 users now. This `-o` switch capability could be leveraged even leveraged in the CI, where we could easily parameterized the execution variables.

### Step 3:  Monitor the Test Results
Taurus provides real-time test results and reporting, allowing you to monitor the test results as they happen.

### Step 4: Analyse the Test Results After the test is completed
Thanks to Taurus modularity, you have several reporting options at your disposal:
1. Console Reporter - provides a nice in-terminal dashboard with live test stats and is enabled by default.
2. BlazeMeter Reporter - allows you to upload test results to BlazeMeter application, that saves your data and generates interactive UI report with many metrics available. But its free version is very limited though.
3. Final Stats Reporter - this rather simple reporter outputs a few basic metrics in the console log after test execution, such as number of requests and failures, various percentiles or latency.


Optionally, you can [integrate Taurus with JtlReporter](/docs/integrations/taurus). With JtlReporter, you can quickly and easily create comprehensive performance reports for your system with metrics, such as requests per second, various percentiles, error rate, and much more. Additionally, you can compare test runs side-by-side, create custom charts with any metrics available, and set up notifications for external services to be informed when a report is processed [and more](/docs/introduction/features).
