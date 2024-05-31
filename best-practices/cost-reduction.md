---
title: 🔍 Cost Reduction
categorySlug: best-practices
hidden: false
---

## Use metrics whenever possible

[metrics.md](../references/concepts/data-types/metrics.md "mention")has the lowest unit cost. If you can use metrics without [avoid-high-cardinality.md](avoid-high-cardinality.md "mention"), it is always the best option to achieve best query speed and lowest cost.



## Reduce interval from onTimeInterval, onBlockInterval or onVersionInterval

From [handlers-and-filters.md](../developer-guides/sdk-guide/handlers-and-filters.md "mention"), we introduced that processor could wakeup and execute a handler, then emit some data. You could always adjust the interval to reduce the frequency, thus reduce the cost.
