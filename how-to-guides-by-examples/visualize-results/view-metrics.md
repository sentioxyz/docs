---
title: ➡ View Metrics
categorySlug: how-to-guides-by-examples
hidden: false
parentDocSlug: visualize-results
---

## Metadata

After the processor is successfully uploaded, you can first check the status of the processor on [**Datasource**](ui-layout) tab. Make sure the status is shown as <span style="color:green;">**PROCESSING**</span>. Also, take notice of the **block number** or **Version** on each chain (Yes, we support multi-chain: [multi-chain-support](multi-chain-support "mention")) is processed at.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/datasource.gif" alt=""><figcaption><p>Viewing Data Source</p></figcaption></figure>

You can also examine the status of the collected [metrics](ui-layout) on the Metrics tab.&#x20;

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (5) (4) (1).png" alt=""><figcaption><p>Viewing Metrics</p></figcaption></figure>

Clicking on each [metric](metrics) gives you a more detailed view of the metric, including tags and visualization of the metrics.

## Single metric on UI

For the metric generated by [monitor-coinbase-cbeth-mint-burn-via-events](monitor-coinbase-cbeth-mint-burn-via-events "mention"), the corresponding metric `mint_acc` is:

&#x20;

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/mintAcc.gif" alt=""><figcaption><p>Viewing a single metric mint_acc</p></figcaption></figure>

For the metric generated by [monitor-totalsupply-of-cbeth-via-interval](monitor-totalsupply-of-cbeth-via-interval "mention"), the corresponding metric `total_supply` is:

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/totalSupply.gif" alt=""><figcaption></figcaption></figure>



Now we have raw metrics, Let's go to [build-dashboards](build-dashboards "mention")
