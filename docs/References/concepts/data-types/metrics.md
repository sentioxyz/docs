---
title: 💨 Metrics
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
We refer time series data as **Metrics.** Currently, we support users to submit two types of metric data.

## Counter

Counter represents the **cumulative value** at a given time, each data point reported is a delta value (**add or subtract**) to the last value. Usually used to record e.g the accumulated number of tokens transferred.

To see a complete example about how to use it, start from [monitor-coinbase-cbeth-mint-burn-via-events](monitor-coinbase-cbeth-mint-burn-via-events "mention")

## Gauge

Gauge represents a sampled value at a given time, each data point reported is the current value. Usually used to record e.g. **balance** or **total Supply**. To see a complete example about how to use it, start from [monitor-totalsupply-of-cbeth-via-interval](monitor-totalsupply-of-cbeth-via-interval "mention")

## Series

It is possible to have multiple **series** in one **metric (i.e. Counter or Gauge)**. Any label combination generate a different series (see [#labels](metrics-in-processors#labels "mention")). For example, if you have a metric which uses a token symbol as label. You'd generate multiple series in the dashboard by default. For example:

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (3) (1) (1) (1) (1).png" alt="" />
  <figcaption></figcaption>
</figure>

You can easily sum them by using [#space-aggregation](aggregation-functions-and-formulas#space-aggregation "mention")

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/agg.gif" alt="" />
  <figcaption></figcaption>
</figure>