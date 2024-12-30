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
Here we give a few real examples for how to submit metrics from EVM chains. Make sure you briefly read our [sdk-guide]("mention") to get a general idea about how it work.

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

<Embed url="https://www.youtube.com/embed/yKggwExqKTw" typeOfEmbed="youtube" provider="youtube.com" title="undefined" href="https://www.youtube.com/embed/yKggwExqKTw" html="%3Ciframe%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FyKggwExqKTw%22%20width%3D%22640%22%20height%3D%22480%22%20frameborder%3D%220%22%3E%3C%2Fiframe%3E" />
