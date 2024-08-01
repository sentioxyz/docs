---
title: 💎 Supported Networks
categorySlug: references
hidden: false
---

The supported network and its status are listed below, we are actively supporting more networks, let us know via [
`support@sentio.xyz`](mailto:support@sentio.xyz) about your use case to help us prioritize network support.

> ✅
>
> We only include mainnet in the list. The most complete supported chain list could be found at
> the [status page]( https://www.sentio.xyz/status/index.html ).

## EVM Chains

|Chain	| Events	| Archive RPCs |	Traces	| Debugger |	Data Staleness|
|-------|---------|--------------|---------|----------|----------------|
| Arbitrum | ✓ | ✓ |  | ✓   | Real-time |
| Astar | ✓ | ✓ | ✓  | ✓   | Real-time |
| Astar zkEVM | ✓ | ✓ |  |   | Real-time |
| Auroa | ✓ | ✓ |  |   | Real-time |
| Avalanche | ✓ | ✓ |  | ✓   | Real-time |
| B2 Mainnet | ✓ | ✓ |  |   | Real-time |
| Base | ✓ | ✓ |  | ✓   | Real-time |
| BEVM | ✓ | ✓ |  |   | Real-time |
| Binance | ✓ | ✓ |  | ✓   | Real-time |
| Bitlayer Mainnet | ✓ | ✓ |  |   | Real-time |
| Blast Mainnet | ✓ | ✓ |  | ✓   | Real-time |
| Blast Mainnet | ✓ | ✓ |  |   | Real-time |
| Chiliz | ✓ | ✓ |  |   | Real-time |
| Conflux eSpace | ✓ | ✓ |  |   | Real-time |
| Cronos Mainnet | ✓ | ✓ |  |   | Real-time |
| Ethereum | ✓ | ✓ | ✓  | ✓   | Real-time |
| Fantom Opera | ✓ | ✓ |  |   | Real-time |
| Fraxtal Mainnet | ✓ | ✓ |  |   | Real-time |
| Holesky | ✓ | ✓ |  |   | Real-time |
| KCC Mainnet | ✓ | ✓ |  |   | Real-time |
| Linea | ✓ | ✓ | ✓  | ✓   | Real-time |
| Manta Pacific | ✓ | ✓ |  |   | Real-time |
| Mantle | ✓ | ✓ |  |   | Real-time |
| Merlin Mainnet | ✓ | ✓ |  |   | Real-time |
| Metis | ✓ | ✓ |  |   | Real-time |
| Mode Mainnet | ✓ | ✓ |  |   | Real-time |
| Mode Mainnet | ✓ | ✓ |  |   | Real-time |
| Moonbeam | ✓ | ✓ | ✓  | ✓   | Real-time |
| Optimism Mainnet | ✓ | ✓ |  |   | Real-time |
| Polygon | ✓ | ✓ | ✓  | ✓   | Real-time |
| Polygon zkEVM | ✓ | ✓ |  |   | Real-time |
| Scroll | ✓ | ✓ |  | ✓   | Real-time |
| Sepolia | ✓ | ✓ |  |   | Real-time |
| Taiko Mainnet | ✓ | ✓ |  |   | Real-time |
| X Layer Mainnet | ✓ | ✓ |  | ✓   | Real-time |
| Zircuit Mainnet | ✓ | ✓ |  |   | Real-time |
| zkLink Nova | ✓ | ✓ |  |   | Real-time |
| zkSync Era | ✓ | ✓ |  |   | Real-time |

More on [EVM](evm-chains).

## Move Chains

| Chain	                 | Txn	 | Event	 | Entry Func	 | Archive RPCs | Account/Object	 | Debugger	 | Data staleness |
|------------------------|------|--------|-------------|--|-----------------------|-----|----------------|
| Aptos	                 | ✓	   | ✓	     | ✓ 	    |  ✓  | ✓	                    | 	 ✓ | Real-time      |
| Aptos Testnet	         | ✓	   | ✓	     | ✓	     |     | 		                    |     | Real-time      |
| SUI	                   | ✓	   | ✓	     | ✓	     | ✓   | ✓		                   | ✓   | Real-time      |
| SUI	Testnet            | ✓	   | ✓	     | ✓	     |     | 		                    |     | Real-time      |
| Movement	Testnet Aptos | ✓	   | ✓	     | ✓	     |     | 	✓ 	                  |     | Real-time      |
More on [Aptos](aptos) and [SUI](sui).

## Fuel
| Chain        | Stage | Log Handle | Call Handle | Transfer Handle |Data staleness |
|--------------|-------|------------|-------------|-------------|------|
| Fuel Testnet | Beta  | ✓          | ✓           |✓  | Real-time      |
More on [Fuel](fuel).

## Starknet
|Chain	       | Stage | Events	   | Archive RPCs |		Data Staleness|
|--------------|-------|------------|-------------|-------------|
| Starknet     | Beta  | ✓          |       ✓       |   Real-time        |
More on [Starknet](starknet).

## Solana

| Chain  | Stage | Transaction Handle | Instruction Handle |
|--------|-------|--------------------|--------------------|
| Solana | Alpha | ✓                  | ✓                  |
More on [Solana](solana)
## Examples

To quickly create single chain processor or subgraph, you can use the following command.

### Arbitrum

[//]: # (ChainId: 42161)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 42161
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 42161
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Astar

[//]: # (ChainId: 592)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 592
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 592
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Astar zkEVM

[//]: # (ChainId: 3776)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 3776
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 3776
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Auroa

[//]: # (ChainId: 1313161554)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1313161554
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1313161554
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Avalanche

[//]: # (ChainId: 43114)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 43114
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 43114
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### B2

[//]: # (ChainId: 223)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 223
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 223
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Base

[//]: # (ChainId: 8453)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 8453
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 8453
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### BEVM

[//]: # (ChainId: 11501)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 11501
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 11501
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Binance

[//]: # (ChainId: 56)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 56
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 56
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Bitlayer

[//]: # (ChainId: 200901)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 200901
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 200901
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Blast

[//]: # (ChainId: 81457)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 81457
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 81457
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Blast

[//]: # (ChainId: 168587773)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 168587773
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 168587773
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Chiliz

[//]: # (ChainId: 88888)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 88888
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 88888
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Conflux eSpace

[//]: # (ChainId: 1030)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1030
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1030
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Cronos

[//]: # (ChainId: 25)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 25
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 25
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Ethereum

[//]: # (ChainId: 1)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Fantom Opera

[//]: # (ChainId: 250)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 250
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 250
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Fraxtal

[//]: # (ChainId: 252)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 252
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 252
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Holesky

[//]: # (ChainId: 17000)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 17000
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 17000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### KCC

[//]: # (ChainId: 321)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 321
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 321
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Linea

[//]: # (ChainId: 59144)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 59144
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 59144
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Manta Pacific

[//]: # (ChainId: 169)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 169
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 169
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Mantle

[//]: # (ChainId: 5000)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 5000
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 5000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Merlin

[//]: # (ChainId: 4200)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 4200
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 4200
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Metis

[//]: # (ChainId: 1088)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1088
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1088
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Mode

[//]: # (ChainId: 34443)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 34443
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 34443
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Mode

[//]: # (ChainId: 60808)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 60808
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 60808
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Moonbeam

[//]: # (ChainId: 1284)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1284
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1284
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Optimism

[//]: # (ChainId: 10)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 10
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 10
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Polygon

[//]: # (ChainId: 137)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 137
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 137
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Polygon zkEVM

[//]: # (ChainId: 1101)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1101
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1101
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Scroll

[//]: # (ChainId: 534352)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 534352
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 534352
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Sepolia

[//]: # (ChainId: 11155111)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 11155111
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 11155111
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Taiko

[//]: # (ChainId: 167000)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 167000
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 167000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### X Layer

[//]: # (ChainId: 196)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 196
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 196
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### Zircuit

[//]: # (ChainId: 48900)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 48900
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 48900
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### zkLink Nova

[//]: # (ChainId: 810180)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 810180
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 810180
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

### zkSync Era

[//]: # (ChainId: 324)

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

To create and upload an example [sentio processor](processor-basic "mention") project, run the following command:
```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 324
...
npx @sentio/cli@latest upload
```

To create and deploy an example [subgraph](hosted-subgraph "mention") project, run the following command:
```
npx @sentio/cli@latest graph create -n <project name> --chain-id 324
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

