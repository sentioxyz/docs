---
title: 🔍 Handling Errors
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
## Over Quota

If you get the Quota exceeded error, the processor will stop running. You can contact sales to upgrade your plan, Or waiting for the next month for the quota reset.

## Time series exceeds 10k

Please refer to [avoid-high-cardinality](avoid-high-cardinality "mention")

## Invalid Label Name

If your metric or label name contains invalid character or conflicts with system reserved labels, processor will stop running. Please update and re-upload

## Regular Processor Error

If you observe an error, it is always possible to use [debug-processors](debug-processors "mention")to help with the debugging.

## Ethers Error

When you do ethers call in your processor, it's very easy to produce errors. You could check the following list for possible causes:

* You are using the wrong address for the contract, you could do `try catch`  and `console.log` the address and then verify on the blockchain explorer
*  You are calling to chains other than Ethereum mainnet, the get contract view function has a default chain parameter, e.g.\
  `getERC721Contract(address: string, network: EthChainId.ETHEREUM)`\
  you need to specific network parameters for other chains, the list of chain id could be imported at 

  ```typescript
  import { EthChainId } from "@sentio/sdk/eth";
  ```
* Using the wrong block number to call, when calling the view function, the default block number are the following, it's common that call fail for certain block, contact [support@sentio.xyz](mailto:support@sentio.xyz), if you still have a problem. 
  * If you are using `ctx.contract.function` then the default block number is `ctx.blockNumber` 
  * If you just call contract view outside of context, it by default `latest` 
* If it says `UNRECOGNIZED_NAME` , it's likely that you pass invalid ENS name to a field that is the address type.

 If you still have problems, feel free to [contact us](#getting-help).
