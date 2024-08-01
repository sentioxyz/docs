---
title: 💎 Supported Networks
categorySlug: references
hidden: false
---

The supported network and its status are listed below, we are actively supporting more networks, let us know via [
`support@sentio.xyz`](mailto:support@sentio.xyz) about your use case to help us prioritize network support.

> ✅
>
> We only include mainnet in the list. The most complete supported chain list could be found at
> the [status page]( https://www.sentio.xyz/status/index.html ).

## EVM Chains

|Chain	| Events	| Archive RPCs |	Traces	| Debugger |	Data Staleness|
|-------|---------|--------------|---------|----------|----------------|
${supported-evm}

## Move Chains

| Chain	         | Txn	 | Event	 | Entry Func	 | Archive RPCs | Account	 | Debugger	 | Data staleness |
|----------------|------|--------|-------------|--|----------|-----|----------------|
| Aptos	         | ✓	   | ✓	     | ✓ 	    |  ✓   | ✓	       | 	 ✓ | Real-time      |
| Aptos Testnet	 | ✓	   | ✓	     | ✓	     |     | 		       |     | Real-time      |
| SUI	           | ✓	   | ✓	     | ✓	     | ✓    | ✓		      | ✓   | Real-time      |
| SUI	Testnet    | ✓	   | ✓	     | ✓	     |     | 		       |     | Real-time      |
| Move	Testnet   | ✓	   | ✓	     | ✓	     | ✓    | ✓		      |     | Real-time      |
## Solana

| Chain  | Stage | Transaction Handle | Instruction Handle |
|--------|-------|--------------------|--------------------|
| Solana | Alpha | ✓                  | ✓                  |

## Examples

To quickly create single chain processor or subgraph, you can use the following command.

${chain-content}