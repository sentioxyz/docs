# Monitor event/function/transaction

Here we go through one example as follows

## Import libs

You could import both libs from custom generated types from sentio codegen, or system builtin types

```typescript
import { stake_router } from "./types/aptos/tortuga.js";
import { amm } from './types/aptos/auxexchange.js'
```

## Monitor Event

You could setup the processor to be triggered by any **StakeEvent (**Generated from our codegen**)**

```typescript
stake_router.bind()
  .onEventStakeEvent((evt, ctx) => {
    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender})
    const amount = scaleDown(evt.data_typed.amount)
    stakeAmount.add(ctx, amount, { coin: "APT"})
    stakeAmount.add(ctx, scaleDown(evt.data_typed.t_apt_coins), { coin: "tAPT"})
    stake.add(ctx, 1)
  })
```

## Monitor entry function

You could setup the processor to be triggered by any **function call: CreatePool  (received to the given module)**

```typescript
amm.bind({startVersion: 2331560})
  .onEntryCreatePool(async (evt, ctx) => {
    ctx.meter.Counter("num_pools").add(1)
    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender })
  })

```

****

## Using filters

For a more detailed guide, read [#aptos](../../../developer-guides/sdk-guide/handlers-and-filters.md#aptos "mention")

{% hint style="info" %}
See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/aptos) for full implementation. To learn how to view metrics from the UI, go to [view-metrics.md](../../view-metrics.md "mention")
{% endhint %}
