# Simulation API

## Create simulation

For all simulation API calls, you should have an API key, and pass it by the header with the field `api-key`.&#x20;

The simulation body should be included in the request body. You can follow the example below.

```json
curl --location 'https://app.sentio.xyz/api/v1/solidity/simulate' \
--header 'api-key: API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "projectOwner": "USER",
    "projectSlug": "PROJECT",
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

## Get detail trace

### State Diff

Endpoint: https://app.sentio.xyz/api/v1/solidity/state\_diff

API key is required.

<table><thead><tr><th width="175">URL Param</th><th>Description</th></tr></thead><tbody><tr><td>networkId</td><td>Chain ID, "1" for Ethereum mainnet. See chainlist.org for details</td></tr><tr><td>projectOwner</td><td>User name</td></tr><tr><td>projectSlug</td><td>Project name</td></tr><tr><td>txId.simulationId</td><td>The unique ID for each simulation</td></tr></tbody></table>

Example:

```bash
curl --location 'https://app.sentio.xyz/api/v1/solidity/state_diff?networkId=1&txId.simulationId=pVwBCxr3&projectOwner=USER&projectSlug=PROJECT' \
--header 'api-key: API_KEY'
```

### Trace Decoded Trace

Endpoint: https://app.sentio.xyz/api/v1/solidity/call\_trace

API key is required.

<table><thead><tr><th width="175">URL Param</th><th>Description</th></tr></thead><tbody><tr><td>networkId</td><td>Chain ID, "1" for Ethereum mainnet. See chainlist.org for details</td></tr><tr><td>projectOwner</td><td>User name</td></tr><tr><td>projectSlug</td><td>Project name</td></tr><tr><td>txId.simulationId</td><td>The unique ID for each simulation</td></tr><tr><td>withInternalCalls</td><td>If true, fully decoded trace will be returned, otherwise only the raw trace</td></tr></tbody></table>

Example:

```bash
curl --location 'https://app.sentio.xyz/api/v1/solidity/call_trace?withInternalCalls=true&networkId=1&txId.simulationId=pVwBCxr3&projectOwner=USER&projectSlug=PROJECT' \
--header 'api-key: API_KEY'
```





