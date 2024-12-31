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
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (3) (1) (1) (1) (1).png" alt="" />

  <figcaption />
</figure>

You can easily sum them by using [#space-aggregation](aggregation-functions-and-formulas#space-aggregation "mention")

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/agg.gif" alt="" />

  <figcaption />
</figure>

## Submitting Metrics

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

## Metric Naming

A metric name could contain characters, digits or `_`, any other characters will be converted to `_`. It will also be truncated to 512 characters.

## Labels

`Labels` is a map of key to string values, the key name follows the same rule as the metric name, and any reserved keywords will be appended with `_` .

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

Our system automatically adds a few reserved labels, including **chain, version, contract\_name, contract\_address, aggregation\_minutes, aggregation\_days**. If users use these labels, an error will  be returned and visible on the UI.

You could also add your own custom labels to differentiate the characteristics of the thing that is being measured. For example:

```typescript
tvl.record(ctx, v, {coin: coinInfo.symbol, bridge: coinInfo.bridge, type: coinInfo.token_type.type})
```

This submits TVL with **symbol** being used as a tag.

> ℹ️
>
> Assuming there are **N** symbols, **M** bridges and **K** coin types, the total number of series generated could be as large as **N\* M \* K** (but won't exceed the total number of points submitted). Read [avoid-high-cardinality](avoid-high-cardinality "mention")for more details.

## Descriptor

Sometimes you want to give the metric more information, or want to share the same [counter](metrics#counter)/[gauge](metrics#gauge) in different handle functions, then you can first declare your counter with an optional descriptor.

```typescript
const tokenCount = Counter.register(
  'token_count',
  { description: 'token transferred to my wallet',
    unit: 'eth'
  })
```

and then use them as

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  tokenCount.add(ctx, event.args.value)
}
```

## Resolution

You can define pre-aggregation rules for the metrics

```typescript
export const gaugeOptions: MetricOptions = {
  sparse: true,
  aggregationConfig: {
    intervalInMinutes: [60],
    discardOrigin: true,
  }
}

export const vol = Gauge.register("vol", gaugeOptions)
```

This will generate 2 new metrics vol\_count and vol\_sum.

* **vol\_count** represents the count of data pre-aggregated every 60 minutes.
* **vol\_sum** represents the sum of data pre-aggregated every 60 minutes.
* The original metric **vol** will be omitted since `discardOrigin` is true.

> ℹ️
>
> We only support resolution of [#gauge](metrics#gauge "mention")at this point.