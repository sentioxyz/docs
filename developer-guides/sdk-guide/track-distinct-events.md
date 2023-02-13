# Track (distinct) events

Sentio supports tracking APIs that allow users to do (approximate) distinct count, or accurate count.

## Event Tracker

`EventTracker` allows you to track distinct count on any specified interval (`DAYS`)

The code below will record a metric that contains a few series:

* **totalByDay**: This outputs daily count
* **unique**: This outputs unique count (accumulated)
* **distinctByDays**: Array that contains the unique count interval in days.

```typescript
// Definition
const tracker = EventTracker.register("event", {
    totalByDay: true,
    unique: true,
    distinctByDays: [1, 10],
})

// To use it.
tracker.trackEvent(ctx, {distinctId: ctx.transaction.sender})
```

## Account Tracker

This is a special case for the event tracker above. If you use `AccountTracker`, we automatically enable a few metrics (totalByDay, unique, and aggregate by 1, 7 and 30 days)



## Limitations

The distinct count is computed using [Hyperloglog](https://en.wikipedia.org/wiki/HyperLogLog). Thus it is a approximate algorithm with < **\~3%** error rate.
