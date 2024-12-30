---
title: Handling Factory Contract
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
In many cases, there is a factory contract that is responsible to create multiple actual contracts. The typical example is [UniswapV3Factory](https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Factory.sol#L50), every time a pool is created, an `PoolCreated` event is emitted.

In this case, you could use [dynamic-processor-creation](dynamic-processor-creation "mention")to handle this case. In this very concrete uniswap case, you'd first create a factory processor to track `PoolCreated` event:

```typescript
UniswapFactoryProcessor.bind({address: '0x1F98431c8aD98523631AE4a59f267346ea31F984'})
    .onEventPoolCreated(
        async function (event: PoolCreatedEvent, ctx: UniswapFactoryContext) {
            ctx.meter.Counter('pool_num').add(1)
            poolTemplate.bind({address: event.args.pool, startBlock: ctx.blockNumber})
        }
    )
```

Note this monitors the total # of pools created. It uses `poolTemplate` to track the actual `swap` Events.

```typescript
const poolTemplate = new UniswapProcessorTemplate()
    .onEventSwap(
        async function (event: SwapEvent, ctx: UniswapContext) {
            ctx.meter.Gauge("swap_amount0").record(
                Math.abs(Number(event.args.amount0.toBigInt())),
                {
                    from: await ctx.contract.token0(),
                    to: await ctx.contract.token1()
                }
            )
        }
    )
```

> ⚠️
>
> Notice the template must be declared in the top level of your processor file to be successfully registered.
