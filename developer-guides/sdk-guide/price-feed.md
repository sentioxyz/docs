# Price Feed

## PriceFeed Sample

One common task is to get the price feed of a token and calculate e.g. trading volume. Currently, we provide price feeds for a set of tokens. You can call it from the processor:

```typescript
import { getPriceByType,  token } from "@sentio/sdk/utils"

let price: any
try {
  price = await getPriceByType(CHAIN_IDS.ETHEREUM, address, ctx.timestamp)
} catch (error) {
  if (error instanceof ClientError && error.code === Status.NOT_FOUND) {
    return [scaledAmount, BigDecimal(0)]
  }
  throw error
}
```

The function sigatures are:

<pre class="language-typescript"><code class="lang-typescript">interface PriceOptions {
  toleranceInDays?: number
}
<strong>
</strong><strong>export async function getPriceByType(
</strong>  chainId: string,
  coinType: string,
  date: Date,
  options?: PriceOptions
): Promise&#x3C;number>
</code></pre>

## API Semantics

* ChainID is consistent everywhere in the processor. You could use `CHAIN_IDS.ETHEREUM`
* CoinType is the contract address for the ERC-20 token (e.g. `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`) and Type for Aptos (e.g. `0x1::aptos_coin::AptosCoin`)
* toleranceInDays is an optional field. If missing, we use 1 DAY. This means that historical token prices are cached per day (If you have 2 swaps a year ago, one is at 6 AM and another is at 6 PM, we use the exact same price for the same token). This is to optimize the backfill speed.
* In theory, it is possible to obtain price by symbol. However, it is not recommended since symbol can be quite misleading

```typescript
getPriceBySymbol(symbol: string, date: Date, options?: PriceOptions)
```

