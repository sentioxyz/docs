---
title: ➡ Using PriceFeed
categorySlug: how-to-guides-by-examples
parentDocSlug: data-collection
hidden: false
---

Sentio supports a limited set of price feed, it can be accessed by a combination of

* Chain network ID
* Token Address
* Timestamp

```typescript
let price : any
try {
  price = await getPriceByType(CHAIN_IDS.ETHEREUM, TOKEN_ARRAY[i], ctx.timestamp)
} catch (error) {
  if (error instanceof ClientError && error.code === Status.NOT_FOUND) {
    continue
  }
  throw error
}
```

Putting all together to compute TVL

```typescript
async function getTokenDetails(ctx: ExchangeV3Context, address: string): Promise<[token.TokenInfo, bigint]> {
  const tokenInfo = await getTokenInfo(address)
  let amount: bigint
  if (tokenInfo.symbol === "ETH") {
    try {
      amount = await ctx.contract.provider.getBalance("0x674bdf20a0f284d710bc40872100128e2d66bd3f")
    } catch (e) {
      console.log(e)
      amount = 0n
    }
  } else {
    try {
      amount = await getERC20Contract(address).balanceOf("0x674bdf20a0f284d710bc40872100128e2d66bd3f",
          {blockTag: Number(ctx.blockNumber)})
    } catch (e) {
      console.log("error", e)
      amount = 0n
    }
  }
  return [tokenInfo, amount]
}

const tvl = async function (_: any, ctx: ExchangeV3Context) {
  console.log("new round of tvl")
  for (let i = 0; i < TOKEN_ARRAY.length; i++) {
    const [tokenInfo, amount] = await getTokenDetails(ctx, TOKEN_ARRAY[i])
    const scaledAmount = amount.scaleDown(tokenInfo.decimal)
    let price : any
    try {
      price = await getPriceByType("ethereum_mainnet", TOKEN_ARRAY[i], ctx.timestamp)
    } catch (error) {
        if (error instanceof ClientError && error.code === Status.NOT_FOUND) {
            continue
        }
        throw error
    }
    ctx.meter.Gauge("tvl").record(scaledAmount.multipliedBy(price),
        {token: tokenInfo.symbol, address: TOKEN_ARRAY[i]})
  }
}

ExchangeV3Processor.bind({address: LOOPRING_EXCHANGE})
    .onTimeInterval(tvl, 60, 24 * 60 * 30)
```

> ℹ️
>
> For more information regarding price feed, please refer to [price-feed](price-feed "mention")


