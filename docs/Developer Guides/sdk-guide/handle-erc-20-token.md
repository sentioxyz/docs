---
title: Handle ERC-20 Token
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
Use this API to get token info.

```typescript
import {token} from "@sentio/sdk/utils"
const tokenInfo = await token.getERC20TokenInfo(tokenAddress, chainId)
```

`tokenInfo` contains

* _symbol_
* _name_
* _decimal_

We often need _decimal_ to normalize the amount, as introduced in [handle-big-numbers](handle-big-numbers "mention")