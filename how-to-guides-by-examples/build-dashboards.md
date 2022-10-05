# ➡ Build dashboards

To use the metrics to better do visualization and computation, you could build dashboard using the metrics collected. Here is one example we have a dashboard overlay `balance` and `token_bridge_weth` in the same dashboard.

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

Note, even these 2 metrics should track each other closely, but they have different decimals. We could use [formula](../references/concepts/functions-and-formulas.md) to **normalize** `balance` to make them match.

<figure><img src="../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
A few things to notice here:

* You can control which query to show by clicking the left hand side of a [**metric**](../references/concepts/metrics.md) or [**formula**](../references/concepts/functions-and-formulas.md)****
* You could add alias to a query
{% endhint %}

Putting them all together, we have a dashboard ready

<figure><img src="../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>
