# Price Feed

One common task is to get the price feed of a token and calculate e.g. trading volume. Currently, we provide price feed from chainlink oracle at Ethereum mainnet and Goerli testnet. You can calculate the price using the following code.

```
import { EthereumDexPrice, PriceUnit } from '@sentio/sdk/lib/utils/dex-price'

...

const latestIsdcPrice = await EthereumDexPrice.getPrice('USDC')
const compPrice = await EthereumDexPrice.getPrice('COMP', 15677823)

const aaveInEth = await EthereumDexPrice.getPrice('AAVE', 15677823, PriceUnit.ETH)


```

The full list of assets supported are listed [here](https://github.com/sentioxyz/sentio-sdk/blob/main/sdk/src/utils/chainlink-oracles.csv).

