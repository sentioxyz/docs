# Logs in processor

Users can write the following code to submit logs in processor using the following code:

```typescript
ctx.logger.info(`Deposit ${amount} ${tokenInfo.symbol} at ${ctx.blockNumber}`)
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

The logs will be shown from the logs page, see details at [logs.md](../../references/concepts/data-types/logs.md "mention")
