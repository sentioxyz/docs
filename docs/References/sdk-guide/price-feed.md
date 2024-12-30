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
## PriceFeed Sample

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
