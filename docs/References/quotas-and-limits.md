---
title: 🔒 Quotas and Limits
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
## Sentio Units

Sentio charges usage via **Sentio Units**

* Every logical [metrics](metrics "mention") in watching stage costs **4000** Sentio Units
* Every logical [event-logs](event-logs "mention") and [entities](entities "mention") in watching stage costs **8000** Sentio Units
* Every logical [webhook](webhook "mention") in watching stage costs **8000** Sentio Units
* Every node RPC costs **25** in watching state Sentio Units (List will be updated)
  * [EVM calls](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block) involving the state.
  * [get table item](https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get\_table\_item) for Aptos
* All above cost zero in [Backfill](#Backfill) stage
* All visualizations cost zero Sentio Unit
* Every Sentio GraphQL API request costs **100** Sentio Unit
* Every Sentio SQL API request costs **1000** Sentio Units

> ✅
>
> "Logical" means the emission from the processor. We do not charge the actual physical storage data, which could often be more than what users actually submit in processor.

## Backfill

Processors are running in 2 stages. First **Backfill** and then **Watching**

We **DO NOT** charge any **Sentio Units** for backfill and only charge processing latest.

## Concurrent Backfill

Since backfill is free, we limit the concurrent backfill one user can run. Currently, free tier can run **1 concurrent backfill.**

## Number of Series

We limit the total number of [#series](metrics#series "mention") you can submit in one processor. Current the limit is set to **10,000.**

## Number of Projects

Free tier users can have at most **3 projects**.

## Number of Alerts

Free tier users can have at most **3 alerts**.

## How the usage of multi-version is computed?

If you enabled multi-version (say the 2 versions are _X_ and _Y, X being the new version_), the backfill stage is always free. Once version _X_ reaches the state of **Watching,** the Sentio units usage of both _X_ and _Y_ will be counted until you switch to the active version to _X._ (then the usage of _Y_ will no longer be counted). Similarly, if you abandon version _X_, then the usage of _X_ will no longer be counted.