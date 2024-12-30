---
title: Upload Compilation
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
There are two ways to upload a compilation for the use of [#override-contract](./#override-contract "mention").

## Upload Via UI

Navigate to Contracts -> Compilations, and then click "Upload Compilation"

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

Then you could choose a json file that existed in your hardhat artifact directory. e.g. `./artifacts/build-info/c8ebc50e7bb836cebb977bb299387552.json` , then you can choose which contract listed there should be uploaded.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

## Via Hardhat Plugin

We also provide a hardhat plugin for more seamless integration with your contract development workflow. You can find our plugin in [GitHub](https://github.com/sentioxyz/hardhat-sentio/blob/main/README).

To get started, add dependencies in your hardhat project.

```
yarn add -D @sentio/cli @sentio/hardhat-sentio
```

The login with sentio cli.

```
npx sentio login
```

Import sentio plugin and specify the project in `hardhat.config.ts`

```
import "@sentio/hardhat-sentio"

...

const config: HardhatUserConfig = {
  sentio: {
     # optional, if omit, the verification is globally avaliable
    project: "<user|org>/<project_name>"
  }
}
...
```

Upload and verify contracts with CLI.

```
npx hardhat sentio:upload Contract1,Contract2

npx hardhat sentio:verify --contract Contract2 --address 0xF03441E04F1f602e8Eb3ab80735a79880CA05AE6 --chain 137
```

\