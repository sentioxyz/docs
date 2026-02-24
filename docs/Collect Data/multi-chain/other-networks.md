---
title: Other Networks
excerpt: ''
description: Details on processors for Bitcoin, StarkNet, and other supported chains.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Sentio is continually expanding its support. This section covers chains with specific processors that don't fit into the larger EVM or Move categories previously detailed, often representing unique architectures or being in earlier stages of integration.

## Bitcoin

* **Processor:** `BTCProcessor`
  * **Typical Use Case:** Monitoring all Bitcoin transactions, analyzing block data, tracking activity related to specific addresses (via filtering in handlers).
  * **Binding:** `BTCProcessor.bind({ chainId: 'bitcoin_mainnet', startBlock: 800000n, address: 'optional_context_address' })` (Note: `chainId` should be the specific identifier used by Sentio for Bitcoin networks).
* **Handlers:**
  * `onTransaction(handler(transaction, ctx), filter?)`: Triggered for every transaction processed. The `transaction` object represents a raw Bitcoin transaction with inputs (`vin`) and outputs (`vout`). Optional `filter` can be applied (details on `TransactionFilters` structure needed from its definition, but likely involves addresses, scripts, etc.).
  * `onBlockInterval(handler(block, ctx), interval?, backfillInterval?, fetchConfig?)`: Processes blocks (`BTCBlock` type) based on block number intervals. The `block` object contains header information and optionally full transaction data if `fetchConfig.getTransactions` is true.
  * `onTimeInterval(handler(block, ctx), intervalMinutes?, backfillIntervalMinutes?, fetchConfig?)`: Processes blocks based on time intervals, similar to `onBlockInterval`.
* **Sample code:**
  ```typescript
  import { BTCProcessor, BTCContext, BTCBlockContext, Transaction, BTCBlock } from "@sentio/sdk/btc"; // Adjust path as needed

  const MY_ADDRESS = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"; // Example address

  BTCProcessor.bind({
    chainId: "bitcoin_mainnet", // Use the correct Sentio chainId for Bitcoin
    startBlock: 810000n,
    // address: MY_ADDRESS // Optional: address for context, filter in handler if needed
  })
  .onTransaction(async (tx: Transaction, ctx: BTCContext) => {
    let involvedInTx = false;
    let outputValueToMyAddress = 0;

    // Check outputs
    for (const output of tx.vout) {
      if (output.scriptPubKey?.address === MY_ADDRESS) {
        involvedInTx = true;
        outputValueToMyAddress += output.value; // Value is typically in BTC, confirm unit
        ctx.meter.Counter("btc_received").add(output.value, { address: MY_ADDRESS });
      }
      // Could also check input addresses if needed (requires info from previous txns)
    }

    if (involvedInTx) {
      ctx.meter.Counter("transactions_involving_address").add(1, { address: MY_ADDRESS });
      ctx.eventLogger.emit("AddressActivity", {
        distinctId: MY_ADDRESS,
        txid: tx.txid,
        outputValue: outputValueToMyAddress,
      });
    }

    // Process all transactions
    ctx.meter.Counter("total_btc_txns").add(1);
    ctx.meter.Counter("total_btc_output_value").add(
      tx.vout.reduce((sum, out) => sum + out.value, 0)
    );

  })
  .onBlockInterval(async (block: BTCBlock, ctx: BTCBlockContext) => {
    ctx.meter.Gauge("latest_block_height").record(block.height);
    ctx.meter.Gauge("latest_block_timestamp").record(block.time); // Assumes 'time' is Unix timestamp

    if (block.tx) { // Check if transactions were fetched
      ctx.meter.Counter("transactions_in_interval_blocks").add(block.tx.length);
    }
  }, 10, 60, { getTransactions: true }); // Process every 10 blocks, fetch txns

  ```

## StarkNet

* **Processor:** `StarknetProcessor` (or generated `MyContractProcessor` from ABI).
  * **Typical Use Case:** Monitoring events from a specific Starknet contract.
  * **Binding:** Typically via generated processors: `MyCairoContractProcessor.bind({ address: '0x...', network: StarknetChainId.STARKNET_MAINNET, startBlock: 500000 })`
  * Processors and types can be generated using the Sentio CLI if you have the contract's ABI JSON file: `sentio gen <abi_file_path> starknet`
