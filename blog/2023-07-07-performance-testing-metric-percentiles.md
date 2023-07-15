---
title: Performance Testing Metric - Percentile 
author: Luděk Nový
author_url: https://ludeknovy.tech
hide_table_of_contents: false
description: Detailed insight into percentiles and how they contrast with averages in the context of performance testing.
tags: ["load testing","performance testing", "metrics", "percentile"]
---

Performance testing is a critical process that ensures the quality, reliability, and optimal performance of software applications under specific workloads,
speed, and stability. One of the key metrics used in performance testing is "Percentile."
This article aims to provide a detailed insight into percentiles and how they contrast with averages in the context of performance testing.

## Understanding Percentiles
A percentile is a measure in statistics that indicates the value below which a given percentage of data falls.
In performance testing, percentiles give testers an indication of the distribution characteristics of response times.
It helps to quantitatively assess the load handling capacity, stability, and responsiveness of the system under testing.
A 95th percentile, for instance, means that 95% of the observed data fall below that value.

## How Percentiles are Used in Performance Testing
In performance testing, percentiles are used to provide a more nuanced picture of how a system performs across a range of loads.
For instance, if in load testing, a system's 95th percentile response time is 2 seconds, it means that 95% of the users are experiencing response times of 2 seconds or less. This leaves 5% who experience more than 2 seconds.

In real-world usage we want to have more percentiles at our disposal - usually in performance testing reports 50th, 90th, 95th, and 99th percentiles are used.
Very often percentiles are used to establish performance KPIs in performance testing.

## Difference Between Percentiles and Averages
While percentiles and averages are both statistical measures used in performance testing, they depict different aspects of the data.
The average, or mean, is the sum of all values divided by the number of values. It acts as the balance point of the data set, but it may not necessarily represent a "typical" user experience.

Percentiles, on the other hand, show the distribution across the range of responses. Comparatively, they are more useful for understanding the consistency of system performance.
For instance, if a small number of server requests take a long time to complete,
the average response time will increase even if most requests are completed quickly – potentially giving a misleading picture of overall performance, whereas, with percentiles,
you can clearly see that most of the responses are quick, with only a few long ones. For this reason, the average is not a recommended metric to be used for KPIs.

By understanding and interpreting these statistical measures properly, organizations can enhance the quality, reliability, and usability of their software applications, leading to improved user experience and business productivity.
Performance testing, backed by accurate data interpretation, is hence the key to deriving maximum value and efficiency from any software application.
