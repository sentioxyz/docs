---
title: 🪝 Webhook
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
> ✅
>
> Refer [export-via-webhook](export-via-webhook "mention")for the details of emitting webhook messages in the processor.


Sentio allows you to define the json message you want to send to webhook. In every webhook call, Sentio sends **an array** of json messages along with a few more metadata fields.

* **event\_id：**This is unique for the messages from a channel. If you receive a ID more than once, the new message should override the old message. This is required due to block chain reorg.
* **timestamp\_micros:** The timestamp in microseconds when the event happened.
* **version:** The processor version. Every new upload of the processor bumps the version by 1.

The actual json data is in the field "`data`" (What you pass in from the processor). A sample data looks like:

```json
[ ... array of following object
  {
    "export_name": "SwapEvent",
    "event_id": 1
    "timestamp_micros": 1668099816652000,
    "version": 1,
    "data": { ... your exporting data }
  },
  {
    "export_name": "SwapEvent",
    "event_id": 2
    "timestamp_micros": 1668099816653000,
    "version": 1,
    "data": { ... your exporting data }
  },
  ...
]
```

Your webhook endpoint should acknowledge a message by returning http status code 20x (currently the acknowledgement deadline is 5 seconds), otherwise Sentio will retry sending the message with an exponential back off policy.&#x20;

If Sentio attempts to deliver the message but can't receive acknowledgement, the message will be considered a dead letter eventually. Dead letters won't be delivered anymore, but can be pulled manually. The retention duration of dead letters is 7 days.

## Pulling dead letters&#x20;

You can call pulling API to get the dead letters in your project.

### HTTP Request

```
GET https://app.sentio.xyz/api/v1/webhook/deadletter/{owner}/{project}?limit={limit}
```

<table><thead><tr><th width="159">Fields</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>(string) The name of the project owner</td></tr><tr><td>project</td><td>(string) The name of the project</td></tr><tr><td>limit</td><td>(integer) Maximum batches of messages pulled at once, must be less equal than 10</td></tr></tbody></table>

### Response body

A sample response looks like:

```json
{
  "messages": [
    {
      "id": "6312269039920155",
      "attributes": {
        "channel_name": "test_channel"
      },
      "data": "{ ... array of messages }"
    },
    {
      "id": "6312269039920729",
      "attributes": {
        "channel_name": "test_channel"
      },
      "data": "{ ... array of messages }"
    },
    ...
  ]
}
```