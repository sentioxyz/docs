---
title: Access the Network
deprecated: false
hidden: false
metadata:
  robots: index
---
# Access through Sentio Platform

The easiest way to use Sentio Network. You can create a Sentio project with Sentio Network as it's environment, which makes your processor or subgraph run on Sentio Compute Network and store the data on Sentio Data Network.

<Image align="center" alt="Host Environment in Project Setting Form" width="80% " src="https://files.readme.io/3ea0a7aa4300f1f66f7a7b752d13551a3e089248fa5d891c40dbc18088d27bb3-image.png" />

**Note**: The host environment can only be configured at project creation and **cannot be modified afterward**.

# Access Directly

You can also access Sentio Network directly, without the Sentio Platform. This gives you more control but loses benefits like version control and UI.

Direct access takes five steps:

1. Fund your Billing balance.
2. *(Optional)* Add operator keys.
3. Upload your processor bundle to IPFS.
4. Create the processor on-chain.
5. Start the processor.

On-chain calls below use [`cast`](https://book.getfoundry.sh/cast/) from Foundry. Import your key once, then reference it as `--account sentio_user`:

```shell
cast wallet import sentio_user --interactive
```

Set these environment variables for the examples:

```shell
export SENTIO_RPC=https://testnet.sentio.xyz
export SENTIO_TOKEN=0xB677797765beB59D0195d92b0E4d009609187d7C
export BILLING=0x9b780B4ecEb0144944B4afFddEe040bE67a8A224
export PERMISSIONS=0x6cFcA54e6cFD00dC7D758aB3825d465982A53623
export PROCESSOR_REGISTRY=0x46659Cd038831023a8880487211009614c921861
export CONTROLLER=0x01E46832AaF273C9A9FF5ECB5D8214AeF096E3c3
```

### Testnet contract addresses

Every contract is registered in the `AddressBook` proxy at `0x17d5aF5Ed9C2558B802bEfcCc5a94C36dE95BB0B`. Current deployment:

| Key                  | Address                                      |
|----------------------|----------------------------------------------|
| `sentio_token`       | `0xB677797765beB59D0195d92b0E4d009609187d7C` |
| `billing`            | `0x9b780B4ecEb0144944B4afFddEe040bE67a8A224` |
| `permissions`        | `0x6cFcA54e6cFD00dC7D758aB3825d465982A53623` |
| `processor_registry` | `0x46659Cd038831023a8880487211009614c921861` |
| `controller`         | `0x01E46832AaF273C9A9FF5ECB5D8214AeF096E3c3` |
| `indexer_registry`   | `0x130ea5163a0bA808ED8432eEAc7869351a47F99b` |
| `staking`            | `0x9dE7C20a1441e4648fe5A40e6f14f3CEb007444A` |
| `epoch_controller`   | `0xc0a730132fA1291717C4a7182D88a4d536A7b0FF` |
| `voting_parameters`  | `0x4E9EcfF4122476Cb61874ff960Ce31d792ed2C0F` |
| `usage_tracker`      | `0x898F6cd6Fd0119C24335d228aF49C9F1FaA97b58` |
| `rewards`            | `0x5CaB0dFa84105ed52343B20AbA15dF1d6a0E6177` |

## Step 1: Fund your Billing balance

Fees are pulled from balances in the `Billing` contract:

* **Indexing fees** are charged to the processor **owner**.
* **Query fees** are charged to the **query initiator**.

Both parties must fund their own balance before using the network.

Approve, then deposit 100 Sentio Token:

```shell
AMOUNT=$(cast --to-wei 100 ether)

cast send $SENTIO_TOKEN "approve(address,uint256)" $BILLING $AMOUNT \
  --rpc-url $SENTIO_RPC --account sentio_user

cast send $BILLING "deposit(uint256)" $AMOUNT \
  --rpc-url $SENTIO_RPC --account sentio_user
```

To top up another account, use `depositTo(address,uint256)`. To withdraw, use `withdraw(uint256)`.

## Step 2: Add an operator (optional)

Adding another address as your operator gives it two powers on your behalf:

* It can manage your processors — create, start, and stop them under your ownership.
* Queries it signs can be billed to **your** Billing balance instead of its own.

This is how you let a CI bot, hot key, or teammate act for you without sharing your main key.

```shell
OPERATOR=0xBEEFBEEFBEEFBEEFBEEFBEEFBEEFBEEFBEEFBEEF

cast send $PERMISSIONS "addOperator(address)" $OPERATOR \
  --rpc-url $SENTIO_RPC --account sentio_user
```

Revoke with `removeOperator(address)`.

## Step 3: Upload the processor bundle to IPFS

TODO: the standalone upload path is still being designed. The `@sentio/cli` `upload` command currently requires a Sentio Platform account and does not publish to IPFS directly. Until a dedicated CLI ships, pin your compiled bundle through any IPFS pinning service and keep the resulting CID.

## Step 4: Create the processor on-chain

Register the CID in `ProcessorRegistry`:

```shell
PROCESSOR_ID="my-cool-processor"
IPFS_CID="QmYourProcessorBundleCid..."
SDK_VERSION="3.0.0"

cast send $PROCESSOR_REGISTRY \
  "createProcessor(string,(uint8,string),(string,bool,bool)[],string)" \
  "$PROCESSOR_ID" \
  "(0,\"$IPFS_CID\")" \
  '[("1",true,false)]' \
  "$SDK_VERSION" \
  --rpc-url $SENTIO_RPC --account sentio_user
```

* `ProcessorSource` is `(sourceType, ipfsCid)`; `sourceType = 0` means IPFS (the only supported value today).
* `ChainConfig` is `(chainId, enableRpc, enableTrace)`. Add one tuple per chain your processor reads. Set `enableTrace=true` only if you need call traces — indexers without trace support will be excluded.

## Step 5: Start the processor

`createProcessor` only stores metadata. You must explicitly start the processor to have it allocated to an indexer:

```shell
cast send $CONTROLLER "startProcessor(string)" "$PROCESSOR_ID" \
  --rpc-url $SENTIO_RPC --account sentio_user
```

`Controller` picks an eligible indexer (round-robin over nodes matching `requireChains`) and writes the allocation. The indexer then downloads the bundle from IPFS and starts running it.

Stop with `stopProcessor(string)`. Only the owner, an operator of the owner, or an explicit processor admin can start or stop a processor.

# Access Data Network via Clickhouse CLI

TODO (mengyu)
