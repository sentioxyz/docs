---
title: 💱 Transaction info
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
Sentio provides standard info for a given transaction.

## Metadata

For every transaction, Sentio adds the standard transaction metadata, and the link to etherscan.

<Image align="center" border={false} caption="Transaction metadata" src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(2)%20(1)%20(1)%20(1)%20(1)%20(1).png" />

## Events

Events are decoded in a best-effort way (if we have ABIs)

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(29).png)

## State Diff

If the transaction caused any state changes, Sentio lists all the differences:

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(31).png)

## Contract View

Sentio provides a code explorer for all the contract-related code.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(8)%20(2).png)
