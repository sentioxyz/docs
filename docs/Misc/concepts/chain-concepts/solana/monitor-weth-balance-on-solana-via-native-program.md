---
title: Monitor WETH balance on Solana (via Native program)
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
In the wormhole example, one can also monitor SPL token program.

First, import your builtin [SPL token processor](https://sentioxyz.github.io/sentio-sdk/classes/builtin.solana.SPLTokenProcessor.html)

```typescript
import { SPLTokenProcessor } from '@sentio/sdk/solana/builtin'
```

Then we trigger user written callback on both `Mint` and `Burn` instructions (Both are standard in SPL program). The code is as follows

```typescript
SPLTokenProcessor.bind({
  address: 'wormDTUJ6AWPNvk59vGQbDvGJmqbDTdgWgAqcLBCgUb',
})
  .onMintTo((data, ctx) => {
    if (data.mint === '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs') {
      ctx.meter.Counter('totalWeth_supply').add(data.amount as number)
    }
  })
  .onBurn((data, ctx) => {
    if (data.mint === '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs') {
      ctx.meter.Counter('totalWeth_supply').sub(data.amount as number)
    }
  })
  .innerInstruction(true)
```

You could see the metrics are submitted using `ctx.meter.Counter`

> ℹ️
>
> See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/wormhole) for full implementation. To learn how to view metrics from the UI, go to [view-metrics](view-metrics "mention")
