---
title: 🔍 Avoid high cardinality
categorySlug: best-practices
hidden: false
---

For [#counter](../references/concepts/data-types/metrics.md#counter "mention")and [#gauge](../references/concepts/data-types/metrics.md#gauge "mention"), Sentio does not support **large cardinality labels (e.g. More than **<mark style="color:red;">**10k**</mark>** label combinations)**. If you exceed this limit, you will get an error and the processor stops running. Try to reduce the label combinations and re-upload the processor. Some examples are:

* Wallet Address
* A numeric Amount
* A random and non-whitelisted pool address
* ...

In these cases, use [event-logs](../references/concepts/data-types/event-logs "mention")instead
