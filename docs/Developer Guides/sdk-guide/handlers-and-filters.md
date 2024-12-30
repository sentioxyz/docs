---
title: Handlers and Filters
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
Sentio processors basically provide you with an event-driven model to handle and submit data. Once a processor is created, you can register your event handler functions with filters.&#x20;

The handler function usually takes two parameters, the first one is `data` and the second one is the `context`. Data usually refers to the actual object that is selected by the handler.  Context usually holds  all the API objects  such as `meter` , `eventLogger` and all the additional information such as block number, contract reference, etc.

For some handler type you can pass a filter to significantly speed up your data processing.

### EVM

* onBlockInterval : execute on certain blocks interval **X** backfill historical data, and execute every **Y** blocks processing new data. Both **X and Y** are configurable.
* onTimeInterval: execute on certain time interval **X minutes** backfill historical data, and execute every **Y** minutes processing new data. Both **X and Y** are configurable.
*   `onEventXXX`: execute on certain event occurrences of this contract, to have those handlers available you need to [code-gen](decoding-from-custom-abis) your own types of processor, or use builtin processors, e.g. [`ERC20Processor.onEventApproval`](https://sentioxyz.github.io/sentio-sdk/classes/builtin.erc20.ERC20Processor.html#onEventApproval). You can filter events using event filter also generated for your contract. e.g. for [`ApprovalEventFilter`](https://sentioxyz.github.io/sentio-sdk/types/builtin.erc20.ApprovalEventFilter.html) , you can create and use it as follow, each parameter represents the desired value of the event, `undefined` or `null` value meaning match all.  The semantics is the same as Ethereum's own log filter, read more details [here](https://docs.ethers.io/v5/concepts/events/#events--filters).

    ```typescript
    const filter = ERC20Processor.filters.Approval(  '0x0000000000000000000000000000000000000000',  '0xb329e39ebefd16f40d38f07643652ce17ca5bac1')

    ERC20Processor.bind(...).onEventTransfer(...,
      filter
    )
    ```
    *   onCallXXX: execute on certain function calls based on Ethereum traces. You need to code-gen the processor or use a builtin processor as well. An example call handler is [`ERC20Processor`.`onCallBurnFrom`](https://sentioxyz.github.io/sentio-sdk/classes/builtin.erc20.ERC20Processor.html#onCallBurnFrom) which captures all burn from calls. Notice you might need to check the `error` field before using the data to generate metrics.&#x20;

    ```typescript
    ERC20Processor.bind(...)
      .onCallBurnFrom((call, ctx) => {
         if (!call.error) {
           ctx.meter.Counter("burned").add(call.args.amount)
         }
      })
    ```
    * [`onAllEvent`](https://sentioxyz.github.io/sentio-sdk/classes/core.BaseProcessor.html#onAllEvents) : execute on all types of event occurrences of this contract, usually use  [`GenericProcessor`](https://sentioxyz.github.io/sentio-sdk/classes/core.GenericProcessor.html) when you don't want to use a full ABI JSON to do code gen.

### Solana

TBD

### Aptos

* onTimeInterval: execute on certain time interval **X minutes** backfill historical data, and execute every **Y** minutes processing new data. Both **X and Y** are configurable.
* onVersionInterval : execute on certain versions interval **X** backfill historical data, and execute every **Y** blocks processing new data. Both **X and Y** are configurable.
*   `onEntryXXXFunction`: execute on all of your specific entry function calls. The first argument is the payload of the function with fully decoded and typed arguments. Refer [`coin.TransferPayload`](https://sentioxyz.github.io/sentio-sdk/interfaces/builtin.aptos.\_0x1.coin.TransferPayload.html) as an example. The second argument is [`AptosContext`](https://sentioxyz.github.io/sentio-sdk/classes/aptos.AptosContext.html) that holds APIs and additional information like the full user transaction. A full example looks like follows.&#x20;

    ```typescript
    SouffleChefCampaign.bind({ startVersion: 6604913 })
      .onEntryPullTokenV2((call, ctx) => {
        ctx.meter.Counter('pulled').add(call.arguments_typed[3])
      })
    ```

    Notice by default it will only capture the successful entry function calls. If you also want to  inspect the failed ones, you can pass an extra argument as follow. The failed transaction payload will not include the `arguments_typed` field so you need to guard the access.

    ```typescript
    SouffleChefCampaign.bind({ startVersion: 6604913 })
        .onEntryPullTokenV2((call, ctx) => {
        ...
      }, { incluedFailed: true })
    ```
* `onEventXXX`:  execute on all the specific event occurrences. Similar to the above handler, the first argument is the event data structure, e.g. [`coin.WithdrawEventInstance`](https://sentioxyz.github.io/sentio-sdk/interfaces/builtin.aptos.\_0x1.coin.WithdrawEventInstance.html) . The second argument is also the [`AptosContext`](https://sentioxyz.github.io/sentio-sdk/classes/aptos.AptosContext.html) . Notice the transaction object in event handler's context will not hold full transaction info. The event list and the entry function payload will be ignored. If you need those, then consider the function handler.&#x20;
* ```typescript
  SouffleChefCampaign.bind({ startVersion: 6604913 })
    .onEventBurnEnjoyEvent((evt, ctx) => {
      ctx.meter.Counter('burned').add(1)
    })type
  ```

Aptos filters are still developing in progress. Welcome to submit your feedback through our [telegram group](https://t.me/sentioxyz).