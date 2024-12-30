---
title: 📔 ABI
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
## Definition

ABI is **Application Binary Interface**. It is like a header file for your source code. A lot of chains provide such capability. With ABI, Sentio could generate typesafe SDK for users.

## EVM

You can read an article for Ethereum ABI [here](https://www.geeksforgeeks.org/application-binary-interfaceabi-in-ethereum-virtual-machine/).

Normally, you can either generate ABI from your solidity code or get it from [etherscan](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code).

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (1) (5).png" alt=""><figcaption></figcaption></figure>

## Solana Anchor

Anchor can generate [IDL](https://en.wikipedia.org/wiki/Interface\_description\_language) specifications for Solana programs, we treat them as ABIs in Solana. &#x20;

If your Solana program is built by Anchor, you can find the IDL after running the Anchor build, normally placed in `target/idl` folder.

## Aptos & SUI

&#x20;Aptos and SUI use move language. Their ABI could be downloaded via their API, e.g.&#x20;

* Aptos: use account module API [https://mainnet.aptoslabs.com/v1/accounts/0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8/modules](https://mainnet.aptoslabs.com/v1/accounts/0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8/modules)
* SUI: use `sui_getNormalizedMoveModulesByPackage` JSON RPC call.\
  `curl -L -X POST 'https://fullnode.devnet.sui.io/' -H 'Content-Type: application/json' --data-raw '{ "jsonrpc": "2.0", "id": 1, "method": "sui_getNormalizedMoveModulesByPackage", "params": [ "0x2" ] }'`