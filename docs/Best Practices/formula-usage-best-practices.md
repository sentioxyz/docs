---
title: 🔍 Formula usage best practices
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
## Aggregation before add or sub

Assume you'd like to use the result of addition or subtraction of 2 metrics, make sure you aggregate it before actually apply formula. This is because that users need to make sure the [#series](metrics#series "mention")is reduced to 1.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (2) (2).png" alt="" />
  <figcaption></figcaption>
</figure>