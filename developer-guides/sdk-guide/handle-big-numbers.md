# Handle Big Numbers

Sentio SDK uses `ethers.js`, which use [`BigNumber`](https://docs.ethers.io/v5/api/utils/bignumber/) class for all the data type which is a big integer. However, if you want to do operations like division, you need to convert it to [`BigDecimal`](https://sentioxyz.github.io/sentio-sdk/classes/core.BigDecimal-1.html) , otherwise, you may lose precision during the operation.

```typescript
import { toBigDecimal } from "@sentio/sdk/lib/utils"

...
const eth_usdc_price = BigDecimal(10).pow(18).div(toBigDecimal(latestAnswer))
```
