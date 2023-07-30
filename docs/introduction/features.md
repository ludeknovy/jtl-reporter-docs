---
title: Features
---

## Detailed performance test report

JtlReport will provide you with metrics for each label and superimposed metrics such as requests per seconds (RPS), various percentiles, error rate, network data transferred (Mbps), latency, connection time, the total number of users, and more.

Most of the metrics are presented to you in form of a chart, this way you can spot issues such as unwanted spikes in response times and drops in throughput in time.

## Test run comparison

If you want to compare HTML reports, you need to open them side by side and look for the differences and correlations on your own. With JtlReporter that comparison is only four clicks away. And it does not stop there. You can even drill down in response time and throughput trends for each endpoint.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/PGnfACy8m6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Performance regression alerts

If you run your performance tests regularly as a part of your delivery pipeline, you might set up performance thresholds for response time, error rate, and throughput. With each new report processing, it checks the values against a baseline report. In case the performance did degrade above set up thresholds, you will get an alert in the report detail.

## Performance insights

JtlReport will perform some performance analysis automatically for you. It aims to help you to interpret the outcome of the measurements and warn you if there might be an issue related to an overloaded system under tests. Currently, JtlReporter checks three areas, and if any of them evinces poor performance it will mark it and provide you with the details of why it might be so.

1.  **The performance of the bottom 1% of requests** and how it differs from the average response time, as if the difference is very high it might mean that some of the users will suffer poor performance and that the system under test might have been overloaded under given circumstances.

2. **Steady response time performance**. It checks the minimum response time against the average. Again the values should not be very different. In case these two values are too unlike it means the tested system struggled to handle the load.

3. **Steady throughput performance**. The application goes through all the drops in throughput performance and if there is any significant drop it will warn you about it.

## Notification

Set up a notification for an external service to be informed on a newly processed performance test report.

*Currently only MS Teams, GChat and Slack are supported.*

See how to set up a notification [here](/guides/administration/notification.md).

## Create custom label chart

JtlReport provides you with a couple of ready-made charts, but you can create your custom chart with any metrics available on it. This way can explore and find even more correlations. The chart gets automatically saved, and the next time you open the performance test report, it preloads the last saved state.

## Anonymous report sharing
Do you need to share a report with someone without the application credentials? No problem, we got you covered - you can create a special link to share the performance test report with anyone without the need of having an account. And no worries, you can always revoke the link. No more to sending HTML reports via emails ;)

See how to set up a anonymous report sharing [here](/docs/guides/administration/anonymous_sharing).

## Request statistics customization
Every column in the request statistics table in a report detail can be customized - by default it displays all the metrics - but you can set it up to only display desired metrics.

See how to customize request statistics metrics [here](/docs/guides/administration/request_stats_configuration).
