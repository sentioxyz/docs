---
title: SUI
deprecated: false
hidden: false
metadata:
  robots: index
---
# Create project

You can create a new project with the following command:

```shell
npx @sentio/cli@latest create <your project name> --chain-type sui
```

# Setup contract address

Use [`sentio add`](cli-reference#sentio-add) to add contracts and fetch ABIs.

```Text shell
npx @sentio/cli@latest add --chain sui_mainnet [--name <your contract name>]  <your contract address>
```

Or direct modify the in `sentio.yaml`file:

```yaml
project: your-project-name
contracts:
  - name: <contract name>  # (optional)
    address: <contract address>  # sui contract address
    chain: sui_mainnet # Chain id, sui_mainnet or sui_testnet
```

Contract name is optional and will make file generated more readable.

# Type Generation

Run

```shell Shell
yarn sentio gen
```

Will generate all types bindings for the added contracts.

Navigate to the project directory, where you should find the following files:

```Text Shel
├── package.json
├── sentio.yaml
├── abis/sui
│    └──  0x305fdc899f4d5d13a1e03ea784eed9bc5bdcb3e3550a32466ff34518aa4627a3.json [or <contract name>.json]
├── src
│    ├── types/sui
│.   │    ├── 0x305fdc899f4d5d13a1e03ea784eed9bc5bdcb3e3550a32466ff34518aa4627a3.ts [or <contract name>.ts]
│.   │    └── index.ts
│    ├── processor.test.ts
│    └── processor.ts
└── tsconfig.json
```

# Processor

Start your processor by importing the generated code and binding the processor to the contract address.

## Event processor

You should find `onEventXXX` methods to capture events emitted by any transactions.

```typescript
import { bluemove_launchpad } from "./types/sui/0x305fdc899f4d5d13a1e03ea784eed9bc5bdcb3e3550a32466ff34518aa4627a3.js";

bluemove_launchpad.bind({
  startCheckpoint: 1500000n
})
  .onEventMintNFTEvent(async (event, ctx) => {
    ctx.eventLogger.emit("MintEvent", {
      distinctId: event.data_decoded.creator,
      name: event.data_decoded.name,
      object_id: event.data_decoded.object_id,
      project: "bluemove"
    })
  })
```

You can access the event content by `event`, and SUI [transaction](https://sdk.mystenlabs.com/typedoc/interfaces/_mysten_sui.client.SuiTransactionBlockResponse.html)  by`ctx.transaction`.  Not all fields in `ctx.transaction` are fetched by default to increase the performance, to get more fields like`objectChanges`, add fetch config. All options can be found at [MoveFetchConfig](https://sdk.sentio.xyz/interfaces/..MoveFetchConfig.html)

```typescript
  .onEventMintNFTEvent(async (event, ctx) => {
    ...
    },
    { resourceChanges: true }
  })
```

## Object processor

If you want to watch single object content change, you could [`SuiObjectProcessor`](https://sdk.sentio.xyz/classes/sui.SuiObjectProcessor.html) , e.g.

```typescript
SuiObjectProcessor.bind({
  objectId: '0xa14f85860d6ce99154ecbb13570ba5fba1d8dc16b290de13f036b016fd19a29c',
  startCheckpoint: 10000
})
  .onTimeInterval(async (self, objects, ctx) => {
    const fields = await ctx.coder.getDynamicFields(
      objects,
      BUILTIN_TYPES.U64_TYPE,
      single_collateral.PortfolioVault.type()
    )

    ctx.meter.Gauge('fields_count').record(fields.length)
  }, 
  60*24,   // watching time interval  
  60*24*30 // backfill time interval
  )
  .onCheckpointInterval(...)
```

It will fetch the object content and all objects belong to it (such as dynamic objects) every certain period of time in history. If more info is needed, use `ctx.objectVersion` to work with SUI Typescript SDK to do that.

You may also want to carefully tune the two time intervals for better indexing performance

* **Watching time interval**: how often the handler is trigger by default
* **Backfill time interval**: how often the handler is trigger during processor backfill, you may want to set this a larger number, especially if the object has very long history

## Address processor

Similar to object processor, you have use [`SuiAddressProcessor`](\[https://sdk.sentio.xyz/classes/sui.SuiAddressProcessor.html]\(https://sdk.sentio.xyz/classes/sui.SuiAddressProcessor.html\)) to fetch all objects belong to an address every certain period of time or checkpoints.

## Object type processor

If you want to handle all objects that has the same type instead of single object, use [`SuiObjectTypeProcessor.onTimeInterval`](https://sdk.sentio.xyz/classes/sui.SuiObjectTypeProcessor.html#ontimeinterval), e.g.

```typescript
import { staking_pool } from '@sentio/sdk/sui/builtin/0x3'

SuiObjectTypeProcessor.bind({
  objectType: staking_pool.StakedSui.type()
})
  .onTimeInterval(
    (self, objects, ctx) => {
      ctx.meter.Gauge('voting_power').record(self.data_decoded.principal, { pool: self.data_decoded.pool_id })
    },
    60,
    60 * 24 * 30
  )

```

If you want to handle all object changes for certain object type, use [`SuiObjectTypeProcessor.onObjectChange`](https://sdk.sentio.xyz/classes/sui.SuiObjectTypeProcessor.html#onobjectchange), e.g.

```typescript
SuiObjectTypeProcessor.bind({
  objectType: staking_pool.StakedSui.type()
})
  .onObjectChange((changes, ctx) => {
    ctx.meter.Counter('updates').add(changes.length)
  })
```

## Templating object processor

Some times you want to dynamic bind object processor, e.g. you want to register object handler for all pools create by an contracts (we prefer use `SuiObjectTypeProcessor` for better performance, but some times you only care about a subset of those objets).

In this case, you could create [`SuiObjectProcessorTemplate`](https://sdk.sentio.xyz/classes/sui.SuiObjectProcessorTemplate.html) and call `bind`/`unbind` in other triggers, e.g.

```typescript
import { validator_set } from '@sentio/sdk/sui/builtin/0x3'

const template = new SuiObjectProcessorTemplate().onTimeInterval(() => {
  // logic to record staking pool
})

// begin watch a staking pool
validator_set.bind({ network: SuiNetwork.TEST_NET }).onEventValidatorJoinEvent((evt, ctx) => {
  template.bind({ objectId: evt.data_decoded.staking_pool_id }, ctx)
})

// end watch the staking pool
validator_set.bind({ network: SuiNetwork.TEST_NET }).onEventValidatorLeaveEvent((evt, ctx) => {
  template.unbind({ objectId: evt.data_decoded.staking_pool_id }, ctx)
})
```