# ➡ CLI Reference

Sentio provides a command line tool to easily create and upload processors for your project. To start using it, you need to have [Node.js](https://nodejs.org/en/download/) environment. Then you could run&#x20;

```bash
npx -y -p @sentio/cli@latest sentio --help
```

to see all available commands.&#x20;

## sentio login

Login into sentio for your command line. You need first to create your API key.

```bash
npx -y -p @sentio/cli@latest sentio login
```

## sentio create

Create a sentio processor

```bash
npx -y -p @sentio/cli@latest sentio create -n <project name>
```

By default it creates EVM based project, if you want to create project for other chains, you could do

```bash
npx -y -p @sentio/cli@latest sentio create -c <evm|aptos|solana|raw> <project name>
```

If you are working in a mono-repo setup with many processors in repo and have your root package.json control all versions, you need to do the following or delete the sentio dependencies in your child package.json manually.

```bash
npx -y -p @sentio/cli@latest sentio create --subproject -n <project name>
```

## sentio add

Inside project directory, add contract ABI to your project and generate bindings for a contract in Ethereum mainnet.

{% code overflow="wrap" %}
```bash
yarn sentio add <contract address>
```
{% endcode %}

To use a different network, try `--chain` flag as follows

```bash
yarn sentio add --chain <chain_id> <contract address>
```

By default, the ABI will be downloaded with its address as the name, which will lead the generated binding to use the address for the name as well. To override the name, use `-n <name>`, e.g.

```bash
yarn sentio add --name MyToken <contract address>
```

## sentio upload

Inside project directory, build and upload your processor to your project.&#x20;

```bash
yarn sentio upload
```

## sentio gen

Inside project directory, generate type binding into `src/types` according to ABIs that in `abis` folder.

```bash
yarn sentio gen
```

## sentio build

Inside project directory, generate code and then build the processor into `dist` folder.

```bash
yarn sentio build
```

##
