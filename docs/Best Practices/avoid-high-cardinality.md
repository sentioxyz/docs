---
title: 🔍 Avoid high cardinality
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
For [#counter](metrics#counter "mention")and [#gauge](metrics#gauge "mention"), Sentio does not support **large cardinality labels (e.g. More than **<mark style="color:red;">**10k**</mark>** label combinations)**. If you exceed this limit, you will get an error and the processor stops running. Try to reduce the label combinations and re-upload the processor. Some examples are:

* Wallet Address
* A numeric Amount
* A random and non-whitelisted pool address
* ...

In these cases, use [event-logs](event-logs "mention") instead