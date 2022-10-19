# Monitor event/function/transaction

Here we go through one example as follows

## Import libs

You could import both libs from custom generated types from sentio codegen, or system builtin types

```typescript
import { SouffleChefCampaign, CandyMachine } from './types/aptos/souffle'
import { token } from '@sentio/sdk/lib/builtin/aptos/0x3'
```

## Monitor Event

You could setup the processor to be triggered by any **BurnEnjoyEvent (**Generated from our codegen**)**

```typescript
SouffleChefCampaign.bind({ startVersion: 6604913 })
  .onEventBurnEnjoyEvent((evt, ctx) => {
    ctx.meter.Counter('burned').add(1)
  })
```

## Monitor entry function

You could setup the processor to be triggered by any **function call: PullTokenV2  (received to the given module)**

```typescript
CandyMachine.bind({ startVersion: 6604913 }).onEntryPullToken((call, ctx) => {
  ctx.meter.Counter('pulled').add(call.arguments_typed[2], { coin: call.type_arguments[0] })
})

```

## **Monitor transaction**

You could setup the processor to be triggered by any transaction (**received to the given module**)

```typescript
SouffleChefCampaign.bind({ startVersion: 6604913 })
  .onTransaction((txn, ctx) => {
    if (txn.events) {
      for (const event of txn.events) {
        if (event && event.type === '0x3::token::DepositEvent') {
          ctx.meter.Counter('deposit_token_count').add(Number(event.data.amount))
        }
      }
    }
  })
```

## Using filters

For a more detailed guide, read [#aptos](../../../developer-guides/sdk-guide/handlers-and-filters.md#aptos "mention")

{% hint style="info" %}
See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/aptos) for full implementation. To learn how to view metrics from the UI, go to [view-metrics.md](../../view-metrics.md "mention")
{% endhint %}
