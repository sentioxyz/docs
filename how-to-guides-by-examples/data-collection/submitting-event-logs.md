# ➡ Submitting Event Logs

{% hint style="info" %}
Event Log API is the same among all different chains.
{% endhint %}

Assume you'd like to emit a log for all `swap` user activities in order to compute the Daily unique wallets. You could do the followings:

```typescript
 .onEventSwapEvent(async (evt, ctx) => {
   ctx.eventLogger.emit("user", { distinctId: ctx.transaction.sender })
 })
```

You could also attach attributes to the event log:

<pre class="language-typescript"><code class="lang-typescript"><strong>.onEventDepositEvent(async (evt, ctx)=>{
</strong>  ctx.eventLogger.emit("user", {
    distinctId: evt.data_decoded.user, eventLabel: "Deposit",
    amount: evt.data_decoded.amount,
  })
 })
</code></pre>



To view the results of the submitted logs, see [view-and-search-event-logs.md](../visualize-results/view-and-search-event-logs.md "mention")

