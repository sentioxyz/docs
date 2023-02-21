# Monitor Call count by Trace

{% hint style="warning" %}
Trace is only supported in a subset of networks. See full list in [supported-networks.md](../../../../references/supported-networks.md "mention")
{% endhint %}

Sometimes you may not be getting proper events; in this case, trace is the way to go.

Say you want to monitor the [submitBlocks](https://github.com/Loopring/protocols/blob/d048fa4019aa640180f041fa2e013c0a3cb8a729/packages/loopring\_v3/contracts/core/impl/libexchange/ExchangeBlocks.sol#L49) from the smart contract. We automatically generate a method `onCallSubmitBlocks` so you could use it directly in the code.

```typescript
ExchangeV3Processor.bind({address: LOOPRING_EXCHANGE})
    .onCallSubmitBlocks(async (call: SubmitBlocksCallTrace, ctx: ExchangeV3Context) => {
      if (call.error) {
        return
      }
      ctx.meter.Counter("submit_block").add(1)
    })
```

{% hint style="success" %}
See this [repo](https://github.com/sentioxyz/sentio-processors/blob/main/projects/loopring/src/processor.ts#L85) for more context.&#x20;
{% endhint %}
