---
title: ⚙️ Overview
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
Sentio Debugger is a tool to help users understand how a transaction works in detail. It has basic functions such as:

* [transaction-info](transaction-info "mention")
* [trace-view](trace-view "mention")
* [fund-tracing](fund-tracing "mention")
* [debugger](debugger/ "mention")
* [simulation](simulation/ "mention")

In addition, it also provides a set of unique abilities like:

* [code-insight](code-insight "mention"): navigate through code like an IDE
* [build-mode](build-mode "mention"): avoid debug information misses due to compiler optimization 
* [dynamic-logging](dynamic-logging "mention"): add additional `console.log` for on-chain transactions to extract information. It is part of the more general [#override-contract](simulation/#override-contract "mention") that allows you to override contracts on specific addresses.
* [single-step-mode](single-step-mode "mention") (alpha): examine execution in much greater detail

Most of these functions can be accessed through the [API](https://docs.sentio.xyz/reference/debug-and-simulation) as well.

{/* region individual */}

## Get started

### Explorer Page

Users can search for any transaction on the [Explorer page](https://app.sentio.xyz/explorer), and then use the debugger.

<Image align="center" border={false} caption="Transaction Search" src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(32).png" />

### Chrome Plugin

You can also install our [Chrome plugin](https://chromewebstore.google.com/detail/sentio/kkdofmcnddcnldoingfpiojnnkdcbhnf), which brings all the functionalities directly into your favorite explorer.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(39).png)
