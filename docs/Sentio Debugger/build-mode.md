---
title: 🛠️ Build Mode
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
Debugging solidity on-chain could be more tricky than you thought, debugger results sometimes show missing function calls, or show unexpected parameter values, weird execution order, or mismatched source code. This is largely due to solidities compiler optimization. e.g. function inline, function specializer, etc.

Sentio lets you choose different build modes of the solidity binary on chain to overcome the problem.

You can choose Build Mode in either [trace-view](trace-view "mention") or [debugger](debugger/ "mention"). 

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (40).png" alt="" />
  <figcaption></figcaption>
</figure>

## Debug Build

Debug build essentially replaces the binary with the one that doesn't use optimization and makes the execution flow very clean. 

However in this case, it uses more gas, so you may see out of gas error, or if some contract is use gas to do some checking, it may not work well.

## Debug Build without Gas

Similar to the debug build, except gas usage is ignored. 

This solves out of gas issue in normal debug build, but noted this may cause different code execution. e.g. if the original transaction is out of gas, using debug build will make the transaction fully executed.

## Example

You could try this [example](https://app.sentio.xyz/tx/1/0x6585fd39cd22ad2c558855403dc367462b48cd48b56431424138dc9df8227853) and switch it's build mode, you will see the trace is different:

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (1) (1) (1) (1) (1).png" alt="" />
  <figcaption>
    <p>release build</p>
  </figcaption>
</figure>

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (3).png" alt="" />
  <figcaption>
    <p>debug build</p>
  </figcaption>
</figure>

The debug build will reflect the logic code flow more accurately while the release build reflect the more real execution order after inline optimization.