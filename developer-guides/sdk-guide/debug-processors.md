# Debug Processors

You can debug processor via console logs. Simply do

```typescript
console.log("num of pools: ", pools.length, ctx.version.toString())
```

Then you could view the debug log from the [data-source.md](../../references/concepts/data-source.md "mention")page.

<figure><img src="../../.gitbook/assets/console.gif" alt=""><figcaption><p>Viewing Console Logs</p></figcaption></figure>

{% hint style="info" %}
* The logs are order by the actual timestamp it is written
  * It is irrelevant to the actual block timestamp or any timestamp that is on the blockchain
  * You should not assume any strong ordering correlation from the processor code.
* The logs have **a retention of 3 days**
{% endhint %}

