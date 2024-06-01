---
title: 🔍 Formula usage best practices
categorySlug: best-practices
hidden: false
---

## Aggregation before add or sub

Assume you'd like to use the result of addition or subtraction of 2 metrics, make sure you aggregate it before actually apply formula. This is because that users need to make sure the [#series](../references/concepts/data-types/metrics.md#series "mention")is reduced to 1.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (2) (2).png" alt=""><figcaption></figcaption></figure>
