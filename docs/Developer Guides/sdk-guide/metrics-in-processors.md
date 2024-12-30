---
title: Metrics in processors
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
You can find the general metrics definition in [metrics](metrics "mention")

## Submitting Metrics

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.&#x20;

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

## Metric Naming

A metric name could contain characters, digits or `_`, any other characters will be converted to `_`. It will also be truncated to 512 characters.

## Labels

`Labels` is a map of key to string values, the key name follows the same rule as the metric name, and any reserved keywords will be appended with `_` .

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.&#x20;

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
> Assuming there are **N** symbols, **M** bridges and **K** coin types, the total number of series generated could be as large as **N \* M \* K** (but won't exceed the total number of points submitted). Read [avoid-high-cardinality](avoid-high-cardinality "mention")for more details.


## Descriptor

Sometimes you want to give the metric more information, or want to share the same [counter](metrics#counter)/[gauge](metrics#gauge) in different handle functions, then you can first declare your counter with an optional descriptor.

```typescript
const tokenCount = Counter.register(
  'token_count',
  { description: 'token transferred to my wallet',
    unit: 'eth'
  })
```

and then use them as&#x20;

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