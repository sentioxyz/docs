---
title: 🎛️ CLI
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
Sentio provides a command line tool to easily create and upload processors for your project. To start using it, you need to have [Node.js](https://nodejs.org/en/download/) environment. Then you could run

```shell
npx @sentio/cli@latest --help
```

to see all available commands.

## sentio login

Login into sentio for your command line. You need first to create your API key.

```shell
npx @sentio/cli@latest login
```

## sentio create

Create a sentio processor

```shell
npx @sentio/cli@latest create -n <project name>
```

By default it creates EVM based project, if you want to create project for other chains, you could do

```shell
npx @sentio/cli@latest create -c <evm|aptos|solana|raw> <project name>
```

If you are working in a mono-repo setup with many processors in repo and have your root package.json control all versions, you need to do the following or delete the sentio dependencies in your child package.json manually.

```shell
npx @sentio/cli@latest create --subproject -n <project name>
```

## sentio add

Inside project directory, add contract ABI to your project and generate bindings for a contract in Ethereum mainnet.

```shell
yarn sentio add <contract address>
```

To use a different network, try `--chain` flag as follows

```shell
yarn sentio add --chain <chain_id> <contract address>
```

By default, the ABI will be downloaded with its address as the name, which will lead the generated binding to use the address for the name as well. To override the name, use `-n <name>`, e.g.

```shell
yarn sentio add --name MyToken --chain <chain_id> <contract address>
```

## sentio upload

Inside project directory, build and upload your processor to your project.

```shell
yarn sentio upload
```

It's also possible hot-swap a running processor version with new logic, without re-index old data.

```shell
yarn sentio upload --continue-from=<old version>
```

## sentio gen

Inside project directory, generate type binding into `src/types` according to ABIs that in `abis` folder.

```shell
yarn sentio gen
```

## sentio build

Inside project directory, generate code and then build the processor into `dist` folder.

```shell
yarn sentio build
```