# ➡ View metrics

## Metadata

After the processor is successfully uploaded, you can first check the status of the processor on [**Datasource**](../references/ui-layout.md) tab. Make sure the status is shown as processing. Also, take notice of the **block number** each chain (Yes, we support multi-chain: [multi-chain-support.md](../best-practices/multi-chain-support.md "mention")) is processed at.

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

You can also examine the status of the collected [metrics](../references/ui-layout.md) on the Metrics tab.&#x20;

<figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

Clicking on each [metric](../references/concepts/metrics.md) gives you a more detailed view of the metric, including tags and visualization of the metrics.

## Single metric on UI

For the metric generated by [monitor-wormhole-weth-balance-via-events.md](submit-metrics/evm-chains/monitor-wormhole-weth-balance-via-events.md "mention"), the corresponding metric `balance` is:

&#x20;

<figure><img src="../.gitbook/assets/image (5) (2).png" alt=""><figcaption><p>balance</p></figcaption></figure>

For the metric generated by [monitor-wormhole-weth-balance-via-view-function.md](submit-metrics/evm-chains/monitor-wormhole-weth-balance-via-view-function.md "mention"), the corresponding metric `token_bridge_weth` is:

<figure><img src="../.gitbook/assets/image (23).png" alt=""><figcaption><p><em>token bridge balance</em></p></figcaption></figure>

For the metric generated by [monitor-weth-balance-on-solana-via-native-program.md](submit-metrics/solana/monitor-weth-balance-on-solana-via-native-program.md "mention"), the corresponding metric `totalWeth_supply` is:

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

You might notice 2 metrics `balance` and `token_bridge_weth` should represent exact same value, but they have different decimals. There are a couple approach to solve this issue. One is [handle-big-numbers.md](../developer-guides/sdk-guide/handle-big-numbers.md "mention"), another is using [aggregation-functions-and-formulas.md](../references/concepts/aggregation-functions-and-formulas.md "mention")



Now we have raw metrics, Let's go to [build-dashboards.md](build-dashboards.md "mention")
