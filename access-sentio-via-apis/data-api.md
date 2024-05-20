# Data API

Two kinds of data API are commonly used, for metrics and event logs related, it's called [#insight-api](data-api.md#insight-api "mention"), and you can also use raw [#sql-api](data-api.md#sql-api "mention").

## Insight API

The easiest way to build query is through UI, you could first create an insight chart,&#x20;

and then

<figure><img src="../.gitbook/assets/image (101).png" alt="" width="563"><figcaption></figcaption></figure>

The result is like:

```
curl -L -X POST 'https://app.sentio.xyz/api/v1/metrics/sentio/coinbase/query_range' \
     -H 'api-key: <API_KEY>' \
     -H 'Content-Type: application/json' \
     --data-raw '{
  "queries": [
    {
      "query": "mint_sum",
      "alias": "Mint (24 hours)",
      "id": "a",
      "labelSelector": {},
      "aggregate": null,
      "functions": [
        {
          "name": "rollup_sum",
          "arguments": [
            {
              "durationValue": {
                "value": 1,
                "unit": "d"
              }
            }
          ]
        }
      ],
      "disabled": false
    },
    {
      "query": "burn_sum",
      "alias": "Burn (24 hours)",
      "id": "b",
      "labelSelector": {},
      "aggregate": null,
      "functions": [
        {
          "name": "rollup_sum",
          "arguments": [
            {
              "durationValue": {
                "value": 1,
                "unit": "d"
              }
            }
          ]
        }
      ],
      "disabled": false
    }
  ],
  "formulas": [],
  "timeRange": {
    "start": "now-30d",
    "end": "now",
    "step": 3600,
    "timezone": "America/Los_Angeles"
  },
  "samplesLimit": 20
}'
```



## SQL API

For SQL API, go to "Data Studio" -> "SQL Editor", write your query and then click "Export as cURL"

<figure><img src="../.gitbook/assets/image (102).png" alt="" width="563"><figcaption></figcaption></figure>

Then it shows things like

```
curl -L -X POST 'https://app.sentio.xyz/api/v1/analytics/sentio/coinbase/sql/execute' \
     -H 'api-key: <API_KEY>' \
     -H 'Content-Type: application/json' \
     --data-raw '{
  "sqlQuery": {
    "sql": "SELECT uniq(distinct_id) FROM `Transfer` \n"
  }
}'
```

## Cache Control

Each API could directly control cache strategy by adding an `cachePolicy` field as follow. The default cache behavior is have a long cache TTL and short short refresh TTL, so the query is cached most of the time but if it's stale trigger background refreshing.&#x20;

```
{
   ...
   cache_policy: {
      cache_ttl_secs: number // ttl for cache
      no_cache: bool // don't use cache for this query (don't do refreshing)
      cache_refresh_ttl_secs: number // ttl for triggering background refresh
      force_refresh: bool // force caching refresh now on this query.
   }
}
```

API would also return information about the caching and other stats like follow:&#x20;

```
{

   ...
   compute_stats: {
      computed_at: timestamp // when the result is computed
      is_cached: bool // is the result come from cache
      is_refreshing: bool // is the background refreshing triggering
   }
}
```

