---
title: Decoding from custom ABIs
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
Sentio already have a list of builtin ABIs. However, you would still need to provide your own ABI so sentio can generate [type safe](https://en.wikipedia.org/wiki/Type_safety) methods for you to write elegant processor code.

Here we use Uniswap example to demonstrate how to do this. Assuming we want to monitor [DAI/USDC uniswap pool](https://info.uniswap.org/#/pools/0x5777d92f208679db4b9778590fa3cab3ac9e2168).  You could use [#sentio-add](cli-reference#sentio-add "mention")to fetch the ABI automatically (we got it from [etherscan](https://etherscan.io/address/0x5777d92f208679db4b9778590fa3cab3ac9e2168#code)).

> ℹ️
>
> If your ABI is not available from etherscan, you could manually copy the json data and put it into your directory `abi/eth`

Then you run

```bash
yarn sentio build
```

It will generate all the types under `src/types`

Then you can write functions using modern IDEs like IntelliJ or VSCode, it will show auto-complete on the method `OnEventSwap` (which correspond to the [event in the contract](https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L786)).

```typescript
UniswapProcessor.bind({address: '0x5777d92f208679db4b9778590fa3cab3ac9e2168'})
    .onEventSwap(
        async function (event: SwapEvent, ctx: UniswapContext) {
            ctx.meter.Gauge('dai_usdc_amount0').record(Math.abs(Number(event.args.amount0.toBigInt())))
            ctx.meter.Gauge('dai_usdc_amount1').record(Math.abs(Number(event.args.amount1.toBigInt())))
        }
    )
```
