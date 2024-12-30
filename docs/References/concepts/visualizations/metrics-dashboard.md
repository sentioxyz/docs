---
title: 🔺 Metrics Dashboard
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
Metrics dashboard for [#counter](metrics#counter "mention")and [#gauge](metrics#gauge "mention")only.

For the list you could view all the available metrics you submitted from the processor. You could then apply [aggregation-functions-and-formulas](aggregation-functions-and-formulas "mention")on top of the metrics

Here is one example to make a dashboard to show the daily trading volume from a metric `vol_sum` collected.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/rollup.gif" alt="" />
  <figcaption></figcaption>
</figure>

* Initially, it is multiple series for multiple pairs.
* Adding aggregation (rollup sum) makes it only one series.