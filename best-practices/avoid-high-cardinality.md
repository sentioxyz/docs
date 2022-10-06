# 🔍 Avoid high cardinality

Sentio stores time series data in a database optimized for time series usecase. Thus, it suffers the same limitation as any monitoring system -- It can't support **large cardinality labels**.

For example, you should avoid using **wallet address** as a label when you capture ERC-20 transfers.
