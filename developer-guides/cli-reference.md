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
