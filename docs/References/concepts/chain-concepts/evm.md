---
title: EVM
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
## Event

Events are defined with the _event_ keyword in EVM smart contracts. When the defined event is called, the event is emitted. Here is [an example](https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L786) of emitting one of the Uniswap Events.

```solidity
emit Swap(msg.sender, recipient, amount0, amount1, state.sqrtPriceX96, state.liquidity, state.tick);
```

Sentio allows users to trigger processor for a specific set of events

## Block

Blocks are batches of transactions with a hash of the previous block in the chain. This links blocks together (in a chain) because hashes are cryptographically derived from the block data.



Sentio allows users to trigger processor for every sampled blocks.

## Transaction

Transactions are cryptographically signed instructions from accounts. An account will initiate a transaction to update the state of the Ethereum network. The simplest transaction is transferring ETH from one account to another.

\
Detailed TBD

## Call Trace

Any smart contract execution begins with a transaction initiated by an external account. In turn, the smart contract can interact with other contracts or make transfers. These activities are not recorded in the blockchain. A smart contract, for example, can airdrop tokens (i.e. send free tokens) to a group of users, but this activity is not recorded in the blockchain as a transaction. For such activities, the contract can choose to emit events, which can then be viewed in the logs. Otherwise, the only way to observe them is to monitor the traces.

## View function

View functions ensure that they will not modify the state. A function can be declared as **view**. The following statements if present in the function are considered modifying the state and compiler will throw warning in such cases.

Here is [one example](https://github.com/makerdao/sai/blob/master/src/weth9.sol#L45).

```solidity
 function totalSupply() public view returns (uint) {
   return this.balance;
 }
```