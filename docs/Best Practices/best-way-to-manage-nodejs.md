---
title: 🔍 Best Way To Manage nodejs
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
It is very common that you have multiple versions of nodejs. In this case, we recommend using [nvm](https://github.com/nvm-sh/nvm) to manage the node versions.

If you have the node installed, try remove it using

```sh
brew uninstall node
```

Then you can install *nvm* instead

```sh
brew install nvm
```

Then you can follow the instructions:

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (31) (1).png" alt="" />
  <figcaption></figcaption>
</figure>

> ℹ️
>
> Make sure you restart the terminal or run `source ~/.zshrc`

Then you can run this command to install node of a specific version

```bash
nvm install 22
```

If you have multiple versions, you can use this command to switch versions

```bash
nvm use 22
```