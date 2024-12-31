---
title: 🕹️ Overview
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
Sentio roughly works as the following

* User writes a [Sentio Processor](processor-basic) or [Hosted Subgraph](doc:hosted-subgraph), upload it through [➡ CLI](doc:cli-reference).
* The processor code is **triggered on user-defined conditions** (on [💎 Supported Networks](doc:supported-networks)) and executed on Sentio internal infrastructures in **real time and automatically adjusted with chain reorg)**.
* Sentio backfills all the historical data (from contract creation time) and follows the blockchain in real time.
* Processor code emits **Metrics, Event Logs, Entities, etc** (more on [🗂️ Data types](doc:data-types)) that shows up automatically on Sentio UI.
* Processor code could also emit **Webhooks.**
* User A, B, C can build dashboard and alert on top of all the data collected. And create API based on the collected data.

Indexer status can be view at [💡 Data Source](doc:data-source) and the code could be directly edit by [📦 Web IDE](doc:web-ide)