# Event Logs In Processors

Users can write the following code to submit logs in processor using the following code:

```typescript
ctx.eventLogger.emit("Deposit",
  {
    distinctId: event.args.from, // optional, enable for analytic use case
    severity: LogLevel.INFO, // optional
    message: `Deposit ${amount} ${tokenInfo.symbol} at ${ctx.blockNumber}`), // optional, enable for better text search
    amount: amount, // you can also put other attributes
  }

```

The supported log levels are:

```typescript
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARNING = 2,
  ERROR = 3,
  CRITICAL = 4,
}
```

The logs will be shown from the logs page, see details at [event-logs.md](../../references/concepts/data-types/event-logs.md "mention")
