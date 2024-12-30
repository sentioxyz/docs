---
title: Decode Solana instructions
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
There are three main types of Solana smart contract programs: Anchor programs, System programs like SPL token programs, and customized programs built on top of solana API. Those different types of Solana programs use different ways to encode and decode their instructions.

### Anchor programs

For an Anchor program, one can import the program's IDL into Sentio, and by running the code-gen, Sentio will automatically generate proper `decodeInstruction` functions for the instructions defined in the smart contract. Details can be found at [monitor-anchor-programs](monitor-anchor-programs "mention").

### System programs

Solana by default returns the decoded instructions for its system programs, and processors of these system programs are increasingly added into Sentio SDK core, [SPL token processor](https://github.com/sentioxyz/sentio-sdk/blob/main/sdk/src/builtin/solana/spl-token-processor.ts) is an example.

You can also write your own processor for a system program in case it's not supported by Sentio yet. To handle the parsed instructions, you should implement a `fromParsedInstruction` method in the processor, like what SPL token processor [does](https://github.com/sentioxyz/sentio-sdk/blob/f3a54a4fe2c2c1e2f8da10babe03594465ae558e/sdk/src/builtin/solana/spl-token-processor.ts#L13).

### Other types of programs

If you have a customized smart contract program neither a system one nor built on top of Anchor framework, you probably have to implement your own `decodeInstruction` method to decode raw instructions from Solana based on how you encode it. 

For example, we've implemented a processor for the wormhole contract and added it to the Sentio SDK core, which has a customized `decodeInstruction` [method](https://github.com/sentioxyz/sentio-sdk/blob/main/sdk/src/builtin/solana/wormhole-processor.ts#L55). This can be a reference.
