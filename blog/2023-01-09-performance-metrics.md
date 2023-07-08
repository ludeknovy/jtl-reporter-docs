---
title: Performance Testing Metrics
author: Luděk Nový
author_url: https://ludeknovy.tech
hide_table_of_contents: false
tags: ["performance","metrics", "JMeter", "Locust.io"]
---

Performance testing metrics are measurements that are used to evaluate the performance of a system or application under a given workload. These metrics help identify any issues or bottlenecks in the system and provide insights on how to improve its performance.

There are various performance testing metrics that can be used, depending on the specific goals and objectives of the test. Some common performance testing metrics include:

1. **Response time**: This is the amount of time it takes for a request to be processed and for a response to be returned. A high response time can indicate that the system is overloaded or that there are bottlenecks in the system. For performance analysis it is very useful to use [percentiles](../../07/07/percentiles).
The most common [percentiles](../../07/07/percentiles) are p90, p95 and p99.
2. **Throughput**: This is the number of requests that a system can handle per unit of time. A high throughput is desirable, as it indicates that the system can handle a large volume of traffic. 
3. **Error rate**: This is the percentage of requests that result in an error. A high error rate can indicate that the system is not functioning properly and needs to be optimized. 
4. **Resource utilization**: This is the percentage of a system's resources (such as CPU, memory, and network bandwidth) that are being used during the test. High resource utilization can indicate that the system is reaching its limits and may need to be scaled.

It's important to choose the right performance testing metrics for your specific goals and objectives. For example, if you're testing the performance of a web application, you may want to focus on metrics such as response time and error rate. If you're testing the performance of a database, you may want to focus on metrics such as throughput and resource utilization.

Performance testing metrics are an essential part of evaluating the performance of a system or application. By choosing the right metrics and monitoring them during the testing process, you can identify any issues or bottlenecks and make informed decisions on how to improve the system's performance.

JtlReporter can help you to gather all the above-mentioned (and many more!) metrics from your tests created with JMeter, Loucst.io and other performance testing tools. But it does not stop there. JtlReporter gives you the ability to customize the displayed metrics.
Not to mention that the metrics are also displayed in comprehensive graphs. You can even easily compare the metrics with your other performance testing runs to find out any changes in performance of your application.
