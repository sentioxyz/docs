# Metrics

Currently, we support users to submit two types of metric data

* Counter: represents the cumulative value at a given time, each data point reported is a delta value to the last value. Usually used to record e..g the total number of tokens transferred.
* Gauge: represents a sampled value at a given time, each data point reported is the current value.  Usually used to record e.g. balance or supply in block handler.

A metric name could contain characters, digits or `_`, any other characters will be converted to `_`. It will also be truncated to 100 characters.

Labels is a map of key to string values, the key name follow the same rule of metric name, and any reserved keywords will be appended with `_` .

The simplest way to submit a metric is call `ctx.meter` inside handler function, e.g.&#x20;

```
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

&#x20;But sometimes you want to give the metric more information, or want to share the same counter/gauge in different handle functions, then you can first declare your counter with an optional descriptor.

```
const tokenCount = new Counter(
  'token_count', 
  { description: 'token transferred to my wallet',
    unit: 'eth' 
  })
```

and then use them as&#x20;

```
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  tokenCount.add(ctx, event.args.value)
}
```
