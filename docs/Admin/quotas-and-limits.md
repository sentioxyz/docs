---
title: 🔒 Billing and Limits
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
# Billing

Sentio measures usage in **[Sentio Units](#sentio-units)** (SU) and issues bills at the end of each month.
The USD price per SU depends on your [plan](https://www.sentio.xyz/pricing).

### Billing Rules

* All **processor usage** is billed to the **project owner**.
* All **API usage** is billed to the **API caller** (identified by API key).

### Free Usage

The following incur **no charges**:

* Usage from the **Sentio UI**.
* Usage from the processor in **[backfill](processor-engine#/processor-lifecycle--execution)** stage

If a bill remains unpaid for one month, the service will be automatically suspended.

## Sentio Units

### Inside Processor

| Activity                                                                                                                                                                                                                 | Cost (Sentio Units) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------: |
| Each new data point in watching stage (<Anchor label="metrics" title="mention" href="metrics">metrics</Anchor>, <Anchor label="event-logs" title="mention" href="event-logs">event-logs</Anchor>, [entities](entities))¹ |               4,000 |
| Each [Webhook](webhook) trigger in watching stage                                                                                                                                                                        |               1,000 |
| Each node RPC request in watching stage, with a few exceptions²                                                                                                                                                          |                  20 |

### Outside Processor

| Activity                                                       | Cost (Sentio Units) |
| -------------------------------------------------------------- | ------------------: |
| Each [Data](ref:data) API request, depends on engine³          |         1,000–2,000 |
| Each [GraphQL](entities#/query-data-using-graphql) API request |                 100 |
| Each data export task                                          |              10,000 |
| Each node RPC request, with a few exceptions²                  |                 200 |

### Notes

1. Updates or deletes of entities do **not** count as new points and cost **0 SU**.
2. Data API per call cost for different query engine (Medium, Large, Ultra require a paid plan.)

   | Engine Size | Description                                           | Cost (Sentio Units) |
   | ----------- | ----------------------------------------------------- | ------------------: |
   | **Small**   | Basic performance, minimal resources                  |               1,000 |
   | **Medium**  | Balanced performance and resources                    |               1,250 |
   | **Large**   | High performance with faster speed and more resources |               1,500 |
   | **Ultra**   | Maximum resources, top-tier performance               |               2,000 |
3. RPC call exceptions:
   • `net_version`, `eth_chainId`, `eth_syncing`, `eth_protocolVersion`, `net_listening`, `web3_*` → **0 SU**

## Multi-Version Usage

If multi-version is enabled (e.g. versions _X_ and _Y_, with _X_ being the new one):

* Backfill for all versions is free.
* Once _X_ enters **Watching**, usage for both _X_ and _Y_ is charged until you switch the active version to _X_.
* Abandoning a version stops its usage from being counted.

# Limits

* **Number of Series per Processor**: max **10,000**.
* **Free Tier Projects**: up to **3 projects**.
* **Free Tier Alerts**: up to **3 alerts**.
