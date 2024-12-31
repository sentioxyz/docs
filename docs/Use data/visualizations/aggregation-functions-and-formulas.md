---
title: 📐 Aggregation, Functions and Formulas
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
#### Space aggregation <a href="#space-aggregation" id="space-aggregation" />

Define the space aggregation used to combine the values of **multiple series** of a metric. For example, you can use it to sum up the withdrawal amount of different pool addresses.

The possible options are:

* **Average** of reported values
* **Max** of reported values
* **Min** of reported values
* **Sum** of reported values
* **Count** of reported values

#### Functions <a href="#functions" id="functions" />

You can optionally add functions to your query using the function button. Not all functions are available for all metric types. The function will apply to **each of the individual series**.

We currently support a subset of [PromQL query functions](https://prometheus.io/docs/prometheus/latest/querying/functions/) and are expanding the supports. The functions are grouped as:

* **Math**: simple math expressions such as `abs`, `floor`, etc
* **Aggregation over time**: calculate the `sum/average/max/min` of all values in the specific time interval, e.g. you could use `sum_over_time` of 24 hours to draw bar charts of a Defi contract's  daily trading volume.
* **Rollup:** This is similar to Aggregation over time but with discrete values.
* **Rate**: compute **delta or per seconds** rate of the series.
* **Rank**: select top K series or bottom K series, a series is in top/bottom K as long as it has been top/bottom K during the time span that user selects.

#### Formulas

You can combine two or more metrics by using a formula. For example, you can calculate the net mint amount of a smart contract by subtracting the burn amount from the mint amount. You do this by first adding two queries of the burn and mint metrics, and then adding a formula with the expression `b - a`.