# Metrics in processors

You can find the general metrics definition in [metrics.md](../../references/concepts/data-types/metrics.md "mention")

## Submitting Metrics

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.&#x20;

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

## Metric Naming

A metric name could contain characters, digits or `_`, any other characters will be converted to `_`. It will also be truncated to 100 characters.

## Labels

`Labels` is a map of key to string values, the key name follows the same rule as the metric name, and any reserved keywords will be appended with `_` .

The simplest way to submit a metric is to call `ctx.meter` inside handler function, e.g.&#x20;

```typescript
async function handleTransfer(event: TransferEvent, ctx: ERC20Context) {
  ctx.meter.Counter('token').add(event.args.value)
}
```

Our system automatically adds a few reserved labels, including **address**, **contract** and **chain**.

<figure><img src="../../.gitbook/assets/image (25) (1).png" alt=""><figcaption><p>System labels</p></figcaption></figure>

You could also add your own custom labels to differentiate the characteristics of the thing that is being measured. For example:

```typescript
ctx.meter.Gauge("withdraw").record(amount, {token: tokenInfo.symbol})
```

This submits an amount with **symbol** being used as a tag.

## Descriptor

Sometimes you want to give the metric more information, or want to share the same [counter](../../references/concepts/data-types/metrics.md#counter)/[gauge](../../references/concepts/data-types/metrics.md#gauge) in different handle functions, then you can first declare your counter with an optional descriptor.

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
