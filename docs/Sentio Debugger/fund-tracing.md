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
The best way to understand a transaction is to trace the funds. Sentio provides both [#balance-change](fund-tracing#balance-change "mention") and [#fund-flow](fund-tracing#fund-flow "mention").

## Balance Change

After a transaction, different parties involved might have their balance changed. Sentio displays the changed balance directly.

<Image align="center" border={false} caption="Balance Change" src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(22).png" />

For example, in this MEV arbitrage transaction above, each party involved has a balance of different assets increasing and decreasing, except one address (0xa0d...) which has only an increasing asset, indicating that it made the arbitrage profit.

## Fund Flow

Sentio also provides detailed and **ordered** fund flow. See the example below (The arbitrage made a profit by trading in a few trading venues):

<Image align="center" border={false} caption="Fund flow" src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(17).png" />
