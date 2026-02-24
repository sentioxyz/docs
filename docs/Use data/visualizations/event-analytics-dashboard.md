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
Event Analytics Dashboard is used to visualize data submitted by [event-logs](event-logs "mention").

Here is one example where we make a dashboard for **Accumulative Unique Users**:

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/AAU.gif)

> ⚠️
>
> This requires that events were submitted with [#distinct-id](event-logs#distinct-id "mention").

## All Events

*All Events* is a union of all the events submitted. It is a handy way for us to compute the **Accumulative Unique Users** of all your data.
