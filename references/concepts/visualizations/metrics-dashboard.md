---
title: 🔺 Metrics Dashboard
categorySlug: references
parentDocSlug: visualizations
hidden: false
---

Metrics dashboard for [#counter](../data-types/metrics.md#counter "mention")and [#gauge](../data-types/metrics.md#gauge "mention")only.

For the list you could view all the available metrics you submitted from the processor. You could then apply [aggregation-functions-and-formulas](aggregation-functions-and-formulas "mention")on top of the metrics



Here is one example to make a dashboard to show the daily trading volume from a metric `vol_sum` collected.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/rollup.gif" alt=""><figcaption></figcaption></figure>

* Initially, it is multiple series for multiple pairs.
* Adding aggregation (rollup sum) makes it only one series.
