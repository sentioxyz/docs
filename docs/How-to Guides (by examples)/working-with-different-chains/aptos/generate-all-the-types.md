---
title: Generate all the types
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
Sentio has a list of builtin ABIs for aptos, e.g. the **0x1**, and **0x3** modules. You can directly use them, e.g.

```typescript
import { coin } from '@sentio/sdk/aptos/builtin/0x1'

coin.bind().onEventWithdrawEvent((evt, ctx) => {
  if (evt.guid.account_address === '0x9c5382a5aa6cd92f38ffa50bd8ec2879833997116499cc5bcd6d4688a962e330') {
    ctx.meter.Counter('withdrawn').add(evt.data_typed.amount)
  }
})
```

Use [#sentio-add](cli-reference#sentio-add "mention")to fetch ABIs for your modules.

Then run

```bash
yarn sentio build
```

> ℹ️
>
> You can also download the account modules through [https://mainnet.aptoslabs.com/v1/accounts/0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8/modules](https://mainnet.aptoslabs.com/v1/accounts/0x7d7e436f0b2aafde60774efb26ccc432cf881b677aca7faaf2a01879bd19fb8/modules), replace the address with your own account address, and put the result as a json file under `abis/aptos` directory.  

It will generate all the types under `src/types/aptos`. And download all depended account modules' abi into `abis/aptos` directory.

If you want to work on testnet. Download the directory to `abis/aptos/testnet` instead and files will be generated to `abis/apots/testnet` . We need to know it's under testnet directory so that we could try located the depended modules in testnet.

If you mainnet and testnet has the same exact ABI, you don't need to download ABI twice. Just download module for mainnet, and then use `BindOptions` to override network. e.g.

```typescript
// This is for testnet
SouffleChefCampaign.bind({ network: AptosNetwork.TEST_NET })
  .onEntryPullTokenV2((call, ctx) => {
    ...
  })

// This is for mainnet
SouffleChefCampaign.bind()
  .onEntryPullTokenV2((call, ctx) => {
    ...
  })
```
