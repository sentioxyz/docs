# Handlers and Filters

Sentio processors basically provide you with an event-driven model to handle and submit data. Once a processor is created, you can register your event handler functions with filters.&#x20;

The handler function usually takes two parameters, the first one is `data` and the second one is the `context`. Data usually refers to the actual object that is selected by the handler.  Context usually holds  all the API objects  such as `meter` , `logger` and all the additional information such as block number, contract reference, etc.

For some handler type you can pass a filter to significantly speed up your data processing.

### EVM

* [`onBlock`](https://sentioxyz.github.io/sentio-sdk/classes/core.BaseProcessor.html#onBlock) : execute on certain blocks interval backfill historical data, and execute every block processing new data. &#x20;
*   `onEventXXX`: execute on certain event occurrences of this contract, to have those handlers available you need to [code-gen](../../how-to-guides-by-examples/submitting-metrics/evm-chains/decoding-from-custom-abis.md) your own types of processor, or use builtin processors, e.g. [`ERC20Processor.onEventApproval`](https://sentioxyz.github.io/sentio-sdk/classes/builtin.erc20.ERC20Processor.html#onEventApproval). You can filter events using event filter also generated for your contract. e.g. for [`ApprovalEventFilter`](https://sentioxyz.github.io/sentio-sdk/types/builtin.erc20.ApprovalEventFilter.html) , you can create and use it as follow, each parameter represents the desired value of the event, `undefined` or `null` value meaning match all.  The semantics is the same as Ethereum's own log filter, read more details [here](https://docs.ethers.io/v5/concepts/events/#events--filters).

    {% code overflow="wrap" %}
    ```
    const filter = ERC20Processor.filters.Approval(  '0x0000000000000000000000000000000000000000',  '0xb329e39ebefd16f40d38f07643652ce17ca5bac1')

    ERC20Processor.bind(...).onEventTransfer(...,
      filter
    )
    ```
    {% endcode %}
* onCallXXX: execute on certain function calls based on Ethereum traces. You need to code-gen the processor or use a builtin processor as well. An example call handler is [`ERC20Processor`.`onCallBurnFrom`](https://sentioxyz.github.io/sentio-sdk/classes/builtin.erc20.ERC20Processor.html#onCallBurnFrom) which captures all burn from calls, notice you might need to check the `error` field before using the data to generate metrics.&#x20;
* [`onAllEvent`](https://sentioxyz.github.io/sentio-sdk/classes/core.BaseProcessor.html#onAllEvents) : execute on all types of event occurrences of this contract, usually use  [`GenericProcessor`](https://sentioxyz.github.io/sentio-sdk/classes/core.GenericProcessor.html) when you don't want to use a full ABI JSON to do code gen.

### Solana

TBD

### Aptos

* `onEntryXXXFunction`: execute on all of your specific entry function calls. The first argument is the payload of the function with fully decoded and typed arguments. Refer [`coin.TransferPayload`](https://sentioxyz.github.io/sentio-sdk/interfaces/builtin.aptos.\_0x1.coin.TransferPayload.html) as an example. The second argument is [`AptosContext`](https://sentioxyz.github.io/sentio-sdk/classes/aptos.AptosContext.html) that holds APIs and additional information like the full user transaction.
* `onEventXXX`:  execute on all the specific event occurrences. Similar to the above handler, the first argument is the event data structure, e.g. [`coin.WithdrawEventInstance`](https://sentioxyz.github.io/sentio-sdk/interfaces/builtin.aptos.\_0x1.coin.WithdrawEventInstance.html) . The second argument is also the [`AptosContext`](https://sentioxyz.github.io/sentio-sdk/classes/aptos.AptosContext.html) . Notice the transaction object in event handler's context will not hold full transaction info. The event list and the entry function payload will be ignored. If you need those, then consider the function handler.

Aptos filters are still developing in progress. Welcome to submit your feedback through our [telegram group](https://t.me/sentioxyz).

## Filters
