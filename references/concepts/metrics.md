# 💨 Metrics

Currently, we support users to submit two types of metric data.

## Counter&#x20;

Counter represents the **cumulative value** at a given time, each data point reported is a delta value (**add or subtract**) to the last value. Usually used to record e.g the accumulated number of tokens transferred.&#x20;

To see a complete example about how to use it, start from [monitor-wormhole-weth-balance-via-events.md](../../how-to-guides-by-examples/submitting-metrics/evm-chains/monitor-wormhole-weth-balance-via-events.md "mention")

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption><p>A typical counter</p></figcaption></figure>

## Gauge

Gauge represents a sampled value at a given time, each data point reported is the current value. Usually used to record e.g. **balance** or **total Supply**. To see a complete example about how to use it, start from [monitor-wormhole-weth-balance-via-view-function.md](../../how-to-guides-by-examples/submitting-metrics/evm-chains/monitor-wormhole-weth-balance-via-view-function.md "mention")



It shows up on the **Metrics** page like the following:

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption><p>A typical gauge</p></figcaption></figure>
