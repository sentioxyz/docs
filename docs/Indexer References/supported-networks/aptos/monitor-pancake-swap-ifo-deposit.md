---
title: Monitor Pancake Swap IFO deposit
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
Here we go through one example as follows

## Import libs

You could import both libs from custom generated types from sentio codegen, or system builtin types

```typescript
import { IFO } from "./types/aptos/movecoin.js";
import { swap } from './types/aptos/pancake-swap.js'
```

## Monitor Event

You could setup the processor to be triggered by any **onEventDepositEvent (**Generated from our codegen**)**

```typescript
IFO.bind()
    .onEventDepositEvent(async (evt, ctx)=>{
      console.log(JSON.stringify(evt))
      ctx.eventLogger.emit("user", {
        distinctId: evt.data_decoded.user, eventLabel: "Deposit",
        amount: evt.data_decoded.amount,
        pid: evt.data_decoded.pid,
      })
    })
```

## Using filters

For a more detailed guide, read [#aptos](handlers-and-filters#aptos "mention")

> ℹ️
>
> See this [repo](https://github.com/sentioxyz/sentio-processors/blob/main/projects/pancake-swap/src/processor.ts) for full implementation. To learn how to view metrics and build dashboards from the UI, go to [#graphing-1](build-dashboards#graphing-1 "mention")
