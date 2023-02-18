# 🔍 Handling errors

## Over Quota

If you get the Quota exceeded error, the processor will stop running. You can contact sales to upgrade your plan, Or waiting for the next month for the quota reset.



## Time series exceeds 10k

Please refer to [avoid-high-cardinality.md](avoid-high-cardinality.md "mention")



## Invalid Label Name

If your metric or label name contains invalid character or conflicts with system reserved labels, processor will stop running. Please update and re-upload



## Regular Processor Error

If you observe an error, it is always possible to use [debug-processors.md](../developer-guides/sdk-guide/debug-processors.md "mention")to help with the debugging.
