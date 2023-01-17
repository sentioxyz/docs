# ➡ Submit logs

{% hint style="info" %}
Logs API is the same among all different chains.
{% endhint %}

Assume you'd like to emit a log on some significant (`amount>1000`) staking/unstaking events, you can write the following:

```typescript
  .onEventStakeEvent((evt, ctx) => {
    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender})
    const amount = scaleDown(evt.data_typed.amount)
    if (amount.gt(1000)) {
      ctx.logger.info("stake " + amount + " APT", {amount: amount, whale: amount.gt(1000)})
    }
    stake.add(ctx, 1)
  })
  .onEventUnstakeEvent((evt, ctx) => {
    accountTracker.trackEvent(ctx, { distinctId: ctx.transaction.sender})
    const amount = scaleDown(evt.data_typed.amount)
    if (amount.gt(1000) ) {
      ctx.logger.info("unstake apt " + amount + "APT", {amount: amount, whale: amount.gt(1000)})
    }
    unstake.add(ctx, 1)
  })
```

To view the results of the submitted logs, see [view-logs.md](../visualize-results/view-logs.md "mention")

