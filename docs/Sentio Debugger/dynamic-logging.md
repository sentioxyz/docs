---
title: ℹ️ Dynamic Logging
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
Dynamic logging provides an easy way to inspect the state of transactions during execution with [simulation](simulation/ "mention"). It allows developers to add logs like

```
console.log("%d", localVar);
```

into any on-chain contract and extract the information with simulation.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(94).png)

The following video shows the full workflow of how you can use it.

<Embed url="https://www.youtube.com/embed/A42sM0J_QMI" typeOfEmbed="youtube" provider="youtube.com" title="undefined" href="https://www.youtube.com/embed/A42sM0J_QMI" html="%3Ciframe%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FA42sM0J_QMI%22%20width%3D%22640%22%20height%3D%22480%22%20frameborder%3D%220%22%3E%3C%2Fiframe%3E" />

To do dynamic logging, there are multiple ways, either by [#web-ui](dynamic-logging#web-ui "mention") or [#ide-and-command-line](dynamic-logging#ide-and-command-line "mention"). If the contract is developed by yourself, also consider using the hardhat plugin to [upload-compilation](upload-compilation "mention").

## Web UI

Open a transaction's contract tab, e.g. [here](https://app.sentio.xyz/fuyaoz/debug/simulator/1/T8dNpBQl/contracts?path=file%3A%2F%2F%2F0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD%2Fcontracts%2Fmodules%2Funiswap%2Fv3%2FV3SwapRouter.sol%2CL136). Click the "Start Override" Button.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(79).png)

Then you will enter editing mode. At the top of the file, insert

```solidity
import "sentio/console.sol"
```

to the import section of the file. And then you can do any console logging just as you can do with hardhat or foundry. As the following picture shows, once the editing is done, click "Submit & Simulate".

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(96).png)

Successful uploading will generate a compilation with ID.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(80).png)

Continue with "Open Simulator", all parameters especially the source override will be configured correctly.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(83).png)

Once simulation is done, the console log will be put in the top section.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(84).png)

## IDE & Command Line

You can also do this in your local VS Code if you need more advanced editing. First, download the contract as a zip file.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(85).png)

After extracting the zip file, you will get a file structure like this. It is recommended to use VS Code as the development environment, which has better linting support.

* `/src` contains source code for the contract.
* `/metadata.json` contains necessary information for compiling and uploading.
* `/compile.sh` fetches solidity compilers and compiles on your local machine.
* `/upload.sh` uploads modified source code to Sentio.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(86).png)

In the source folder, `sentio/console.sol` will be included alongside the original sources of the contract. It contains utilities for printing debug information in simulation and transaction replaying, just like `console.log` in JavaScript. Console outputs will be collected and displayed on the Sentio debugger.

1. import `sentio/console.sol`

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(88).png)

2. Add logs wherever you want

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(89).png)

3. Try compiling on your local machine. Note that for old versions of solidity compilers, warnings may appear in the console. It won't affect actual compiling process.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(66).png)

4. Upload your compilation to Sentio

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(76).png)

If you haven't logged in with Sentio CLI before, you may need to login first following the instructions in the console.

Now you can go back to the original transaction page, open the simulator, and choose your compilation in the Source Override section to start simulation.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(90).png)
