# Handlers and Filters

Sentio processors basically provide you with an event-driven model to handle and submit data. Once a processor is created, you can register your event handler functions with filters.&#x20;

The handler function usually takes two parameters, the first one is `data` and the second one is the `context`. Data usually refers to the actual object that is selected by the handler.  Context usually holds  all the API objects  such as `meter` , `logger` and all the additional information such as block number, contract reference, etc.

For some handler type you can pass a filter to significantly speed up your data processing.

### EVM

* [`onBlock`](https://sentioxyz.github.io/sentio-sdk/classes/core.BaseProcessor.html#onBlock) , execute on certain blocks interval backfill historical data, and execute every block processing new data. &#x20;
*   `onXXXEvent`, execute on certain event occurrences of this contract, to have those handlers available you need to [code-gen](../../how-to-guides-by-examples/submitting-metrics/evm-chains/decoding-from-custom-abis.md) your own types of processor, or use builtin processors, e.g. [`ERC20Processor.onEventApproval`](https://sentioxyz.github.io/sentio-sdk/classes/builtin.erc20.ERC20Processor.html#onEventApproval). You can filter events using event filter also generated for your contract. e.g. for [`ApprovalEventFilter`](https://sentioxyz.github.io/sentio-sdk/types/builtin.erc20.ApprovalEventFilter.html) , you can create and use it as follow, each parameter represents the desired value of the event, `undefined` or `null` value meaning match all.  The semantics is the same as Ethereum's own log filter, read more details [here](https://docs.ethers.io/v5/concepts/events/#events--filters).

    {% code overflow="wrap" %}
    ```
    const filter = ERC20Processor.filters.Approval(  '0x0000000000000000000000000000000000000000',  '0xb329e39ebefd16f40d38f07643652ce17ca5bac1')

    ERC20Processor.bind(...).onEventTransfer(...,
      filter
    )
    ```
    {% endcode %}

``[`onAllEvent`](https://sentioxyz.github.io/sentio-sdk/classes/core.BaseProcessor.html#onAllEvents) , execute on all types of event occurrences of this contract, usually use  [`GenericProcessor`](https://sentioxyz.github.io/sentio-sdk/classes/core.GenericProcessor.html) when you don't want to use a full ABI JSON to do code gen.

### Solana

### Aptos

## Filters
