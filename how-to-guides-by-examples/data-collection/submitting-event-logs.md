---
title: ➡ Submitting Event Logs
categorySlug: how-to-guides-by-examples
parentDocSlug: data-collection
hidden: false
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

<pre class="language-typescript"><code class="lang-typescript"><strong>.onEventDepositEvent(async (evt, ctx)=>{
</strong>  ctx.eventLogger.emit("user", {
    distinctId: evt.data_decoded.user, eventLabel: "Deposit",
    amount: evt.data_decoded.amount,
  })
 })
</code></pre>

To view the results of the submitted logs, see [view-and-search-event-logs.md](../visualize-results/view-and-search-event-logs.md "mention")

> ℹ️
>
> For more detailed information about how to submit logs in processor, refer to [logs-in-processor.md](../../developer-guides/sdk-guide/logs-in-processor.md "mention")

For the definition, refer to [event-logs.md](../../references/concepts/data-types/event-logs.md "mention")


