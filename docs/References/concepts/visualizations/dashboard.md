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
## Graphing <a href="#graphing" id="graphing"></a>

Use the query editor to customize the graph displayed on the Metrics Explorer page.

You can specify the time frame in the top right corner of the page. The default is **Past 3 Months**.

Metrics that are not reported in the last 24 hours do not appear in the query editor. You can manually add these metrics to your graphs by entering the metric name or full query.

### Chart Types

There are 5 types of charts

![](<https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (5) (4).png>)

You can select them on the UI

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/charts.gif" alt=""><figcaption></figcaption></figure>

### Line, Bars, Areas

These 3 are very similar. The only difference is the visual. It still represent a time series.

### Bar Gauge, Query Value, Table, Pie

These 4 **reduce** **One** time series to **One** single number. Using this option below:

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/reduce.gif" alt=""><figcaption></figcaption></figure>

### Selecting Time Range

There are generally 2 ways to select time range. One is using **Time picker**

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/timepicker.gif" alt=""><figcaption></figcaption></figure>

The other approach is to directly select from graph, you can use standard browser forward/backward to control the range selected.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/selecrange.gif" alt=""><figcaption></figcaption></figure>

## Scope <a href="#scope" id="scope"></a>

Define a filtering scope with the **from** text box by selecting or searching for tag values. For example, you can use the **from** text box to filter metric values from a specific **address, contract** or any other custom labels defined in the processor

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>