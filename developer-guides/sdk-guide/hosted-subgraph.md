# Hosted Subgraph

In addition to Sentio processor, Sentio is also compatible Subgraph, while Sentio still provide same GraphQL API endpoint, we also provide SQL API, dashboards, multi-versioning, etc, many of the benefits that Sentio processor have provided. However in order to get max performance and usability, we still highly recommend to use [Sentio Processor](../../references/concepts/processor.md).

To create a Subgraph, first create a project and choose Subgraph as project type.

<figure><img src="../../.gitbook/assets/image (99).png" alt=""><figcaption></figcaption></figure>

Then upload your graph to this project with:

<pre data-overflow="wrap"><code><strong>npx @sentio/cli graph deploy --node https://www.sentio.xyz/api/v1/graph-node --ipfs https://www.sentio.xyz/api/v1/ipfs $PROJECT --version-label v0.0.12 --deploy-key $SENTIO_API_KEY
</strong></code></pre>

Once it get uploaded, use [data-source.md](../../references/concepts/data-source.md "mention") page to view progress. And use data studio to access either GraphQL or SQL.

<figure><img src="../../.gitbook/assets/image (1).png" alt="" width="563"><figcaption></figcaption></figure>

Recommended subgraph version is:

```
@graphprotocol/graph-cli: 0.68.5
@graphprotocol/graph-ts: 0.32.0
```

## Limitation

Currently Sentio Subgraph doesn't have trace handler.
