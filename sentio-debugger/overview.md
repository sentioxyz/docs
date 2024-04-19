# ⚙️ Overview

Sentio debugger is a tool to help users understand how a transaction works in detail. It has basic functions such as:

* [transaction-info.md](transaction-info.md "mention")
* [trace-view.md](trace-view.md "mention")
* [fund-tracing.md](fund-tracing.md "mention")
* [debugger](debugger/ "mention")
* [simulation](simulation/ "mention")

In addition, it also provides a set of unique abilities like

* [code-insight.md](code-insight.md "mention"): navigate through code like IDE
* [build-mode.md](build-mode.md "mention"):  avoid debug information misses due to compiler optimization&#x20;
* [dynamic-logging.md](dynamic-logging.md "mention"): add additional `console.log` with ease for on-chain transaction to extract information. Which is a part of more general feature [#override-contract](simulation/#override-contract "mention") that allow you easily replace contract on a specific address.
* [single-step-mode.md](debugger/single-step-mode.md "mention") (alpha):  examine execution in much greater detail

Most of functions can be access through API as well, such as [debug-api.md](../access-sentio-via-apis/debug-api.md "mention"), [simulation-api.md](simulation/simulation-api.md "mention") and [code-index-api.md](../access-sentio-via-apis/code-index-api.md "mention").

## Get started

### Explorer Page

Users can search for any transaction on the [Explorer page](https://app.sentio.xyz/explorer), and then use the debugger.&#x20;

<figure><img src="../.gitbook/assets/image (32).png" alt=""><figcaption><p>Transaction Search</p></figcaption></figure>

### Chrome Plugin

You can also install our [Chrome plugin](https://chromewebstore.google.com/detail/sentio/kkdofmcnddcnldoingfpiojnnkdcbhnf), which brings all the functionalities directly into your favorite explorer.

<figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>
