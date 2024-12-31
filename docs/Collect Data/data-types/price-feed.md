---
title: Price Feed
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
## Price Feed Sample

One common task is to get the price feed of a token and calculate e.g. trading volume. Currently, we provide price feeds for a set of tokens. You can call it from the processor:

```typescript
import { getPriceByType,  token } from "@sentio/sdk/utils"

const price = await getPriceByType(CHAIN_IDS.ETHEREUM, address, ctx.timestamp) || 0
```

The function signatures are:

```
interface PriceOptions {
  toleranceInDays?: number
}
export async function getPriceByType(
  chainId: string,
  coinType: string,
  date: Date,
  options?: PriceOptions
): Promise<number | undefined>
```

## API Semantics

* ChainID is consistent everywhere in the processor. You could use `CHAIN_IDS.ETHEREUM`
* CoinType is the contract address for the ERC-20 token (e.g. `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`) and Type for Aptos (e.g. `0x1::aptos_coin::AptosCoin`)
* The returned price has a timestamp associated with it. `toleranceInDays` is an optional field. If missing, we use 1 DAY. This means that historical token prices are acceptable up to 1 day in time difference.
* If there is an error, or the timestamp diff is larger than 1 DAY, an `undefined` is returned.
* In theory, it is possible to obtain price by symbol. However, it is not recommended since symbol can be quite misleading

```typescript
getPriceBySymbol(symbol: string, date: Date, options?: PriceOptions)
```

## Using Price Feed in Processor

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