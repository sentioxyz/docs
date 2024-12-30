---
title: Get price
excerpt: >-
  GetPrice returns the price of a given coin identifier, in a best effort way.

  If we do not have any price data for the given coin, we will return NOT_FOUND
  error.

  If we have at least one price data for the given coin, we will return it with
  the actual timestamp.

  Client is responsible for checking the timestamp and decide whether to use the
  price or not.
api:
  file: sentio-api.json
  operationId: GetPrice
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---