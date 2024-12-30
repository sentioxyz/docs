---
title: Debug and Simulation
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
## Debug API

### Get Indexed Call Trace

API to get Sentio call trace. It takes `txId.txHash` and `networkId` arguments, where the first is transaction hash, and the second is the numeric ethereum chain ID. An example call looks like the following.

```
curl --header 'api-key: <API_KEY>' \
     --header 'Content-Type: application/json' \
     --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?txId.txHash=0x4564f9720643fcf54732172d1f29b9a5f16991ca5ae171307181851c37511089&#x26;networkId=1'
```

The results looks very similar to the normal [Ethereum call trace](https://geth.ethereum.org/docs/developers/evm-tracing/built-in-tracers). But we have an additional `startIndex` and `startIndex` on each trace entry even for the LOG, representing the execution order in the trace.

This allows you to build chart that marks the order of fund flow.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (2) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

### Get Decoded Call Trace

```
curl --header 'api-key: <API_KEY>' \
     --header 'Content-Type: application/json' \
     --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?txId.txHash=0x4564f9720643fcf54732172d1f29b9a5f16991ca5ae171307181851c37511089&#x26;networkId=1&#x26;withInternalCalls=true'
```

An extra `withInternalCalls=true` parameter could be attach to fetch the decoded trace, which will give you the function info, decoded parameters of both external and internal call trace.

## Simulation API

### Create simulation

#### Single Simulation

The simulation body should be included in the request body. You can follow the example below.

```json
curl --location 'https://app.sentio.xyz/api/v1/solidity/simulate' \
--header 'api-key: <API_KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "projectOwner": "<USER>",
    "projectSlug": "<PROJECT>",
    "simulation": {
        "networkId": "1",          // Chain ID, "1" for Ethereum mainnet. See chainlist.org for details
        "blockNumber": "17415072",
        "transactionIndex": "97",  // transaction index in the block

        // standard field for evm transactions
        "from": "0x5e8bb488e85ea732e17150862b1acfc213a7c13d",
        "to": "0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",
        "value": "0x0",
        "gas": "0x31ae2",
        "gasPrice": "0xe59a1adbe",
        "input": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000647dffef0000000000000000000000000000000000000000000000000000000000000002080c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000003077b58d5d378391980000000000000000000000000000000000000000000000000000000032b2ced3e40e9d100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000082646b22a3960da69ef7a778c16dd6fb85dd999000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000032b2ced3e40e9d1",

        // overrides
        "stateOverrides": {
            "0x0811fd1808e14f0b93f0514313965a5f142c5539": {
                "balance": "0x1111111111111111"
            }
        },
        "blockOverride": {
            "baseFee": "0x0"
        }
    }
}'
```

Your simulations will be saved, and a unique ID for each simulation is included in the response. It will be useful for fetching simulation details.

#### Bundle Simulation

You could also create bundle simulations so that one transaction could be executed one after another. For `blockNumber` `transactionIndex` `networkId` and `stateOverrides` `blockOverrides` fields, only the first simulation takes effect.

```sh
curl -L 'https://app.sentio.xyz/api/v1/solidity/simulate_bundle' \
--header 'api-key: <API_KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "projectOwner": "<USER>",
    "projectSlug": "<PROJECT>",
    "simulations": [
        {
            "blockNumber": "17415072",
            "transactionIndex": "97",
            "network_id": "1",
            "from": "0x5e8bb488e85ea732e17150862b1acfc213a7c13d",
            "to": "0xef1c6e67703c7bd7107eed8303fbe6ec2554bf6b",
            "gas": "0x31ae2",
            "gasPrice": "0xe59a1adbe",
            "input": "0x3593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000647dffef0000000000000000000000000000000000000000000000000000000000000002080c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000003077b58d5d378391980000000000000000000000000000000000000000000000000000000032b2ced3e40e9d100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000082646b22a3960da69ef7a778c16dd6fb85dd999000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000032b2ced3e40e9d1",
            "value": "0x0"
        },
        {
            "from": "0x99922ca65188cc218a5d316969dc66d8672994f2",
            "to": "0xae96a46b64e08861cf2af8c7d954b722e0725a0c",
            "gas": "0x52",
            "gasPrice": "0xe5909173e",
            "maxPriorityFeePerGas": "0x3b023380",
            "maxFeePerGas": "0x147d03",
            "input": "0x",
            "value": "0xbe32c0faed7400"
        }
    ]
}'
```

It will return a list of successful simulation results, it will stop at the transaction that failed to be executed. e.g. if you simulate 4 transactions, while the 3 transactions can't be executed (e.g. wrong gas spec), then the result looks like this.

```
{
    "bundleId": "WKTMcdBc",
    "simulations": [
        {
            ... result for tx 1
        },
        {
            ... result for tx 1
        }
    ],
    // tx 3 failed to execute, error will be recorded for this bundle
    "error": "tracing failed: tip higher than fee cap: address 0x99922ca65188cC218A5d316969dc66d8672994f2, tip: 990000000, gasFeeCap: 1342723"
}
```

### Get detail trace

#### State Diff

Endpoint: [https://app.sentio.xyz/api/v1/solidity/state\_diff](https://app.sentio.xyz/api/v1/solidity/state_diff)

API key is required.

<table><thead><tr><th width="175">URL Param</th><th>Description</th></tr></thead><tbody><tr><td>networkId</td><td>Chain ID, "1" for Ethereum mainnet. See chainlist.org for details</td></tr><tr><td>projectOwner</td><td>User name</td></tr><tr><td>projectSlug</td><td>Project name</td></tr><tr><td>txId.simulationId</td><td>The unique ID for each simulation</td></tr><tr><td>txId.bundleId</td><td>The unique ID for bundle</td></tr></tbody></table>

Example:

```bash
curl --location 'https://app.sentio.xyz/api/v1/solidity/state_diff?networkId=1&txId.simulationId=pVwBCxr3&projectOwner=<USER>&projectSlug=<PROJECT>' \
--header 'api-key: <API_KEY>'
```

If this is bundle simulation, then use `txId.bundleId`  instead of `txId.simulationId`, it will only return traces that were successfully executed. 

#### Trace Decoded Trace

Endpoint: [https://app.sentio.xyz/api/v1/solidity/call\_trace](https://app.sentio.xyz/api/v1/solidity/call_trace)

API key is required.

<table><thead><tr><th width="175">URL Param</th><th>Description</th></tr></thead><tbody><tr><td>networkId</td><td>Chain ID, "1" for Ethereum mainnet. See chainlist.org for details</td></tr><tr><td>projectOwner</td><td>User name</td></tr><tr><td>projectSlug</td><td>Project name</td></tr><tr><td>txId.simulationId</td><td>The unique ID for each simulation</td></tr><tr><td>withInternalCalls</td><td>If true, fully decoded trace will be returned, otherwise only the raw trace</td></tr></tbody></table>

Example:

```bash
curl --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?withInternalCalls=true&networkId=<CHAIN_ID>&txId.simulationId=<SIMULATION_ID>&projectOwner=<USER>&projectSlug=<PROJECT>' \
--header 'api-key: <API_KEY>'
```

### Get SImulation

To retrieve old simulation results, use the following API for single simulation,

```sh
curl -L 'https://app.sentio.xyz/api/v1/solidity/simulate/<SIMULATION_ID>?&projectOwner=<USER>&projectSlug=<PROJECT>' \
-H 'api-key: <API_KEY>'
```

and use the following for bundle simulation

```sh
curl -L 'https://app.sentio.xyz/api/v1/solidity/simulate_bundle/<BUNDLE_ID>?&projectOwner=<USER>&projectSlug=<PROJECT>' \
-H 'api-key: <API_KEY>'
```

[//]: # "# Code Index"

[//]: # "Code intelligence experience like jumping to the definition and finding reference experience is powered by index API. Two parameters to be provided, numeric chain ID (e.g. polygon 137 as in the example), and the transaction ID."

[//]: #

[//]: # "```"

[//]: # "curl --header 'api-key: <API_KEY>' \\"

[//]: # "     --header 'Content-Type: application/json' \\"

[//]: # "     --location 'https://app.sentio.xyz/api/v1/solidity/index/137/0x55caabb0d2b704fd0ef8192a7e35d8837e678207'"

[//]: # "```"

[//]: #

[//]: # "The API returns a SCIP `Index`, the details schema is documented at [https://github.com/sourcegraph/scip/blob/main/scip.proto](https://github.com/sourcegraph/scip/blob/main/scip.proto). You can read more about SCIP [here](https://docs.sourcegraph.com/code_navigation/explanations/writing_an_indexer#understanding-the-scip-protobuf-schema)."

[//]: #

[//]: # "We also provided an NPM package [@sentio/scip](https://www.npmjs.com/package/@sentio/scip) that provides utils to help process the results."

[//]: #

[//]: # (#
