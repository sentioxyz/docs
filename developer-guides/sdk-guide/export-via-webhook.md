# Export via WebHook

You could use `Exporter` to send webhook.

```typescript
const exporter = Exporter.register("SwapEvents", "test_channel")
```

To send webhook, use:

```typescript
exporter.emit(ctx, {evt})
```

For configuring the notification channel, please refer to [channel.md](../../references/concepts/channel.md "mention")

For understanding the webhook message, please refer to [webhook.md](../../references/concepts/webhook.md "mention")
