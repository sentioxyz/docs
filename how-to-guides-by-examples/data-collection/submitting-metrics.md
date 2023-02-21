# ➡ Submitting Metrics

{% hint style="info" %}
Metrics API is the same among all different chains.
{% endhint %}

Metrics have 2 types: [Counter](../../references/concepts/data-types/metrics.md#counter) and [Gauge](../../references/concepts/data-types/metrics.md#gauge).

```typescript
 const totalSupply = (await ctx.contract.totalSupply()).scaleDown(tokenInfo.decimal)
 ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})
 
 const amount = event.args.amount.scaleDown(tokenInfo.decimal)
 ctx.meter.Counter("mint_acc").add(amount, {token: tokenInfo.symbol})
```

Note, `token` is the [#labels](../../developer-guides/sdk-guide/metrics-in-processors.md#labels "mention") you can attach when you submit the metric.

{% hint style="info" %}
Please refer to [metrics-in-processors.md](../../developer-guides/sdk-guide/metrics-in-processors.md "mention")for more definitions.

Please refer to [metrics.md](../../references/concepts/data-types/metrics.md "mention")for the definitions.
{% endhint %}

