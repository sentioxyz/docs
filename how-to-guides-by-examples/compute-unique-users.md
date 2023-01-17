# ➡ Compute unique users

Assume you'd like to compute the DAU, MAU of your contract. You could use `AccountTracker` [track-distinct-events.md](../developer-guides/sdk-guide/track-distinct-events.md "mention")

```typescript
export const accountTracker = AccountEventTracker.register("users")
```

When you use it to track the activities of `EventSwap`

```typescript
liquidity_pool.bind()
    .onEventSwapEvent(async (evt, ctx) => {
        accountTracker.trackEvent(ctx, {distinctId: ctx.transaction.sender})
    })
```

This would generate a few metrics as follows, precisely:

* Count of daily distinct sender addresses
* Count of weekly distinct sender addresses
* Count of monthly distinct sender addresses
* Count of accumulated distinct sender addresses
* Total count of swap events

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