* **Setup:** Requires the contract's ABI (use `sentio add <address> --chain starknet_mainnet` or place manually in `abis/starknet/`). Run `sentio build` to generate types.
* **Handlers:**`onEvent(eventName | eventName[], handler(event, ctx))`, Triggered when an event matching the `eventName` (or one of the names in the array) is emitted by the bound contract address. The `event` object contains the decoded event data.
  * For generated processors, type-safe handlers like `onMyEventName(handler(event: StarknetEvent<MyEventNameData>, ctx: StarknetContext<MyContractView>))` are created.
  * The `event` object in the typed handler directly provides the decoded event payload (`event.data`).
  * The raw processor (`StarknetProcessor`) provides a generic event object where data needs further parsing based on the ABI structure.
* Context(`ctx`): Event handlers receive a `StarknetContext<ContractViewType>` object providing:
  * Chain information: `chainId`, `blockNumber`, `blockHash`.
  * Transaction/Event details: `transactionHash`, `logIndex`.
  * Contract details: `contractAddress`, `contractName`, `classHash`, `abi`.
  * Helper methods: `provider` (a `starknet.js` RpcProvider instance), `getContract()` which returns a typed `StarknetContractView` for reading contract state (if ABI is provided).
* ABI Requirement: Unlike some other chains where ABIs can sometimes be fetched automatically, Starknet processing **requires** the ABI for the contract being processed. This is necessary to decode the event data correctly.
  * **ABI Source:** You typically get the ABI JSON file when compiling your Cairo contract.
  * **Code Generation:** Use `sentio gen <abi_file_path> starknet` to generate typed processors and event structures, which automatically includes the ABI.
  * **Manual:** If using `StarknetProcessor.bind` directly, you must provide the ABI in the `config` object.
* **Sample Code:**
  ```typescript
  import { StarknetChainId } from "@sentio/sdk/starknet";
  // Assuming types and processor generated by `sentio gen` from a Cairo contract ABI
  import {
    MyCairoContractProcessor,
    MyEventData, // Type for the decoded event data
    MyContractView, // Type for the contract view helper
  } from "./types/starknet/my_cairo_contract.js";
  import { StarknetEvent, StarknetContext } from "@sentio/sdk/starknet";

  const CONTRACT_ADDRESS = "0x0123...yourContractAddress...";

  MyCairoContractProcessor.bind({
    address: CONTRACT_ADDRESS,
    network: StarknetChainId.STARKNET_SEPOLIA, // Or STARKNET_MAINNET
    startBlock: 600000, // Example start block
  })
  .onMyEvent(async (event: StarknetEvent<MyEventData>, ctx: StarknetContext<MyContractView>) => {
    // event.data is already decoded and typed according to MyEventData
    const userAddress = event.data.user_address; // Access fields defined in the Cairo event struct
    const value = event.data.value;

    ctx.meter.Counter("my_event_cnt").add(1);
    ctx.meter.Gauge("latest_value").record(value);

    ctx.eventLogger.emit("MyEventFired", {
      distinctId: userAddress,
      eventValue: value.toString(), // Convert BigInts/felts as needed
      starknetTxHash: ctx.transactionHash,
      contract: CONTRACT_ADDRESS,
    });

    // Example: Reading contract state using the context helper
    try {
      const currentBalance = await ctx.getContract().get_balance(userAddress);
      ctx.meter.Gauge("user_balance").record(currentBalance, { user: userAddress });
    } catch (error) {
      console.error(`Failed to read balance for ${userAddress}:`, error);
    }
  });
  ```

## Requesting New Chains or Adding Custom Chain

If Sentio doesn't natively support a chain you need:

1. **Contact Sentio:** Reach out to the Sentio team to request official support.
2. **Bring Your Own RPC (BYORPC):** For some chain types (especially EVM-compatible or Subgraph-compatible), you might be able to configure Sentio to use your own archive node RPC endpoint. This involves configuration in `sentio.yaml` (for processors) or the `network` field in `subgraph.yaml` (for subgraphs). Consult specific Sentio documentation on Custom Chain support for feasibility and instructions.

### Sentio Processor

In the `sentio.yaml` file, add the following section:

```yaml
networkOverrides:
- chain: <Chain ID>
  host: <Your own RPC>
```

The Chain ID must be an ID from [💎 Supported Networks](doc:supported-networks), e.g., `1`. 

For custom chains, use chain ID `customized` in `sentio.yaml` and use chain ID `EthChainID.CUSTOM` in processor's typescript file.

### Subgraph

In Subgraph's manifest file, put your RPC endpoint in the network field, for example:

```yaml
network: 'http://my-forked-rpc-endpoint'
```

## Development Status

Support for chains listed in this section (Bitcoin, StarkNet) may be in **Alpha** or **Beta** stages. This means APIs might change, features could be limited compared to more established chains like EVM, and dedicated support might be evolving. Always check the latest Sentio documentation and release notes
