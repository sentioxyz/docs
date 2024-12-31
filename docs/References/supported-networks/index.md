---
title: 💎 Supported Networks
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Sentio allows users to work with different chains through different APIs. Current we support following types of chains:

* [EVM Chains](evm-chains/): in production stage, see [coinbase](https://github.com/sentioxyz/sentio-processors/tree/main/projects/coinbase) for an example.
* [Aptos](aptos/): in production stage, see [pancake](https://github.com/sentioxyz/sentio-processors/tree/main/projects/pancake-swap) for an example.
* [SUI](doc:sui): in production stage, see [cetus](https://github.com/sentioxyz/sentio-processors/tree/main/projects/cetus) for an example.
* [Fuel](doc:fuel): in beta stage, see [fuel-assets](https://github.com/sentioxyz/sentio-processors/tree/main/fuel/fuel-assets) for an example.
* [Starknet](doc:starknet): in alpha stage.
* Bitcoin: in alpha stage, see [here](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/btc) for an example.
* Solana: in alpha stage, see [here](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/pyth-staking) for an example.

You can also mix different chains in on project, example [here](https://github.com/sentioxyz/sentio-processors/tree/main/projects/circle).

Supported network and its features are listed below, we are actively supporting more networks, let us know via [\
`support@sentio.xyz`](mailto:support@sentio.xyz) about your use case to help us prioritize network support.

> ✅
>
> We only include mainnet in the list. The most complete supported chain list could be found at\
> the [status page](https://www.sentio.xyz/status/index.html).

## EVM Chains

| Chain            | ID           | Slug                    | Events | Archive RPCs | Traces | Debugger |
| ---------------- | ------------ | ----------------------- | ------ | ------------ | ------ | -------- |
| Arbitrum         | `42161`      | `arbitrum-one`          | ✓      | ✓            |        | ✓        |
| Astar            | `592`        | `astar`                 | ✓      | ✓            | ✓      | ✓        |
| Astar zkEVM      | `3776`       | `astar-zkevm`           | ✓      | ✓            |        |          |
| Aurora           | `1313161554` | `aurora`                | ✓      | ✓            |        |          |
| Avalanche        | `43114`      | `avalanche`             | ✓      | ✓            |        | ✓        |
| B2 Mainnet       | `223`        | `b2-mainnet`            | ✓      | ✓            |        |          |
| Base             | `8453`       | `base`                  | ✓      | ✓            |        | ✓        |
| BEVM             | `11501`      | `bevm`                  | ✓      | ✓            |        |          |
| Binance          | `56`         | `bsc`                   | ✓      | ✓            |        | ✓        |
| Bitlayer Mainnet | `200901`     | `bitlayer`              | ✓      | ✓            |        |          |
| Blast Mainnet    | `81457`      | `blast-mainnet`         | ✓      | ✓            |        | ✓        |
| Bob Mainnet      | `60808`      | `bob`                   | ✓      | ✓            |        |          |
| Chiliz           | `88888`      | `chiliz`                | ✓      | ✓            |        |          |
| Conflux eSpace   | `1030`       | `conflux-espace`        | ✓      | ✓            |        |          |
| Corn Maizenet    | `21000000`   | `corn-maizenet`         | ✓      | ✓            |        |          |
| Cronos Mainnet   | `25`         | `cronos`                | ✓      | ✓            |        |          |
| Cronos zkEVM     | `388`        | `cronos-zkevm`          | ✓      | ✓            |        |          |
| Derive Mainnet   | `957`        | `derive-mainnet`        | ✓      | ✓            |        |          |
| Ethereum         | `1`          | `mainnet`               | ✓      | ✓            | ✓      | ✓        |
| Fantom Opera     | `250`        | `fantom`                | ✓      | ✓            |        |          |
| Fraxtal Mainnet  | `252`        | `frax-mainnet`          | ✓      | ✓            |        |          |
| Karak Mainnet    | `2410`       | `karak-mainnet`         | ✓      | ✓            |        |          |
| KCC Mainnet      | `321`        | `kucoin`                | ✓      | ✓            |        |          |
| Linea            | `59144`      | `linea`                 | ✓      | ✓            | ✓      | ✓        |
| Manta Pacific    | `169`        | `manta-pacific-mainnet` | ✓      | ✓            |        |          |
| Mantle           | `5000`       | `mantle`                | ✓      | ✓            |        |          |
| Merlin Mainnet   | `4200`       | `merlin`                | ✓      | ✓            |        |          |
| Metis            | `1088`       | `metis`                 | ✓      | ✓            |        |          |
| Mode Mainnet     | `34443`      | `mode-mainnet`          | ✓      | ✓            |        |          |
| Moonbeam         | `1284`       | `moonbeam`              | ✓      | ✓            | ✓      | ✓        |
| opBNB Mainnet    | `204`        | `opbnb`                 | ✓      | ✓            |        |          |
| Optimism Mainnet | `10`         | `optimism`              | ✓      | ✓            |        |          |
| Polygon          | `137`        | `matic`                 | ✓      | ✓            | ✓      | ✓        |
| Polygon zkEVM    | `1101`       | `polygon-zkevm`         | ✓      | ✓            |        |          |
| Scroll           | `534352`     | `scroll`                | ✓      | ✓            |        | ✓        |
| Sei Mainnet      | `1329`       | `sei`                   | ✓      | ✓            |        |          |
| Soneium Mainnet  | `1868`       | `soneium-mainnet`       | ✓      | ✓            |        |          |
| Sonic Mainnet    | `146`        | `sonic-mainnet`         | ✓      | ✓            |        |          |
| Swell Mainnet    | `1923`       | `swell-mainnet`         | ✓      | ✓            |        |          |
| TAC Testnet      | `2390`       | `tac-testnet`           | ✓      | ✓            |        |          |
| Taiko Mainnet    | `167000`     | `taiko`                 | ✓      | ✓            |        |          |
| Unichain Sepolia | `1301`       | `unichain-sepolia`      | ✓      | ✓            |        |          |
| X Layer Mainnet  | `196`        | `xlayer-mainnet`        | ✓      | ✓            |        | ✓        |
| Zircuit Mainnet  | `48900`      | `zircuit`               | ✓      | ✓            |        |          |
| zkLink Nova      | `810180`     | `zklink-nova`           | ✓      | ✓            |        |          |
| zkSync Era       | `324`        | `zksync-era`            | ✓      | ✓            |        |          |

More on [EVM](evm-chains)

## Move Chains

| Chain                                 | Txn | Event | Entry Func | Archive RPCs | Account | Debugger |
| ------------------------------------- | --- | ----- | ---------- | ------------ | ------- | -------- |
| Aptos                                 | ✓   | ✓     | ✓          | ✓            | ✓       | ✓        |
| Aptos Testnet                         | ✓   | ✓     | ✓          |              |         |          |
| SUI                                   | ✓   | ✓     | ✓          | ✓            | ✓       | ✓        |
| SUI	Testnet                           | ✓   | ✓     | ✓          |              |         |          |
| Move	Testnet                          | ✓   | ✓     | ✓          | ✓            | ✓       |          |
| More on [Aptos](aptos) and [SUI](sui) |     |       |            |              |         |          |

## Fuel

| Chain                | Stage | Log Handle | Call Handle | Transfer Handle |
| -------------------- | ----- | ---------- | ----------- | --------------- |
| Fuel Mainnet         | Beta  | ✓          | ✓           | ✓               |
| Fuel Testnet         | Beta  | ✓          | ✓           | ✓               |
| More on [Fuel](fuel) |       |            |             |                 |

## Starknet

| Chain                        | Stage | Events | Archive RPCs |
| ---------------------------- | ----- | ------ | ------------ |
| Starknet                     | Beta  | ✓      | ✓            |
| More on [starknet](starknet) |       |        |              |

## Solana

| Chain                    | Stage | Transaction Handle | Instruction Handle |
| ------------------------ | ----- | ------------------ | ------------------ |
| Solana                   | Alpha | ✓                  | ✓                  |
| More on [Solana](solana) |       |                    |                    |

## Examples

To quickly create single chain processor or subgraph, you can use the following command.

### Arbitrum

Chain ID: `42161`, chain slug: `arbitrum-one`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 42161
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

Chain ID: `592`, chain slug: `astar`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 592
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

Chain ID: `3776`, chain slug: `astar-zkevm`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 3776
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

### Aurora

Chain ID: `1313161554`, chain slug: `aurora`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1313161554
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

Chain ID: `43114`, chain slug: `avalanche`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 43114
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

Chain ID: `223`, chain slug: `b2-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 223
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

Chain ID: `8453`, chain slug: `base`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 8453
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

Chain ID: `11501`, chain slug: `bevm`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 11501
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

Chain ID: `56`, chain slug: `bsc`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 56
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

Chain ID: `200901`, chain slug: `bitlayer`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 200901
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

Chain ID: `81457`, chain slug: `blast-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 81457
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

> ️ Testnet is available at chain ID: 168587773, slug blast-testnet  with limited capabilities.

### Bob

Chain ID: `60808`, chain slug: `bob`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 60808
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

Chain ID: `88888`, chain slug: `chiliz`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 88888
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

Chain ID: `1030`, chain slug: `conflux-espace`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1030
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

### Corn

Chain ID: `21000000`, chain slug: `corn-maizenet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 21000000
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 21000000
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Cronos

Chain ID: `25`, chain slug: `cronos`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 25
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

> ️ Testnet is available at chain ID: 338, slug cronos-testnet .

### Cronos zkEVM

Chain ID: `388`, chain slug: `cronos-zkevm`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 388
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 388
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Derive

Chain ID: `957`, chain slug: `derive-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 957
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 957
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Ethereum

Chain ID: `1`, chain slug: `mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1
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

> ️ Testnets are available at chain ID: 17000, 11155111, slug holesky, sepolia  with limited capabilities.

### Fantom Opera

Chain ID: `250`, chain slug: `fantom`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 250
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

Chain ID: `252`, chain slug: `frax-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 252
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

### Karak

Chain ID: `2410`, chain slug: `karak-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 2410
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 2410
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### KCC

Chain ID: `321`, chain slug: `kucoin`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 321
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

Chain ID: `59144`, chain slug: `linea`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 59144
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

Chain ID: `169`, chain slug: `manta-pacific-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 169
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

Chain ID: `5000`, chain slug: `mantle`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 5000
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

Chain ID: `4200`, chain slug: `merlin`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 4200
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

Chain ID: `1088`, chain slug: `metis`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1088
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

Chain ID: `34443`, chain slug: `mode-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 34443
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

Chain ID: `1284`, chain slug: `moonbeam`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1284
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

### opBNB

Chain ID: `204`, chain slug: `opbnb`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 204
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 204
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Optimism

Chain ID: `10`, chain slug: `optimism`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 10
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

Chain ID: `137`, chain slug: `matic`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 137
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

Chain ID: `1101`, chain slug: `polygon-zkevm`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1101
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

Chain ID: `534352`, chain slug: `scroll`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 534352
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

### Sei

Chain ID: `1329`, chain slug: `sei`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1329
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 1329
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Soneium

Chain ID: `1868`, chain slug: `soneium-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1868
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 1868
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

> ️ Testnet is available at chain ID: 1946, slug soneium-minato .

### Sonic

Chain ID: `146`, chain slug: `sonic-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 146
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 146
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

> ️ Testnet is available at chain ID: 57054, slug sonic-testnet .

### Swell

Chain ID: `1923`, chain slug: `swell-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1923
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 1923
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

> ️ Testnet is available at chain ID: 1924, slug swell-testnet .

### TAC

Currently support is for testnet only.\
Chain ID: `2390`, chain slug: `tac-testnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 2390
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 2390
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### Taiko

Chain ID: `167000`, chain slug: `taiko`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 167000
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

> ️ Testnet is available at chain ID: 167008, slug taiko-hekla-testnet .

### Unichain Sepolia

Chain ID: `1301`, chain slug: `unichain-sepolia`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 1301
  ...
  npx @sentio/cli@latest upload
  ```
</details>

<details>
  <summary>Create and deploy an example Subgraph</summary>

  ```
  npx @sentio/cli@latest graph create -n <project name> --chain-id 1301
  ...
  npx @sentio/cli@latest graph deploy --owner <owner> --name <project name>
  ```
</details>

### X Layer

Chain ID: `196`, chain slug: `xlayer-mainnet`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 196
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

> ️ Testnet is available at chain ID: 195, slug xlayer-sepolia  with limited capabilities.

### Zircuit

Chain ID: `48900`, chain slug: `zircuit`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 48900
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

> ️ Testnet is available at chain ID: 48899, slug zircuit-testnet .

### zkLink Nova

Chain ID: `810180`, chain slug: `zklink-nova`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 810180
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

Chain ID: `324`, chain slug: `zksync-era`.

Finish Step 1-3 from [Quickstart](quickstart "mention"). You could create indexer in either [sentio processor](processor-basic "mention") or [subgraph](hosted-subgraph "mention") format.

<details>
  <summary>Create and upload an example Sentio processor</summary>

  ```
  npx @sentio/cli@latest create -n <project name> --chain-type eth --chain-id 324
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