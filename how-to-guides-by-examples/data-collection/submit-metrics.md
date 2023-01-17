# ➡ Submit metrics

{% hint style="info" %}
Metrics API is the same among all different chains.
{% endhint %}

Metrics have 2 types: [Counter](../../references/concepts/metrics.md#counter) and [Gauge](../../references/concepts/metrics.md#gauge).

```typescript
 const totalSupply = scaleDown(await ctx.contract.totalSupply(), tokenInfo.decimal)
 ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})
 
 const amount = scaleDown(event.args.amount, tokenInfo.decimal)
 ctx.meter.Counter("mint_acc").add(amount, {token: tokenInfo.symbol})
```

Please refer to [metrics-in-processors.md](../../developer-guides/sdk-guide/metrics-in-processors.md "mention")for more definitions.

Please refer to [working-with-different-chains](working-with-different-chains/ "mention")for detailed examples from different chains.
