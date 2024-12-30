---
title: Event Logs In Processors
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

## Distinct ID

You might notice there is an `distinctId` field. If missing, `null` is used. Note, this is critical for Sentio to compute analytics related to DAU, WAU, etc.

The logs will be shown from the logs page, see details at [event-logs](event-logs "mention")
