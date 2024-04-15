---
description: >-
  Sentio provides the ability to override on-chain contracts, and replay
  transactions or simulate any inputs with these modified versions.
---

# 🔍 Download contract for debugging

## Find the contract on Sentio Explorer

<figure><img src="../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

## Download contract sources to local

<figure><img src="../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

## Make modifications

After extracting the zip file, you will get file structure like this. It is recommended to use VS Code as the development environment, which has better linting support.

* `/src` contains source code for the contract.
* `/metadata.json` contains necessary information for compiling and uploading.
* `/compile.sh` fetch solidity compilers and compile on your local machine.
* `/upload.sh` upload modified source code to Sentio.

<figure><img src="../.gitbook/assets/image (62).png" alt="" width="349"><figcaption></figcaption></figure>

## Use console.log for debugging

In the source folder, `sentio/console.sol` will be included besides the original sources of the contract. It contains utilities for printing debug information in simulation and transaction replaying, just like `console.log` in javascript. Console outputs will be collected and displayed on Sentio debugger.

1. import `sentio/console.sol`

<figure><img src="../.gitbook/assets/image (63).png" alt="" width="563"><figcaption></figcaption></figure>

2. Add logs wherever you want

<figure><img src="../.gitbook/assets/image (72).png" alt=""><figcaption></figcaption></figure>

## Upload your compilation to Sentio

1. Try compiling on your local machine. Note that for old versions of solidity compilers, warnings may appear in the console. It won't affect actual compiling process.

<figure><img src="../.gitbook/assets/image (66).png" alt=""><figcaption></figcaption></figure>

2. Upload your compilation to Sentio

<figure><img src="../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

If you haven't login with Sentio CLI before, you may need to login first following the instructions in the console.

## Simulate with your compilation

Here we replay a transaction with our modified version of the contract.

1. Open Simulator on transaction page

<figure><img src="../.gitbook/assets/image (70).png" alt=""><figcaption></figcaption></figure>

2. Choose your compilation in Source Override section and start simulation

<figure><img src="../.gitbook/assets/image (74).png" alt="" width="563"><figcaption></figcaption></figure>

3. Check console outputs

<figure><img src="../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>
