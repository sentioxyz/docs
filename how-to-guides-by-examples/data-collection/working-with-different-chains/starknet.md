---
title: Starknet
categorySlug: how-to-guides-by-examples
parentDocSlug: working-with-different-chains
hidden: false
order: 5
---

[Starknet](https://www.starknet.io/) support is in beta stage. Here is a quick start guide to set up a processor for Starknet.

## Initial project

You can create a new project with the following command:
```shell
npx @sentio/cli@latest create [your-project-name] -c starknet
```

Navigate to the project directory, where you should find the following files:
```shell
├── package.json
├── sentio.yaml
├── src
│    ├── processor.test.ts
│    └── processor.ts
└── tsconfig.json
```

Install the dependencies:
```shell
yarn install
```

## Setup contract address

Add the contract address in `sentio.yaml` file:
```yaml
project: your-project-name
contracts:
  - name: <ContractName>  # (optional)
    address: <contract address>  # Starknet contract address
    chain: starknet_sepolia # Chain name, starknet_mainnet or starknet_sepolia
```

*Please use the deployed address of the contract, not the class hash.*

*Including the contract name is optional but recommended, as it assists in naming the types during code generation..*

## Retrieve the ABI and Generate Types

Run the following command to retrieve the ABI and generate the types:
```shell
yarn sentio build
```

The abi will be saved in `abis/starknet` directory and the types will be generated in `src/types/starknet`.

```
├── abis
│	└── starknet
│	    └── sepolia
│	        └── VoteContract-0x00cf88f7ecf1bf36e9262333879e2937611cd81758db64a169776a2710464391.json
├── package.json
├── sentio.yaml
├── src
│	├── processor.test.ts
│	├── processor.ts
│	├── schema
│	└── types
│	    ├── aptos
│	    ├── eth
│	    ├── fuel
│	    ├── solana
│	    ├── starknet
│	    │	├── VoteContract-processor.ts
│	    │	└── tabi.ts
│	    └── sui
├── tsconfig.json
└── yarn.lock
```

## Processor

Start your processor by importing the generated code and binding the processor to the contract address. You should find `onXXX` methods if the contract has events.


```typescript
import { VoteContractProcessor } from "./types/starknet/VoteContract-processor.js"

VoteContractProcessor.bind({})
.onVoteEvent(async (event, ctx) => {
    // your processor logic
})
```

The `ctx` object has a `getContract` method to get the contract instance. You can use it to call the contract's view functions.

```typescript
     VoteContractProcessor.bind({})
    .onVoteEvent(async (event, ctx) => {
        const votes = await ctx.getContract().get_votes()
    })
```
