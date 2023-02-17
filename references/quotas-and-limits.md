# 🔒 Quotas and Limits

## Sentio Units

Sentio charges usage via **Sentio Units.**

* Every Logical [metrics.md](concepts/data-types/metrics.md "mention")costs 1 Sentio Units
* Every Logical [event-logs.md](concepts/data-types/event-logs.md "mention")costs 2 Sentio Units
* Every Logical [webhook.md](concepts/data-types/webhook.md "mention")costs **0** Sentio Units (Webhook is an experimental feature, thus it is free at the moment)
* Every Node RPC costs 1 Sentio Units (List will be updated)
  * [EVM calls](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block) involving the state.
  * [get table item](https://fullnode.devnet.aptoslabs.com/v1/spec#/operations/get\_table\_item) for Aptos

{% hint style="success" %}
"Logical" means the emission from the processor. We do not charge the actual physical storage data, which could often be more than what users actually submit in processor.
{% endhint %}

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
