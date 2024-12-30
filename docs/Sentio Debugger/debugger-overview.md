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
Sentio debugger is a tool to help users understand how a transaction works in detail. It has basic functions such as:

* [transaction-info](transaction-info "mention")
* [trace-view](trace-view "mention")
* [fund-tracing](fund-tracing "mention")
* [debugger](debugger/ "mention")
* [simulation](simulation/ "mention")

In addition, it also provides a set of unique abilities like

* [code-insight](code-insight "mention"): navigate through code like IDE
* [build-mode](build-mode "mention"):  avoid debug information misses due to compiler optimization 
* [dynamic-logging](dynamic-logging "mention"): add additional `console.log` for on-chain transaction to extract information. It is part of more general [#override-contract](simulation/#override-contract "mention") that allow you to override contract on a specific address.
* [single-step-mode](single-step-mode "mention") (alpha):  examine execution in much greater detail

Most of functions can be access through [API](https://docs.sentio.xyz/reference/debug-and-simulation) as well.

{/* region individual */}

## Get started

### Explorer Page

Users can search for any transaction on the [Explorer page](https://app.sentio.xyz/explorer), and then use the debugger.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (32).png" alt="" />
  <figcaption>
    <p>Transaction Search</p>
  </figcaption>
</figure>

### Chrome Plugin

You can also install our [Chrome plugin](https://chromewebstore.google.com/detail/sentio/kkdofmcnddcnldoingfpiojnnkdcbhnf), which brings all the functionalities directly into your favorite explorer.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (39).png" alt="" />
  <figcaption></figcaption>
</figure>