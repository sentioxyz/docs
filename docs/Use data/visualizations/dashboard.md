---
title: 📊 Dashboard
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
## Graphing

Use the query editor to customize the graph displayed on the Metrics Explorer page.

You can specify the time frame in the top right corner of the page. The default is **Past 3 Months**.

Metrics that are not reported in the last 24 hours do not appear in the query editor. You can manually add these metrics to your graphs by entering the metric name or full query.

### Chart Types

There are 5 types of charts

<Image align="center" width="30% " src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image%20(5)%20(4).png" />

You can select them on the UI

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/charts.gif" alt="" />

  <figcaption />
</figure>

### Line, Bars, Areas

These 3 are very similar. The only difference is the visual. It still represent a time series.

### Bar Gauge, Query Value, Table, Pie

These 4 **reduce** **One** time series to **One** single number. Using this option below:

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/reduce.gif" alt="" />

  <figcaption />
</figure>

### Selecting Time Range

There are generally 2 ways to select time range. One is using **Time picker**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/timepicker.gif" alt="" />

  <figcaption />
</figure>

The other approach is to directly select from graph, you can use standard browser forward/backward to control the range selected.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/selecrange.gif" alt="" />

  <figcaption />
</figure>

## Scope

Define a filtering scope with the **from** text box by selecting or searching for tag values. For example, you can use the **from** text box to filter metric values from a specific **address, contract** or any other custom labels defined in the processor

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image%20(26).png" alt="" />

  <figcaption />
</figure>

## Build Metrics Dashboard

To use the metrics to better do visualization and computation, you could build dashboard using the metrics collected.

This is following the metrics submitted by [monitor-coinbase-cbeth-mint-burn-via-events](monitor-coinbase-cbeth-mint-burn-via-events "mention")

Here is one example we have a dashboard to show the **Mint Activity - 24 Hours Aggregation.**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/dashboard (1).gif" alt="" />

  <figcaption />
</figure>

Here we take a metric and apply a rollup function to perform 24 hours sum aggregation. For more about the formula and functions, refer to [aggregation-functions-and-formulas](aggregation-functions-and-formulas "mention")

## Build Event Analytics Dashboard

Following [monitor-pancake-swap-ifo-deposit](monitor-pancake-swap-ifo-deposit "mention"), we could build a dashboard to show Daily Active Users.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/eventAnalytics.gif" alt="" />

  <figcaption />
</figure>

> ⚠️
>
> This requires the event were submitted with [#distinct-id](logs-in-processor#distinct-id "mention")