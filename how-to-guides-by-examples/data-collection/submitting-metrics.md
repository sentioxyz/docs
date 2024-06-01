---
title: ➡ Submitting Metrics
categorySlug: how-to-guides-by-examples
parentDocSlug: data-collection
hidden: false
---

> ℹ️
>
> Metrics API is the same among all different chains.


Metrics have 2 types: [Counter](../../references/concepts/data-types/metrics.md#counter) and [Gauge](../../references/concepts/data-types/metrics.md#gauge).

```typescript
 const totalSupply = (await ctx.contract.totalSupply()).scaleDown(tokenInfo.decimal)
 ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})
 
 const amount = event.args.amount.scaleDown(tokenInfo.decimal)
 ctx.meter.Counter("mint_acc").add(amount, {token: tokenInfo.symbol})
```

Note, `token` is the [#labels](../../developer-guides/sdk-guide/metrics-in-processors.md#labels "mention") you can attach when you submit the metric.

> ℹ️
>
> Please refer to [metrics-in-processors](../../developer-guides/sdk-guide/metrics-in-processors "mention")for more definitions.

Please refer to [metrics](../../references/concepts/data-types/metrics "mention")for the definitions.


