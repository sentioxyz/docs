---
title: Remix IDE Plugin
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
The Sentio plugin for [Remix IDE](https://remix.ethereum.org/) is a powerful tool designed to enhance your smart contract development experience.

This plugin provides a set of functionalities that allow you to easily navigate and explore smart contract functions, search for related transactions, and analyze function usages. With this plugin, you can streamline your development workflow and gain valuable insights into your smart contracts.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/sentio_plugin_overview.png" alt="" />
  <figcaption>
    <p>Plugin Overview</p>
  </figcaption>
</figure>

## Features

### 1. View Smart Contract Function Location

The plugin enables you to quickly locate and navigate to specific functions within your smart contract. It provides a convenient interface that lists all the functions defined in your contract, making it easy to identify and access individual functions.

By simply clicking on a function name, you can jump directly to its location in the contract source code, saving you time and effort in searching for specific functions.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/plugin-function-navigation.gif" alt="" />
  <figcaption></figcaption>
</figure>

### 2. Search Related Transactions using Function Signature

Understanding the impact of a specific function within your smart contract is crucial for comprehensive contract analysis. This plugin allows you to search for transactions related to a particular function using its signature.

By clicking the `Related Transaction` button, you can retrieve a list of transactions that invoke the function, enabling you to trace the function's execution and analyze its behavior in different scenarios.

In the search result, click transaction hash to jump to the Sentio Transaction Analyzer page for more details. For example, view the fund flow, balance changes, call trace, events, and state diffs.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/plugin-related-txn.gif" alt="" />
  <figcaption></figcaption>
</figure>

### 3. Search Function Usages (Coming soon)

To gain a deeper understanding of how your smart contract functions are being utilized throughout your codebase, the plugin offers a powerful function usage search feature.

By entering the name of a function, you can search for all instances where the function is invoked within your smart contract's source code.

This functionality helps you identify dependencies, track function calls, and assess the overall impact of a function on your contract's behavior.

## How to Use

1. Install the Sentio plugin from the Remix IDE plugin marketplace.
2. Once installed, the plugin will be available in the Remix IDE sidebar. Click on the plugin's icon in the sidebar to open its interface.
3. Choose a contract file source, after the file is compiled (compilation can be triggered by `Ctrl/Cmd + S`), functions will be listed on the sidebar.
4. Enjoy a more efficient and insightful smart contract development experience!