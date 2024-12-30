---
title: ➡ Submitting Metrics
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
> ℹ️
>
> Metrics API is the same among all different chains.


Metrics have 2 types: [Counter](metrics#counter) and [Gauge](metrics#gauge).

```typescript
 const totalSupply = (await ctx.contract.totalSupply()).scaleDown(tokenInfo.decimal)
 ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})
 
 const amount = event.args.amount.scaleDown(tokenInfo.decimal)
 ctx.meter.Counter("mint_acc").add(amount, {token: tokenInfo.symbol})
```

Note, `token` is the [#labels](metrics-in-processors#labels "mention") you can attach when you submit the metric.

> ℹ️
>
> Please refer to [metrics-in-processors](metrics-in-processors "mention")for more definitions.

Please refer to [metrics](metrics "mention")for the definitions.