# 🔍 Avoid high cardinality

Sentio stores time series data in a database optimized for time series usecase. Thus, it suffers the same limitation as any monitoring system -- It can't support **large cardinality labels (e.g. More than **<mark style="color:red;">**10k**</mark>** labels)**.
