# Monitor totalSupply of cbETH (via Interval)

Here is an example to monitor total Supply of cbETH.

```typescript
const blockHandler = async function(_:any, ctx: StakedTokenV1Context) {
  const tokenInfo = await token.getERC20TokenInfo(ctx.contract.address)
  const totalSupply = (await ctx.contract.totalSupply()).scaleDown(tokenInfo.decimal)
  ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})
}

StakedTokenV1Processor.bind({address: CBETH_PROXY})
  .onBlockInterval(blockHandler)
```

{% hint style="success" %}
You could also write it using Time Interval instead of block

```typescript
StakedTokenV1Processor.bind({address: CBETH_PROXY})
    .onTimeInterval(blockHandler)
```
{% endhint %}

Here, you could see

* The `totalSupply` can be accessed by calling `ctx.contract.totalSupply()`
* You can submit the metric `total_supply` typed [Gauge](../../../../references/concepts/data-types/metrics.md#gauge) by calling  `ctx.meter.Gauge("total_supply").record(totalSupply, {token: tokenInfo.symbol})`

{% hint style="success" %}
See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/wormhole) for full implementation. To learn how to view metrics from the UI, go [view-metrics.md](../../../view-metrics.md "mention")
{% endhint %}

