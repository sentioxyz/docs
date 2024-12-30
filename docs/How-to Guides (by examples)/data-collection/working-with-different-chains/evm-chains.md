---
title: EVM chains
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
Here we give a few real examples for how to submit metrics from EVM chains. Make sure you briefly read our [sdk-guide]( "mention") to get a general idea about how it work.

We use standard chain ID  as mentioned [here](https://chainlist.org/). You only need to put the network parameter when you bind the processor. Here is an example we bind **Goerli** instead of **ETH mainnet**.

```typescript
ERC20Processor.bind({ address: '0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9',
network: CHAIN_IDS.GOERLI })
  .onEventTransfer((event, ctx) => {
    ...
  }
)
```

See the video tutorial below:

[block:embed]
{
  "html": "<iframe src=\"https://www.youtube.com/embed/yKggwExqKTw\" width=\"640\" height=\"480\" frameborder=\"0\"></iframe>",
  "url": "https://www.youtube.com/embed/yKggwExqKTw",
  "typeOfEmbed": "youtube",
  "provider": "embed"
}
[/block]