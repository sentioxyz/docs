---
title: 💡 Data Source
categorySlug: references
parentDocSlug: concepts
hidden: false
---

From the data source page, you can do the followings:

* Monitor status of the processor (by chain)
* Debug processor (console logs)
* Version control

## Processor Status

At first, you will see a page showing that the processor is starting.

<figure><img src="../../.gitbook/assets/image (6) (3).png" alt=""><figcaption></figcaption></figure>

When the processor is doing backfill, you can visualize the detailed process status. In the example below, you can first see there are 2 sections, one for EVM and another for Aptos, then there are different progress for different chains.

<figure><img src="../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

## Debug processors

### Console log

You can see all the console logs (and part of the system logs) under chain status. See [#debug-processors](data-source.md#debug-processors "mention")

<figure><img src="../../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Note: console log has a **7-day** retention
{% endhint %}

### Error status

If your processor reports an error, you could visualize it by clicking the **Error** **Status.**

<figure><img src="../../.gitbook/assets/image (12) (1).png" alt=""><figcaption></figcaption></figure>

## Version Control (Only available for Paid Users)

### Enable multi-version

By default, every new upload overrides the previous upload. But users can enable **multi-version** from **Setting** page.

<figure><img src="../../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

### Set active version

After you enable multi-version, your previous version **keeps running** until you explicit switch the active version. The data of the old version will be deleted after a small delay.

<figure><img src="../../.gitbook/assets/image (1) (4).png" alt=""><figcaption></figcaption></figure>

### Abandon a version

It is possible that you upload a new processor and found an issue in it, you could always abandon it and work on a new version.

<figure><img src="../../.gitbook/assets/image (30) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
We support at most 2 versions with running processors and data stored. It means that you can have at most **one active** version and **one pending** version.
{% endhint %}
