---
title: ➡ Build Dashboards
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Build Metrics Dashboard <a href="#graphing" id="graphing"></a>

To use the metrics to better do visualization and computation, you could build dashboard using the metrics collected.&#x20;

This is following the metrics submitted by [monitor-coinbase-cbeth-mint-burn-via-events](monitor-coinbase-cbeth-mint-burn-via-events "mention")

Here is one example we have a dashboard to show the **Mint Activity - 24 Hours Aggregation.**

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/dashboard (1).gif" alt=""><figcaption></figcaption></figure>

Here we take a metric and apply a rollup function to perform 24 hours sum aggregation. For more about the formula and functions, refer to [aggregation-functions-and-formulas](aggregation-functions-and-formulas "mention")

## Build Event Analytics Dashboard <a href="#graphing" id="graphing"></a>

Following [monitor-pancake-swap-ifo-deposit](monitor-pancake-swap-ifo-deposit "mention"), we could build a dashboard to show Daily Active Users.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/eventAnalytics.gif" alt=""><figcaption></figcaption></figure>

> ⚠️
>
> This requires the event were submitted with [#distinct-id](logs-in-processor#distinct-id "mention")


For more complete features of dashboard, refer to [dashboard](dashboard "mention")