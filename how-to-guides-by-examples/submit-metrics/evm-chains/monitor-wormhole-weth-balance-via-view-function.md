# Monitor wormhole WETH balance (via view function)

Here is an example to monitor wormhole WETH balance by using the [view function](../../../references/concepts/chain-concepts/evm.md#view-function) (`balanceOf`) defined in the [WETH9 contract](https://github.com/makerdao/sai/blob/master/src/weth9.sol).



First, you import builtin processor for [WETH9](https://sentioxyz.github.io/sentio-sdk/classes/builtin.weth9.WETH9Processor.html).

```typescript
import { WETH9Processor, WETH9Context } from '@sentio/sdk/lib/builtin/weth9'
```

Then you write the simple callback that is triggered `OnBlock` , Note: OnBlock is not called on every block. It is executed using a sampling algorithm, could be specified by the users.

```typescript
const TOKEN_BRIDGE_ADDRESS = '0x3ee18B2214AFF97000D974cf647E7C347E8fa585'
WETH9Processor.bind({ address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', startBlock: 13217349 }).onBlock(
  async function (_, ctx: WETH9Context) {
    const balance = (await ctx.contract.balanceOf(TOKEN_BRIDGE_ADDRESS)).toBigInt()
    ctx.meter.Gauge('balance').record(balance)
  }
)
```

Here, you could see

* The `balance` can be accessed by calling `ctx.contract.balanceOf(TOKEN_BRIDGE_ADDRESS)`
* You can submit the metric `balance` typed [Gauge](../../../references/concepts/data-types/metrics.md#gauge) by calling  `ctx.meter.Gauge('balance').record(balance)`

{% hint style="success" %}
See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/wormhole) for full implementation. To learn how to view metrics from the UI, go [view-metrics.md](../../view-metrics.md "mention")
{% endhint %}

