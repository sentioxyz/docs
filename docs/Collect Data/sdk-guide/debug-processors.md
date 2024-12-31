---
title: Debug Processors
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
You can debug processor via console logs. Simply do

```typescript
console.log("num of pools: ", pools.length, ctx.version.toString());
```

Then you could view the debug log from the [data-source](data-source "mention") page.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/console.gif" alt="" />
  <figcaption>
    <p>Viewing Console Logs</p>
  </figcaption>
</figure>

> ℹ️ Note
>
> * The logs are order by the actual timestamp it is written
>   * It is irrelevant to the actual block timestamp or any timestamp that is on the blockchain
>   * You should not assume any strong ordering correlation from the processor code.
> * The logs have **a retention of 3 days**