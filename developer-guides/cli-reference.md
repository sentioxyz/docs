# ➡ CLI Reference

Sentio provides a command line tool to easily create and upload processors for your project. To start using it, you need to have [Node.js](https://nodejs.org/en/download/) environment. Then you could run&#x20;

```bash
npx -y -p @sentio/cli sentio --help
```

to see all available commands.&#x20;

## sentio login

Login into sentio for your command line. You need first to create your API key.

```bash
npx -y -p @sentio/cli sentio login
```

## sentio create

Create a sentio processor

```bash
npx -y -p @sentio/cli sentio create -n <project name>
```

By default it creates EVM based project, if you want to create project for other chains, you could do

```
npx -y -p @sentio/cli sentio create -c <evm|aptos|solana|raw> <project name>
```

If you are working in a mono-repo setup with many processors in repo and have your root package.json control all versions, you need to do the following or delete the sentio dependencies in your child package.json manually.

```
npx -y -p @sentio/cli sentio create --subproject -n <project name>
```

## sentio add

Add contract ABI to your project and generate bindings for a contract in Ethereum mainnet.

{% code overflow="wrap" %}
```
npx -y -p @sentio/cli sentio add <contract address>
```
{% endcode %}

To use a different network, try `--chain` flag as follows

```
npx -y -p @sentio/cli sentio add --chain <mainnet|goerli|arbitrum|avalanche|aptos|aptos/testnet> <contract address>
```

By default, the ABI will be downloaded with its address as the name, which will lead the generated binding to use the address for the name as well. To override the name, use `-n <name>`, e.g.

```
npx -y -p @sentio/cli sentio add --chain mainnet --name MyToken <contract address>
```

## sentio upload

Build and upload your processor to your project.&#x20;

```bash
npx -y -p @sentio/cli sentio upload
```

## sentio gen

Generate type binding into `src/types` according to ABIs that in `abis` folder.

```bash
npx -y -p @sentio/cli sentio gen
```

## sentio build

Generate code and then build the processor into `dist` folder.

```bash
npx -y -p @sentio/cli sentio build
```

##
