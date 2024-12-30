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
Dynamic logging provide an easy way to inspect state of transaction during execution with [simulation](simulation/ "mention"). It allow developer to add logs like

```
console.log("%d", localVar);
```

into any on-chain contract and extract the information with simulation.&#x20;

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

The following video shows the full workflow how you can use it.

[block:embed]
{
  "html": "<iframe src=\"https://www.youtube.com/embed/A42sM0J_QMI\" width=\"640\" height=\"480\" frameborder=\"0\"></iframe>",
  "url": "https://www.youtube.com/embed/A42sM0J_QMI",
  "typeOfEmbed": "youtube",
  "provider": "embed"
}
[/block]


To do dynamical logging, there are multiple ways, either by [#web-ui](dynamic-logging#web-ui "mention") or [#ide-and-command-line](dynamic-logging#ide-and-command-line "mention"). If the contract is developed by yourself, also consider use hardhat plugin to [upload-compilation](upload-compilation "mention").&#x20;

## Web UI

Open a transaction's contract tab, e.g. [here](https://app.sentio.xyz/fuyaoz/debug/simulator/1/T8dNpBQl/contracts?path=file%3A%2F%2F%2F0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD%2Fcontracts%2Fmodules%2Funiswap%2Fv3%2FV3SwapRouter.sol%2CL136). Click the "Start Override" Button.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (79).png" alt=""><figcaption></figcaption></figure>

Then you will enter editing mode. At the top of the file, insert

```solidity
import "sentio/console.sol"
```

to the import section of the file. And then you can do any console log just as you can do with hardhat or foundry. As the follow picture shows, once the editing is done, click "Submit & Simulate".

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (96).png" alt=""><figcaption></figcaption></figure>

Success uploading will generate an compilation with ID.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>

Continue with "Open Simulator", all parameters especially the source override will be configured correctly.&#x20;

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (83).png" alt=""><figcaption></figcaption></figure>

Once simulation is done, the console log will be put in the top section.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

## IDE & Command Line

You can also do that in your local VS Code if you need more advanced editing, first download the contract as zip.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

After extracting the zip file, you will get file structure like this. It is recommended to use VS Code as the development environment, which has better linting support.

* `/src` contains source code for the contract.
* `/metadata.json` contains necessary information for compiling and uploading.
* `/compile.sh` fetch solidity compilers and compile on your local machine.
* `/upload.sh` upload modified source code to Sentio.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (86).png" alt="" width="349"><figcaption></figcaption></figure>

In the source folder, `sentio/console.sol` will be included besides the original sources of the contract. It contains utilities for printing debug information in simulation and transaction replaying, just like `console.log` in javascript. Console outputs will be collected and displayed on Sentio debugger.

1. import `sentio/console.sol`

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (88).png" alt="" width="563"><figcaption></figcaption></figure>

2. Add logs wherever you want

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (89).png" alt="" width="563"><figcaption></figcaption></figure>

3. Try compiling on your local machine. Note that for old versions of solidity compilers, warnings may appear in the console. It won't affect actual compiling process.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (66).png" alt=""><figcaption></figcaption></figure>

4. Upload your compilation to Sentio

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

If you haven't login with Sentio CLI before, you may need to login first following the instructions in the console.

Now you can go back to the original transaction page, open simulator and choose your compilation in Source Override section and start simulation.&#x20;

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (90).png" alt="" width="563"><figcaption></figcaption></figure>