---
title: 🔒 Quotas and Limits
categorySlug: references
hidden: false
---

## Sentio Units

Sentio charges usage via **Sentio Units.**

* Every Logical [metrics](concepts/data-types/metrics "mention")costs **1** Sentio Units
* Every Logical [event-logs](concepts/data-types/event-logs "mention")costs **2** Sentio Units
* Every Logical [webhook](concepts/data-types/webhook "mention")costs **3** Sentio Units
* Every Node RPC costs **1** Sentio Units (List will be updated)
  * [EVM calls](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block) involving the state.
  * [get table item](https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get\_table\_item) for Aptos
* Every Sentio API request costs **1** Sentio Unit.

> ✅
>
> "Logical" means the emission from the processor. We do not charge the actual physical storage data, which could often be more than what users actually submit in processor.


## Backfill

Processors are running in 2 stages. First **Backfill** and then **Watching**

We **DO NOT** charge any **Sentio Units** for backfill and only charge processing latest.

## Concurrent Backfill

Since backfill is free, we limit the concurrent backfill one user can run. Currently, free tier can run **1 concurrent backfill.**

## Number of Series

We limit the total number of [#series](concepts/data-types/metrics.md#series "mention") you can submit in one processor. Current the limit is set to **10,000.**

## Number of Projects

Free tier users can have at most **3 projects**.

## Number of Alerts

Free tier users can have at most **3 alerts**.

## How the usage of multi-version is computed?

If you enabled multi-version (say the 2 versions are _X_ and _Y, X being the new version_), the backfill stage is always free. Once version _X_ reaches the state of **Watching,** the Sentio units usage of both _X_ and _Y_ will be counted until you switch to the active version to _X._ (then the usage of _Y_ will no longer be counted). Similarly, if you abandon version _X_, then the usage of _X_ will no longer be counted.
