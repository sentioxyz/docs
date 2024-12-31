---
title: 💡Billing
deprecated: false
hidden: false
metadata:
  robots: index
---
Sentio charges usage via **Sentio Units** and bills monthly (or optional annually with discount).

The billing model is as follow:

* All usage inside processor bill to the project
* All API usage bill to the caller of API (identify by API key)
* Every UI usage is free of charge.

## Sentio Units

* Every logical [metrics](metrics "mention") in watching stage costs **4000** Sentio Units
* Every logical [event-logs](event-logs "mention") and [entities](entities "mention") in watching stage costs **8000** Sentio Units
* Every logical [webhook](webhook "mention") in watching stage costs **8000** Sentio Units
* Every node RPC costs **25** in watching state Sentio Units (List will be updated)
  * [EVM calls](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block) involving the state.
  * [get table item](https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get_table_item) for Aptos
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

## How the usage of multi-version is computed?

If you enabled multi-version (say the 2 versions are *X* and *Y, X being the new version*), the backfill stage is always free. Once version *X* reaches the state of **Watching,** the Sentio units usage of both *X* and *Y* will be counted until you switch to the active version to *X.* (then the usage of *Y* will no longer be counted). Similarly, if you abandon version *X*, then the usage of *X* will no longer be counted.