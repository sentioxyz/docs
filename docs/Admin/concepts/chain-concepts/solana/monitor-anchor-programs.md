---
title: Monitor anchor programs
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
You can also monitor Solana contracts built by [Anchor](https://www.anchor-lang.com/) in Sentio.

Here we use the Aurory example to demonstrate how to do this. Assuming we want to monitor its [staking contract](https://github.com/Aurory-Game/aurory-staking). We'd need to first copy the idl/abi json file generated by Anchor and put it into your directory `abi/solana`

Then run the following command to generate a type-safe processor.

```bash
yarn sentio build
```

You can find the generated processors under `src/types`

Then import the processor from types, with proper contract address bound. As what we have for evm, you can register instruction handlers into the processor, with auto-complete support in modern IDEs.

```typescript
StepStakingProcessor.bind({ address: 'StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x' })
  .onStake((args, ctx) => {
    const amount = args.amount.toNumber()
    ctx.meter.Counter('total_token').add(amount)
  })
  .onUnstake((args, ctx) => {
    const amount = args.amount.toNumber()
    ctx.meter.Counter('total_token').sub(amount)
  })
```

You could see the metrics are submitted using `ctx.meter.Counter`

> ℹ️
>
> See this [repo](https://github.com/sentioxyz/sentio-sdk/tree/main/examples/aurory) for full implementation. To learn how to view metrics from the UI, go to [view-metrics](view-metrics "mention")