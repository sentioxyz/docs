# 🔍 Performance Tuning

## My Query speed is slow, what should I do?

It is possible that you have too much data, one trick you can do is to use [#resolution](../developer-guides/sdk-guide/metrics-in-processors.md#resolution "mention") to reduce the number of data points stored. Note, this is for [#gauge](../references/concepts/data-types/metrics.md#gauge "mention")only at this moment.



## My Processor backfill is too slow, what should I do?

Check if you are making too many **Node RPC** calls in the processor, this might cause a major slow down. One trick is to reduce the intervals from `onBlockInterval` and `onTimeInterval`.
