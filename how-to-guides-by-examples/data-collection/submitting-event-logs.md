# ➡ Submitting Event Logs

{% hint style="info" %}
Event Log API is the same among all different chains.
{% endhint %}

Assume you'd like to emit a log for all `swap` user activities in order to compute the Daily unique wallets. You could do the followings:

```typescript
  .onEventSwapEvent(async (evt, ctx) => {
    //...

    ctx.eventLogger.emit("user", { distinctId: ctx.transaction.sender })
  })
```

To view the results of the submitted logs, see [view-and-search-event-logs.md](../visualize-results/view-and-search-event-logs.md "mention")

