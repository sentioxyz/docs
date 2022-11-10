# 💨 Metrics

Currently, we support users to submit two types of metric data.

## Counter&#x20;

Counter represents the **cumulative value** at a given time, each data point reported is a delta value (**add or subtract**) to the last value. Usually used to record e.g the accumulated number of tokens transferred.&#x20;

To see a complete example about how to use it, start from [monitor-wormhole-weth-balance-via-events.md](../../how-to-guides-by-examples/submitting-metrics/evm-chains/monitor-wormhole-weth-balance-via-events.md "mention")

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption><p>A typical counter</p></figcaption></figure>

## Gauge

Gauge represents a sampled value at a given time, each data point reported is the current value. Usually used to record e.g. **balance** or **total Supply**. To see a complete example about how to use it, start from [monitor-wormhole-weth-balance-via-view-function.md](../../how-to-guides-by-examples/submitting-metrics/evm-chains/monitor-wormhole-weth-balance-via-view-function.md "mention")



It shows up on the **Metrics** page like the following:

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>A typical gauge</p></figcaption></figure>

## Series

It is possible to have multiple **series** in one **metric**. Any label combination generate a different series. For example, if you have a metric which uses a token symbol as label. You'd generate multiple series in the dashboard by default. For example:

<figure><img src="../../.gitbook/assets/image (5) (3).png" alt=""><figcaption></figcaption></figure>

You can easily sum them by using [#space-aggregation](aggregation-functions-and-formulas.md#space-aggregation "mention")

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>
