# Export via WebHook

You could use `Exporter` to send webhook. Note you need to give the channel name [channel.md](../../references/concepts/channel.md "mention") in the exporter (Config on the UI).

```typescript
const exporter = Exporter.register("SwapEvents", "WebhookChannel")
```

To send webhook, use:

```typescript
exporter.emit(ctx, {evt})
```

For configuring the notification channel, please refer to [channel.md](../../references/concepts/channel.md "mention")

For understanding the webhook message, please refer to [webhook.md](../../references/concepts/data-types/webhook.md "mention")
