# Dynamic Processor Creation

{% hint style="info" %}
This feature is currently only supported in EVM-compatible chains.
{% endhint %}

The basic processor use case is static bind a contract processor with a contract address, but it's quite common for projects to use a factory contract to dynamic create contracts, e.g. a defi project dynamic create multiple pools for different token pairs. We support this via `ProcessorTemplate`, which has the exact handler registration methods as the normal contract processor, but could be used to be bind dynamic. Note currently the template definition must be declared at the top level.&#x20;

&#x20;Suppose we have  a factory contract named `MyFactory` which creates `MyPool` contract and submit a `PoolCreated` event, then you can write your processor logic as following

<pre class="language-typescript"><code class="lang-typescript"><strong>import { MyPoolProcessorTemplate, MyFactoryProcessor } from './types/eth/mypool.js'
</strong>
const poolTemplate = new MyPoolProcessorTemplate()
    .onEventSwap((evt, ctx) => { ... })

MyFactoryProcessor.bind({address: "0xd20508E1E971b80EE172c73517905bfFfcBD87f9"})
  .onEventPoolCreated((event, ctx) => {
    poolTemplate.bind({
      address: event.args.pool,
      startBlock: ctx.blockNumber
    })
  })

</code></pre>
