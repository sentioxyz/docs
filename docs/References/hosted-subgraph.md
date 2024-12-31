---
title: Hosted Subgraph
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
In addition to Sentio processor, Sentio is also compatible Subgraph, while Sentio still provide same GraphQL API endpoint, we also provide SQL API, dashboards, multi-versioning, etc, many of the benefits that Sentio processor have provided. However in order to get max performance and usability, we still highly recommend to use [Sentio Processor](processor).

To create a Subgraph, first create a project and choose Subgraph as project type.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (99).png" alt="" />
  <figcaption></figcaption>
</figure>

Then upload your graph to this project with:

```
npx @sentio/cli graph deploy --owner $PROJECT_OWNER --name $PROJECT_NAME
```

Once it get uploaded, use [data-source](data-source "mention") page to view progress. And use data studio to access either GraphQL or SQL.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (1).png" alt="" width="563" />
  <figcaption></figcaption>
</figure>

Recommended subgraph version is:

```
@graphprotocol/graph-cli: 0.68.5
@graphprotocol/graph-ts: 0.32.0
```

## Hot Swap

If you want to hot swap a running processor version without re-indexing old data, run:

```
npx @sentio/cli graph deploy --owner $PROJECT_OWNER --name $PROJECT_NAME --continue-from=<old version>
```

## Network Supported

All the EVM network listed in [here](supported-networks "mention") are supported.\
For `network` field, we recommend to use chain id instead of network slug which could be ambiguous, e.g.

```
network: '1'
```

We also supported using your own customized RPC or forked network, just put the RPC endpoint in the `network` field, e.g.

```
network: 'http://my-forked-rpc-endpoint'
```

## Docs and API

When uploading the subgraph, the API endpoint will be printed in console, you can\
also find docs and API in the data studio page for the GraphQL.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/subgraph-graphql.png" alt="" width="563" />
  <figcaption></figcaption>
</figure>

## Limitation

Currently Sentio Subgraph doesn't have trace handler.