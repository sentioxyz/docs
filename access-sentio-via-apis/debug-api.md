---
title: Debug API
categorySlug: access-sentio-via-apis
hidden: false
---

## Get Indexed Call Trace

API to get Sentio call trace. It takes `txId.txHash` and `networkId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID. An example call looks like the following.

<pre data-overflow="wrap"><code><strong>curl --header 'api-key: &#x3C;API_KEY>' \
</strong>     --header 'Content-Type: application/json' \
     --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?txId.txHash=0x4564f9720643fcf54732172d1f29b9a5f16991ca5ae171307181851c37511089&#x26;networkId=1'
</code></pre>

The results looks very similar to the normal [Ethereum call trace](https://geth.ethereum.org/docs/developers/evm-tracing/built-in-tracers). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.&#x20;

This allows you to build chart that marks the order of fund flow.

<figure><img src="../.gitbook/assets/image (2) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

## Get Decoded Call Trace

<pre data-overflow="wrap"><code><strong>curl --header 'api-key: &#x3C;API_KEY>' \
</strong>     --header 'Content-Type: application/json' \
     --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?txId.txHash=0x4564f9720643fcf54732172d1f29b9a5f16991ca5ae171307181851c37511089&#x26;networkId=1&#x26;withInternalCalls=true'
</code></pre>

An extra `withInternalCalls=true` parameter could be attach to fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.
