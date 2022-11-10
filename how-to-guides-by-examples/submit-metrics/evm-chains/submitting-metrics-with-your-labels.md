# Submitting metrics with your labels

Labels are used to differentiate the characteristics of the thing that is being measured. For a more detailed definition, see [#labels](../../../developer-guides/sdk-guide/metrics-in-processors.md#labels "mention")



Assume you want to record your `TVL` with different **token**, you could use the following code

```typescript
ctx.meter.Gauge("tvl").record(totalSupply.multipliedBy(cbEth_usdc_price), {token: tokenInfo.symbol}
```

Note, when you view the metrics, different labels lead to different **series.** You can view the definition at [#series](../../../references/concepts/metrics.md#series "mention")
