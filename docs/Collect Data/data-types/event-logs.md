---
title: 📕 Event Logs
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
Every event log is a structured but schema-less data stored in Sentio.

## Log Levels

Sentio allows users to submit and search for logs. Logs naturally have 5 levels:

* DEBUG
* INFO
* WARNING
* ERROR
* CRITICAL

## System Labels

Sentio also attach system labels automatically to the log, including:

* Contract
* Address
* Chain

## Event Analytics

Follow [event-analytics-dashboard](event-analytics-dashboard "mention") to learn how to visualize Events.

## Filter Event Logs on UI

Using the menu on the left hand side, users can filter the log based on [#log-levels](event-logs#log-levels "mention") and [#system-labels](event-logs#system-labels "mention"). The Labels selection is standard faceted search filters.

* Click a label switch between **All** and **Only**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/allonly.gif" alt="" />

  <figcaption />
</figure>

* Click the checkbox **exclude** a label

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/unselect.gif" alt="" />

  <figcaption />
</figure>

## Full Text Search

We support **full-text search** on logs. If you want to search all the **SWAP USDC:**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/fulltext.gif" alt="" />

  <figcaption />
</figure>

## Search with conditions

### Term

Let's find all the logs with a given `poolName`

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/term.gif" alt="" />

  <figcaption />
</figure>

### Range

Let's find all the logs with **amount** between 1000 to 10000.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/range.gif" alt="" />

  <figcaption />
</figure>

### Composite conditions

The conditions are composable

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/composite.gif" alt="" />

  <figcaption />
</figure>

## Submit Event Logs

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

Assume you'd like to emit a log for all `swap` user activities in order to compute the Daily unique wallets. You could do the followings:

```typescript
 .onEventSwapEvent(async (evt, ctx) => {
   ctx.eventLogger.emit("user", { distinctId: ctx.transaction.sender })
 })
```

##