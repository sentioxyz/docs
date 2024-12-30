---
title: ⚡ Event Analytics Dashboard
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
Event Analytics Dashboard is used to visualize data submitted by [logs-in-processor](logs-in-processor "mention")

Here is one example we make a dashboard for **Accumulative Unique Users**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/AAU.gif" alt="" />
  <figcaption></figcaption>
</figure>

> ⚠️
>
> This requires the event were submitted with [#distinct-id](logs-in-processor#distinct-id "mention")

## All Events

*All Events* is a union of all the events submitted. It is a handy way for us to compute the **Accumulative Unique Users** of all your data.