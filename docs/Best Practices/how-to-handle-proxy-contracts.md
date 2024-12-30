---
title: 🔍 How To Handle Proxy Contracts?
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
It is very common that users are using proxy contracts on EVM chain. For proxy contracts:

* Sentio needs ABI for the underlying implementation contract. You can find the proxy contract address from etherscan as follows

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/proxy.gif" alt=""><figcaption></figcaption></figure>

* In processor binding, it does not matter which address you bind with. Sentio can work with both the proxy address or the underlying contract address.