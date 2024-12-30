---
title: 💰 Fund Tracing
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
The best way to understand a transaction is to trace the fund, Sentio provides both [#balance-change](fund-tracing#balance-change "mention") and [#fund-flow](fund-tracing#fund-flow "mention")

## Balance Change

After a transaction, different parties involved might have their balance changed. Sentio displays the changed balance directly.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (22).png" alt=""><figcaption><p>Balance Change</p></figcaption></figure>

For example, in this MEV arbitrage transaction above, each party involved has a balance of different assets increasing and decreasing, except one address (0xa0d...) which has only an increasing asset, indicating that it made the arbitrage profit.

## Fund Flow

Sentio also provides detailed and **ordered** fund flow. See example below (The arbitrage made a profit by trading in a few trading venues)

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (17).png" alt=""><figcaption><p>Fund flow</p></figcaption></figure>