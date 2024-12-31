---
title: Get trace by transaction
excerpt: >-
  API to get Sentio call trace. It takes `txId.txHash` and `chainSpec.chainId`
  arguments, where the first is transaction hash, and the second is the numeric
  ethereum chain ID.


  The results looks very similar to the normal [Ethereum call
  trace](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png).
  But we have an additional `startIndex` and `startIndex` on each trace entry
  even for the LOG, representing the execution order in the trace.


  This allows you to build chart that marks the order of fund flow.


  ![screenshot](https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image%20(2)%20(1)%20(1)%20(1).png)
api:
  file: bazel-binopenapiopenapiopenapiopenapi.swagger.json
  operationId: GetCallTraceByTransaction
hidden: false
---