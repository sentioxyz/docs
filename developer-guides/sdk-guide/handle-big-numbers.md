---
title: Handle Big Numbers
categorySlug: developer-guides
parentDocSlug: sdk-guide
hidden: false
---

Sentio SDK uses javascript's native `bigint` for big integer calculations. However, if you want to do operations like division, you need to convert it to [`BigDecimal`](https://github.com/MikeMcl/bignumber.js) , otherwise, you may lose precision during the operation. We do provide utils for `bigint` and other type like `BN` to convert to `BigDecimal`.

```typescript
const latestAnswer: bigint = 10n

// Use asBigDecimal to convert bigint to BigDecimal
const eth_usdc_price: BigDecimal = latestAnswer.asBigDecimal().div(BigDecimal(10).pow(18))

// Use scaleDown to further simplify code in some cases.
const eth_usdc_price2: BigDecimal = latestAnswer.scaleDown(18)
```
