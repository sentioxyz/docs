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

<Image align="center" width="30% " src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(5)%20(4).png" />

You can select them on the UI

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/charts.gif)

### Line, Bars, Areas

These 3 are very similar. The only difference is the visual. They still represent a time series.

### Bar Gauge, Query Value, Table, Pie

These 4 **reduce** **One** time series to **One** single number. Using this option below:

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/reduce.gif)

### Selecting Time Range

There are generally 3 ways to select time range. One is using **Time picker**

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/timepicker.gif)

The other approach is to directly select from the graph. You can use standard browser forward/backward controls to adjust the selected range.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/selecrange.gif)

Our third and most recently added method gives you the power to adjust the time range interactively, right from the chart view. The selector controls the time interval by which your metric is grouped. Changing this allows you to "zoom in" or "zoom out" on your data to identify different kinds of trends.

<Image align="center" className="border" border={true} width="800px" src="https://files.readme.io/a238cfc5afd7a5f1ef887c86f72490e49f5298d78153ebc6a48712962ea4db92-time-range.gif" />

<br />

You can select from the following options:

* **Hour**: The most granular view. Each data point on the chart represents one hour. This is ideal for analyzing intraday patterns or sharp, recent changes.
* **Day**: The default view. Each data point represents a full day. This is best for monitoring daily trends and standard operational metrics.
* **Week**: Each data point represents a full calendar week. This helps smooth out daily fluctuations and reveals weekly cycles.
* **Month**: A high-level view where each data point represents a full calendar month. Perfect for long-term strategic analysis and reporting.
* **Quarter**: The highest-level view, grouping data by financial quarters. Best for board-level reporting and long-range planning.

### Comparing Time Periods

The `Compare to...` dropdown is a powerful feature for contextual analysis. It overlays a secondary, historical line on your chart, allowing you to instantly compare current performance against a previous period.\
When you select an option, the chart will display the current data alongside the data from the corresponding previous time frame.
For example:

* If you are viewing data for the last 7 days and select Compare to previous week, the chart will show two lines: one for the last 7 days, and another for the 7 days prior to that.
* If you are viewing data for the current month and select Compare to previous month, the chart will show this month's performance against last month's performance up to the same day.

<Image align="center" className="border" border={true} width="800px" src="https://files.readme.io/55627b7cda492445ecb53909c76fba6d33beb813ae8bba3172549a99b85233e3-compare.gif" />

This feature is invaluable for answering questions like "Are we performing better this week than last week?" or "Is this month's growth on track compared to last month?".

## Scope

Define a filtering scope with the **from** text box by selecting or searching for tag values. For example, you can use the **from** text box to filter metric values from a specific **address, contract** or any other custom labels defined in the processor.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20\(26\).png)

## Build Metrics Dashboard

To better visualize and compute metrics, you can build dashboards using the metrics collected.

This is following the metrics submitted by <Anchor label="monitor-coinbase-cbeth-mint-burn-via-events" title="mention" href="monitor-coinbase-cbeth-mint-burn-via-events">monitor-coinbase-cbeth-mint-burn-via-events</Anchor>

Here is one example where we have a dashboard showing the **Mint Activity - 24 Hours Aggregation:**

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/dashboard%20\(1\).gif)

Here we take a metric and apply a rollup function to perform 24 hours sum aggregation. For more about the formula and functions, refer to <Anchor label="aggregation-functions-and-formulas" title="mention" href="aggregation-functions-and-formulas">aggregation-functions-and-formulas</Anchor>

## Build Event Analytics Dashboard

Following <Anchor label="monitor-pancake-swap-ifo-deposit" title="mention" href="monitor-pancake-swap-ifo-deposit">monitor-pancake-swap-ifo-deposit</Anchor>, we could build a dashboard to show Daily Active Users.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/eventAnalytics.gif)

> ⚠️
>
> This requires that events were submitted with <Anchor label="#distinct-id" title="mention" href="logs-in-processor#distinct-id">#distinct-id</Anchor>.

## Build a Dynamic Dashboard

Once you've mastered the basics of creating and arranging panels, the next step is to transform your static dashboards into powerful, interactive tools. Instead of duplicating dashboards for every new contract or user segment, you can build one flexible dashboard that adapts to your analytical needs.

This is all made possible by **Variables**.

> **Ready to level up?** Our comprehensive guide will walk you through everything you need to know, from basic setup to advanced techniques for creating truly dynamic and user-friendly dashboards.
>
> 👉 **<Anchor label="Template Variables and Custom Variables" title="mention" href="variables">Template Variables and Custom Variables</Anchor>**