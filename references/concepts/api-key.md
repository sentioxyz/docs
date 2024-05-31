---
title: 🔑 API Key
categorySlug: references
parentDocSlug: concepts
hidden: false
---

Click the profile page on the **left bottom corner** and then create an [API key](https://app.sentio.xyz/profile/apikeys).

<figure><img src="../../.gitbook/assets/apikey.gif" alt=""><figcaption><p>Obtain API Key</p></figcaption></figure>

API key could be used for API call and login with command line. To login, copy the command given and execute in any terminal. Then you are all set.

{% hint style="warning" %}
Note, Please replace with your own API key.
{% endhint %}

```bash
export YOUR_API_KEY=generated from UI
npx -y -p @sentio/cli sentio login --api-key $YOUR_API_KEY
```
