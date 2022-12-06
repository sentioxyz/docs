# ➡ CLI Reference

Sentio provides a command line tool to easily create and upload processors for your project. To start using it, you need to have [Node.js](https://nodejs.org/en/download/) environment. Then you could run&#x20;

```bash
npx -y -p @sentio/sdk sentio --help
```

to see all available commands.&#x20;

## sentio login

Login into sentio for your command line. You need first to create your API key.

```bash
npx -y -p @sentio/sdk sentio login
```

## sentio create

Create a sentio processor

```bash
npx -y -p @sentio/sdk sentio create -n <project name>
```

## sentio upload

Build and upload your processor to your project.&#x20;

```bash
npx -y -p @sentio/sdk sentio upload
```

## sentio gen

Generate type binding into `src/types` according to ABIs that in `abis` folder.

```bash
npx -y -p @sentio/sdk sentio gen
```

## sentio build

Generate code and then build the processor into `dist` folder.

```bash
npx -y -p @sentio/sdk sentio build
```

##
