---
title: 🔍 Cost Reduction
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
## Use metrics whenever possible

[metrics](metrics "mention")has the lowest unit cost. If you can use metrics without [avoid-high-cardinality](avoid-high-cardinality "mention"), it is always the best option to achieve best query speed and lowest cost.

## Reduce interval from onTimeInterval, onBlockInterval or onVersionInterval

From [handlers-and-filters](handlers-and-filters "mention"), we introduced that processor could wake up and execute a handler, then emit some data. You could always adjust the interval to reduce the frequency, thus reduce the cost.
