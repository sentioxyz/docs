---
title: Data
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
Two kinds of data API are commonly used, for metrics, event logs and entity related, it's called [Insight API](https://docs.sentio.xyz/reference/data#insight-api "mention"), and you can also use raw [SQL API](https://docs.sentio.xyz/reference/data#sql-api "mention").\
For subgraph project, you could use both [SQL API](https://docs.sentio.xyz/reference/data#sql-api "mention") and [Subgraph API](hosted-subgraph#api "mention").

## Insight API

The easiest way to build query is through UI, you could first create an insight chart,

and then

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (101).png" alt="" width="563"><figcaption></figcaption></figure>

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

### Time Range Configuration Guide

When configuring a time range, you can specify the `start` and `end` times, as well as the `step` interval and `timezone`. Below are the details on how to set these parameters:

1. **Start and End Time**:

   * **"now"**: Represents the current time, usually used in the `end` field.
   * **"now-x\[dmsy]"**: Represents the time range starting from the last specified period until now. For example, `now-30d` means the last 30 days from now. The units can be:
     * "s" for seconds
     * "m" for minutes
     * "d" for days
     * "w" for weeks
     * "mo" for months
     * "y" for years
   * **Milliseconds since January 1, 1970, UTC**: You can specify a precise time using the number of milliseconds since the Unix epoch (January 1, 1970, UTC). For example, `1716430188709`.

2. **Step**:

   * The interval time of data in seconds. This controls how frequently data points should appear in your range. For example, if you set `step` to `3600`, data points will appear at one-hour intervals. Please note that the actual step may be adjusted if the interval is short but the date range is long. Typically, the total number of data points should not exceed 1000.

3. **Timezone**:

   * Specify the timezone using the tz database name. You can find the appropriate timezone from this [list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, `America/New_York` or `Asia/Tokyo`.

#### Example Configuration

Here’s an example configuration that uses these parameters:

```json
{
  "start": "now-30d",
  "end": "now",
  "step": 3600,
  "timezone": "America/New_York"
}
```

* **Start**: The range starts from 30 days ago.
* **End**: The range ends at the current time.
* **Step**: Data points are provided every hour.
* **Timezone**: The times are adjusted to the Eastern Time Zone (America/New\_York).

This configuration ensures that you get hourly data points for the last 30 days, adjusted to the specified timezone.

## SQL API

For SQL API, go to "Data Studio" -> "SQL Editor", write your query and then click "Export as cURL"

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (102).png" alt="" width="563"><figcaption></figcaption></figure>

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

Each API could directly control cache strategy by adding an `cachePolicy` field as follow. The default cache behavior is have a long cache TTL and short refresh TTL, so the query is cached most of the time but if it's stale trigger background refreshing.

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

API would also return information about the caching and other stats like follow: 

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
