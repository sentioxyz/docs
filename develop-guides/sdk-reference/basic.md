# Processor Basic

The core concept of a Sentio project is Processor. A processor is usually a typescript project that contains logic to handle blockchain data and submit data to sentio. The processor should be written using Sentio's SDK framework and be submitted and run on Sentio.

A Sentio processor could handle multiple contracts on multiple chains. To import a contract, simple copy the contract's ABI JSON file into `abis` directory. Run `sentio build` or `sentio gen` will generate contract processor files into the `src/types` directory. Then you can use the generated contract processor class to bind to an address, and add event/call/block handler, the SDK also comes up with several built-in contract processors, a minimal processor example with built-in ERC20 processor is:

```
import { ERC20Processor } from '@sentio/sdk/lib/builtin/erc20'

ERC20Processor.bind({ address: '0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9', network: 5 })
  .onEventTransfer((event, ctx) => {
    ctx.meter.Counter('token').add(event.args.value)
  }
)
```

The above code first bind ERC20 contract processor to a specific address on the Goerli network (specify with `network=5` , can be omit if just using Ethereum mainnet). Then it registers a function that handles `Transfer` event, for each of these events, we add the transfer value to a metric named `token`.

If you bring your own ABI, our code gen will automatically generate all event handler registration method in a typesafe way as well.
