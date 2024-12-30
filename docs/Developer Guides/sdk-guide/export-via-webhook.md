---
title: Export via WebHook
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
You could use `Exporter` to send webhook. Note you need to give the channel name [notification-channel](notification-channel "mention") in the exporter (config on the UI).

```typescript
const exporter = Exporter.register("SwapEvents", "WebhookChannel")
```

Note, the `WebhookChannel` should be replaced by the name you created on UI

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (4) (2).png" alt="" />
  <figcaption></figcaption>
</figure>

To send webhook, use:

```typescript
exporter.emit(ctx, {evt})
```

For configuring the notification channel, please refer to [notification-channel](notification-channel "mention")

For understanding the webhook message, please refer to [webhook](webhook "mention")