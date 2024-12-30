---
title: SUI
deprecated: false
hidden: false
metadata:
  robots: index
---
## Create project

You can create a new project with the following command:

```shell
npx @sentio/cli@latest create <your project name> --chain-type sui
```

## Setup contract address

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

## Type Generation

Run

```bash
yarn sentio gen
```

Will generate all types bindings for the added contracts.

Navigate to the project directory, where you should find the following files:

```shell
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

## Processor

Start your processor by importing the generated code and binding the processor to the contract address.

### Event processor

You should find `onEventXXX` methods to capture events emitted by any transactions.

```
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

```
  .onEventMintNFTEvent(async (event, ctx) => {
    ...
    },
    { resourceChanges: true }
  })
```

### Object processor