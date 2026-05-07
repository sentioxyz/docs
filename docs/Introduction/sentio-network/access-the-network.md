---
title: Access the Network
deprecated: false
hidden: false
metadata:
  robots: index
---
This page covers the operational steps for using Sentio Network. For the design of the layers themselves, see [Compute Network](compute-network) and [Storage Network](storage-network).

You can access Sentio Network through the fully managed Sentio Platform, or directly via on-chain calls.

# Access through Sentio Platform

The easiest way to use Sentio Network is through [Sentio Platform](https://app.sentio.xyz/). Create a Sentio project with Sentio Network (currently testnet) as its host environment — your processor or subgraph runs on the Compute Network and stores data on the Storage Network, with billing delegated to Sentio Platform.

<Image align="center" alt="Host Environment in Project Setting Form" width="80% " src="https://files.readme.io/3ea0a7aa4300f1f66f7a7b752d13551a3e089248fa5d891c40dbc18088d27bb3-image.png" />

**Note**: The host environment can only be configured at project creation and **cannot be modified afterward**.

<br />

```
yarn sentio upload --sentio-network testnet --required-chain-id 1
```

# Access Directly

Direct access gives you more control but loses platform benefits like version control and UI. The flow is:

1. Fund your Billing balance.
2. _(Optional)_ Add operator keys.
3. Upload your processor bundle and start it on-chain.
4. Connect a query client through the sidecar.

On-chain calls below use [`cast`](https://book.getfoundry.sh/cast/) from Foundry. Import your key once, then reference it as `--account sentio_user`:

```shell
cast wallet import sentio_user --interactive
```

Set these environment variables for the examples:

```shell
export SENTIO_RPC=https://sentio-testnet.rpc.sentio.xyz
export SENTIO_TOKEN=0x2f84Cb6E856f0C82bd44c536E022c0bCcD787411
export BILLING=0x883556C4080621434e28129257Dc37eE39ED6351
export PERMISSIONS=0x1326C7b6C6c02c45B63aD007e9AD84a79f3e2C5b
export PROCESSOR_REGISTRY=0x67857f96391fF2fAce037Ff655919a3850c6b175
export CONTROLLER=0x86a9632527bbc3873b32c83AAEF0e7fC36368acC
```

### Testnet contract addresses

Every contract is registered in the `AddressBook` proxy at `0x11cDDF46f16925aa630Af9D5158028E56309868f`. Current deployment:

| Key                  | Address                                      |
| -------------------- | -------------------------------------------- |
| `sentio_token`       | `0x2f84Cb6E856f0C82bd44c536E022c0bCcD787411` |
| `billing`            | `0x883556C4080621434e28129257Dc37eE39ED6351` |
| `permissions`        | `0x1326C7b6C6c02c45B63aD007e9AD84a79f3e2C5b` |
| `processor_registry` | `0x67857f96391fF2fAce037Ff655919a3850c6b175` |
| `controller`         | `0x86a9632527bbc3873b32c83AAEF0e7fC36368acC` |
| `indexer_registry`   | `0x2613b6a54f9A75F4A446E359a1242DF89845e1e3` |
| `staking`            | `0x747340cE7532Dab73A09F41ec0ebD2428025190D` |
| `epoch_controller`   | `0xAB8BC199846AF58F134118a2bA10415f711369Bb` |
| `voting_parameters`  | `0xAc4aA8d454b688E83790b36b5889aA0768758288` |
| `usage_tracker`      | `0x8F9090Ca5343D205dB840333841B12fA182DFE81` |
| `rewards`            | `0x1992d26CcC4AA4137926fF877EFAcaB23351354c` |
| `databases`          | `0xd1304f499D0BEaDA496fC0d29515e36a469643cC` |

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

<Image align="center" src="https://files.readme.io/6f1b44c579c7fd1ab579517423426cdecc29db3047cddb48e3bfd2133dc7b426-image.png" />

<br />

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

![](https://files.readme.io/be39eb014eef627a9e759fe850f67ee05442ba7bc1a7a475cfd52420847ab769-image.png)

## Step 3: Upload, create, and start the processor

`@sentio/cli` ships an `upload --no-platform` flow that pins the bundle to IPFS and submits both `createProcessor` and `startProcessor` for you. Run it from your processor project directory with `PRIVATE_KEY` set to the same key you funded in Step 1:

```shell
PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE \
  yarn sentio upload --sentio-network testnet --required-chain-id 1 --no-platform 
```

Pass one `--required-chain-id` per chain your processor reads. The CLI prints the resolved contract addresses, your wallet's ST + Billing balance, asks for confirmation, then runs:

1. `tsup` packages `src/processor.ts` into `dist/lib.js`.
2. The bundle is pinned to IPFS via `https://api.sentio.xyz/v1/ipfs/add`, returning a CID.
3. `ProcessorRegistry.createProcessor` is signed and broadcast.
4. `Controller.startProcessor` is signed and broadcast — `Controller` then allocates the processor to an eligible indexer.

On success the CLI prints the processor ID, IPFS CID, and the two on-chain tx hashes:

```
=== Upload Complete ===
         Processor ID: <user>_<project-name>
         IPFS CID: Qm…
         Network: testnet
         sha256: …
```

To stop a processor later, call `Controller.stopProcessor(string)` directly (e.g. with `cast send`). Only the owner, an operator of the owner, or an explicit processor admin can start or stop a processor. For the full processor lifecycle, see [Compute Network](compute-network#processor-lifecycle).

## Step 4: Connect a query client

The Storage Network speaks the native ClickHouse protocol. Queries must be signed by an Ethereum key whose Billing balance covers the fee, so you run a local **client** that signs queries with your key on the way out:

Download [storage-network-daemon](https://github.com/sentioxyz/storage-network-daemon/releases)

Start the daemon with:

```Text With Owner Key
storage-network-daemon --sidecar --state=https://testnet-gateway.sentio.xyz --listen=:10003 --sidecar-key=$OWNER_PRIVATE_KEY
```
```shell With Operator Key
storage-network-daemon --sidecar --state=https://testnet-gateway.sentio.xyz --listen=:9001 --sidecar-key=$OPERATOR_PRIVATE_KEY --owner=$OWNER_ADDRESS
```

To avoid using private key in command line, see [Step 2](#step-2-add-an-operator-optional) to add an operator and then use operator's private key.

Then point any `[clickhouse-client](https://clickhouse.com/docs/install/quick-install#start-clickhouse-client)` at it — no `--user`/`--password` needed:

```shell
clickhouse client --port 9001
:) SHOW DATABASES;
:) USE fv2CWEeV_0;
:) SHOW TABLES;
:) SELECT * FROM entity_AccountSnapshot LIMIT 1;
```

For the database permission model and how to share read access, see [Storage Network](storage-network).

# Monitor processors via Node JSON-RPC

Each indexer node exposes a small JSON-RPC server on port `10002` for inspecting processor execution. Hit any node — if the processor isn't local to that node, the request is forwarded to whichever indexer hosts it. Method semantics are documented in [Compute Network](compute-network#node-json-rpc).

```shell
# Node identity + sync state
curl -s http://<indexer-host>:10002 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","method":"sentio_nodeStatus","params":[],"id":1}'

# Processor progress
curl -s http://<indexer-host>:10002 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","method":"sentio_processorStatus",
           "params":[{"id":"<processor-id>"}],"id":1}'

# Recent logs (last 10 entries)
curl -s http://<indexer-host>:10002 -H 'Content-Type: application/json' \
  --data '{"jsonrpc":"2.0","method":"sentio_processorLogs",
           "params":[{"processor_id":"<processor-id>","limit":10}],"id":1}'
```

TODO use hub UI
