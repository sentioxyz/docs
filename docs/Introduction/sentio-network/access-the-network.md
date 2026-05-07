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

**TODO**, next? is there a different in uploading?

# Access Directly

You can also access Sentio Network directly, without the Sentio Platform. This gives you more control but loses benefits like version control and UI.

Direct access takes five steps:

1. Fund your Billing balance.
2. _(Optional)_ Add operator keys.
3. Upload your processor bundle to IPFS.
4. Create the processor on-chain.
5. Start the processor.

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

To stop a processor later, call `Controller.stopProcessor(string)` directly (e.g. with `cast send`). Only the owner, an operator of the owner, or an explicit processor admin can start or stop a processor.

1. Fund your Billing balance.
2. _(Optional)_ Add operator keys.
3. Upload your processor bundle to IPFS.
4. Create the processor on-chain.
5. Start the processor.

The Data Network speaks the native ClickHouse protocol. Queries must be signed by an Ethereum key whose Billing balance covers the fee, so you run a local **sidecar** that signs queries with your key on the way out:

```json title="housegate-sidecar.json"
{
  "listen": ":9001",
  "metrics_listen": ":9091",
  "sidecar": {
    "mode": true,
    "upstream": "64.38.144.158:10001",
    "private_key_hex": "0xYOUR_PRIVATE_KEY_HERE"
  }
}
```

`private_key_hex` is the key whose Billing balance gets charged. To bill a different account, have that account `addOperator(yourKey)` first — see [Step 2](#step-2-add-an-operator-optional).

Start the sidecar from a checkout of [`housegate`](https://github.com/sentioxyz/housegate):

```shell
bazel run //cmd:housegate -- --config=/absolute/path/to/housegate-sidecar.json
```

Then point any `clickhouse-client` at it — no `--user`/`--password` needed.

## Permission model

Every database tracks a 4-bit permission bitmask per address, stored on chain:

| Bit    | Name  | Grants                                                    |
| ------ | ----- | --------------------------------------------------------- |
| `0x01` | Read  | `SELECT`, `SHOW TABLES`, `DESCRIBE`                       |
| `0x02` | Write | `INSERT`, `ALTER`, `DELETE`, `CREATE TABLE`, `DROP TABLE` |
| `0x04` | Admin | `GRANT` / `REVOKE`                                        |
| `0x08` | Owner | All of the above, plus `DROP DATABASE`                    |

Defaults at creation time:

* **Processor database** — processor owner gets `Admin + Read` (`0x05`). They can read the data and grant/revoke Read to others, but **cannot write**. Writes are reserved for the processor's own handler logic so the dataset stays a faithful, reproducible function of on-chain history; allowing arbitrary owner writes would break that integrity guarantee. The indexer running the processor is the only writer.
* **User database** — creator gets `Owner` (`0x08`).

`Admin` alone does **not** imply Read or Write — it is purely a delegation bit. An Admin can only grant or revoke the Read/Write bits it itself holds. A pure-Admin account (e.g. someone granted `Admin` without `Read`) can manage other people's permissions but cannot read or write the data. `Owner` is the only role with no such restriction.

## Processor databases

Each processor replica gets a read-only database named `${processorId}_${replicaIndex}` (e.g. `fv2CWEeV_0`). Today every processor runs as a single replica, so `replicaIndex` is always `0`; the schema is forward-compatible with multi-replica deployments. The processor owner gets Admin+Read; other readers need an explicit grant.

```shell
clickhouse client --host 127.0.0.1 --port 9001
:) SHOW DATABASES;
:) USE fv2CWEeV_0;
:) SHOW TABLES;
:) SELECT * FROM entity_AccountSnapshot LIMIT 1;
```

The owner can share read access through standard `GRANT` / `REVOKE`. Permissions are **database-level only** — the per-table form (`db.table`) is not supported:

```sql
USE fv2CWEeV_0;

-- Per-address grant
GRANT  SELECT ON fv2CWEeV_0 TO   '0x4F070AB509a55A3e11743d638A866991328Ce560';
REVOKE SELECT ON fv2CWEeV_0 FROM '0x4F070AB509a55A3e11743d638A866991328Ce560';

-- Public read (zero address = wildcard)
GRANT  SELECT ON fv2CWEeV_0 TO   '0x0000000000000000000000000000000000000000';
REVOKE SELECT ON fv2CWEeV_0 FROM '0x0000000000000000000000000000000000000000';
```

> **Always `USE` the database before `GRANT` / `REVOKE`.** Otherwise the statement fails with `commitgate (GRANT): permission tx ... execution reverted`. Setting `--database` in the handshake works too.

## User databases

For a database you can write to directly, create one with plain `CREATE DATABASE`. You become the Owner (full read/write/admin/grant), and standard ClickHouse DDL/DML works as expected:

```sql
CREATE DATABASE my_notes;
USE my_notes;

CREATE TABLE notes (id UInt64, msg String) ENGINE = MergeTree() ORDER BY id;
INSERT INTO notes VALUES (1, 'hello'), (2, 'world'), (3, 'sentio');
SELECT * FROM notes ORDER BY id;
DELETE FROM notes WHERE id = 2;

DROP TABLE notes;
DROP DATABASE my_notes;
```

Because you're the Owner, you can grant any combination of Read/Write/Admin to any address — same syntax as for processor databases:

```sql
USE my_notes;
GRANT  SELECT ON my_notes TO   '0x4F070AB509a55A3e11743d638A866991328Ce560';
REVOKE SELECT ON my_notes FROM '0x4F070AB509a55A3e11743d638A866991328Ce560';
```

`CREATE DATABASE`, `CREATE TABLE`, and queries are all charged against your Billing balance — fund it via [Step 1](#step-1-fund-your-billing-balance) before running this section.

# Monitor processors via Node JSON-RPC

Each indexer node exposes a small JSON-RPC server (port `10002`) for inspecting processor execution. Hit any node — if the processor isn't local to that node, the request is forwarded to whichever indexer hosts it.

| Method                   | Use                                                                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `sentio_nodeStatus`      | Node identity + sync status: node type, indexer ID, current block, head block, registered capabilities.                                |
| `sentio_processorStatus` | Per-chain progress for a processor: processed block / timestamp, state (`CATCHING_UP` / `PROCESSING` / …), SDK version, entity schema. |
| `sentio_processorLogs`   | Recent driver logs for a processor (paged via `limit` + cursor).                                                                       |

Examples:

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
