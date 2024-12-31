---
title: ➡ Submitting Event Logs
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
> Event Log API is the same among all different chains.

## Typical Case For DAU

Assume you'd like to emit a log for all `swap` user activities in order to compute the Daily unique wallets. You could do the followings:

```typescript
 .onEventSwapEvent(async (evt, ctx) => {
   ctx.eventLogger.emit("user", { distinctId: ctx.transaction.sender })
 })
```

## Submit Attributes

You could also attach attributes to the event log:

```typescript
.onEventDepositEvent(async (evt, ctx)=>{
  ctx.eventLogger.emit("user", {
    distinctId: evt.data_decoded.user, eventLabel: "Deposit",
    amount: evt.data_decoded.amount,
  })
 })
```

To view the results of the submitted logs, see [view-and-search-event-logs](view-and-search-event-logs "mention")

> ℹ️
>
> For more detailed information about how to submit logs in processor, refer to [logs-in-processor](logs-in-processor "mention")

For the definition, refer to [event-logs](event-logs "mention")
