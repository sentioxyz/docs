---
title: Export via WebHook
categorySlug: developer-guides
parentDocSlug: sdk-guide
hidden: false
---

You could use `Exporter` to send webhook. Note you need to give the channel name [notification-channel.md](../../references/concepts/notification-channel.md "mention") in the exporter (Config on the UI).

```typescript
const exporter = Exporter.register("SwapEvents", "WebhookChannel")
```

Note, the `WebhookChannel` should be replaced by the name you created on UI

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (4) (2).png" alt=""><figcaption></figcaption></figure>

To send webhook, use:

```typescript
exporter.emit(ctx, {evt})
```

For configuring the notification channel, please refer to [notification-channel.md](../../references/concepts/notification-channel.md "mention")

For understanding the webhook message, please refer to [webhook.md](../../references/concepts/data-types/webhook.md "mention")
