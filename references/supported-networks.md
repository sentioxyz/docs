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
| Bob Mainnet | ✓ | ✓ |  |   | Real-time |
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


More on [EVM](evm-chains)

## Move Chains

| Chain	         | Txn	 | Event	 | Entry Func	 | Archive RPCs | Account	 | Debugger	 | Data staleness |
|----------------|------|--------|-------------|--|----------|-----|----------------|
| Aptos	         | ✓	   | ✓	     | ✓ 	    |  ✓   | ✓	       | 	 ✓ | Real-time      |
| Aptos Testnet	 | ✓	   | ✓	     | ✓	     |     | 		       |     | Real-time      |
| SUI	           | ✓	   | ✓	     | ✓	     | ✓    | ✓		      | ✓   | Real-time      |
| SUI	Testnet    | ✓	   | ✓	     | ✓	     |     | 		       |     | Real-time      |
| Move	Testnet   | ✓	   | ✓	     | ✓	     | ✓    | ✓		      |     | Real-time      |
More on [Aptos](aptos) and [SUI](sui)

## Fuel
| Chain        | Stage | Log Handle | Call Handle | Transfer Handle |Data staleness |
|--------------|-------|------------|-------------|-------------|------|
| Fuel Mainnet | Beta  | ✓          | ✓           |✓  | Real-time      |
| Fuel Testnet | Beta  | ✓          | ✓           |✓  | Real-time      |
More on [Fuel](fuel)

## Starknet
|Chain	       | Stage | Events	   | Archive RPCs |		Data Staleness|
|--------------|-------|------------|-------------|-------------|
| Starknet     | Beta  | ✓          |       ✓       |   Real-time        |
More on [starknet](starknet)

## Solana

| Chain  | Stage | Transaction Handle | Instruction Handle |
|--------|-------|--------------------|--------------------|
| Solana | Alpha | ✓                  | ✓                  |
More on [Solana](solana)
## Examples

To quickly create single chain processor or subgraph, you can use the following command.

### Arbitrum

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 42161
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 42161
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Astar

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 592
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 592
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Astar zkEVM

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 3776
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 3776
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Auroa

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1313161554
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1313161554
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Avalanche

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 43114
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 43114
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### B2

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 223
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 223
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Base

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 8453
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 8453
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### BEVM

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 11501
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 11501
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Binance

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 56
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 56
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Bitlayer

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 200901
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 200901
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Blast

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 81457
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 81457
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnet is available at chain id: 168587773 with limited capabilities.
### Blast

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 168587773
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 168587773
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Bob

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 60808
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 60808
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Chiliz

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 88888
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 88888
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Conflux eSpace

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1030
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1030
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Cronos

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 25
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 25
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnet is available at chain id: 338.
### Ethereum

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnets are available at chain id: 17000, 11155111 with limited capabilities.
### Fantom Opera

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 250
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 250
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Fraxtal

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 252
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 252
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Holesky

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 17000
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 17000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### KCC

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 321
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 321
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Linea

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 59144
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 59144
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Manta Pacific

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 169
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 169
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Mantle

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 5000
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 5000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Merlin

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 4200
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 4200
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Metis

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1088
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1088
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Mode

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 34443
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 34443
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Moonbeam

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1284
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1284
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Optimism

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 10
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 10
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Polygon

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 137
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 137
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Polygon zkEVM

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 1101
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 1101
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Scroll

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 534352
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 534352
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Sepolia

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 11155111
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 11155111
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### Taiko

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 167000
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 167000
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnet is available at chain id: 167008.
### X Layer

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 196
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 196
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnet is available at chain id: 195 with limited capabilities.
### Zircuit

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 48900
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 48900
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

>️ Testnet is available at chain id: 48899.
### zkLink Nova

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 810180
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 810180
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

### zkSync Era

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
<summary>Create and upload an example Sentio processor</summary>

```
npx @sentio/cli@latest create -n <project name> --chain-type evm --chain-id 324
...
npx @sentio/cli@latest upload
```

</details>

<details>
<summary>Create and deploy an example Subgraph</summary>

```
npx @sentio/cli@latest graph create -n <project name> --chain-id 324
...
npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
```

</details>

