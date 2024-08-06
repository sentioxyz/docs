---
title: Hosted Subgraph
categorySlug: developer-guides
parentDocSlug: sdk-guide
hidden: false
---

In addition to Sentio processor, Sentio is also compatible Subgraph, while Sentio still provide same GraphQL API endpoint, we also provide SQL API, dashboards, multi-versioning, etc, many of the benefits that Sentio processor have provided. However in order to get max performance and usability, we still highly recommend to use [Sentio Processor](processor).

To create a Subgraph, first create a project and choose Subgraph as project type.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

Then upload your graph to this project with:

```
npx @sentio/cli graph deploy --owner $PROJECT_OWNER --name $PROJECT_NAME
```

Once it get uploaded, use [data-source](data-source "mention") page to view progress. And use data studio to access either GraphQL or SQL.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (1).png" alt="" width="563"><figcaption></figcaption></figure>

Recommended subgraph version is:

```
@graphprotocol/graph-cli: 0.68.5
@graphprotocol/graph-ts: 0.32.0
```

## Docs and API
When uploading the subgraph, the API endpoint will be printed in console, you can
also find docs and API in the data studio page for the GraphQL.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/assets/subgraph-graphql.png" alt="" width="563"><figcaption></figcaption></figure>

## Limitation

Currently Sentio Subgraph doesn't have trace handler.
