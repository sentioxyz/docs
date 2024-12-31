---
title: 🥫 Notification Channel
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
We support creating notification channel for

* Email
* Webhook
* Slack
* Telegram
* PagerDuty
* Discord

## Creating Email Channel

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/createChannel.gif" alt="" />

  <figcaption>
    <p>Creating Email Channel</p>
  </figcaption>
</figure>

## Creating Slack Channel

You could follow UI instructions to perform slack integration.

## Creating Telegram Channel

First type in a channel name and click the Create button, then you should see a tip on how to connect with our @sentio\_bot on Telegram.

![](https://files.readme.io/b42839ecdae510bb8e5404ab892854e0d0b11b2b57b4d4d602d8fc8ffee50714-image.png)

<br />

## Creating Webhook Channel

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/webhook.gif" alt="" />

  <figcaption />
</figure>

Note, you can perform authentication through adding a custom header. In this example, we use a **key** with value `mockkey`.

## Creating PagerDuty Channel

You could follow UI instructions to perform slack integration. First Click Connect button.

![](https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image%20\(1\)%20\(1\)%20\(1\)%20\(2\)%20\(1\).png)

After the authentication, choose a service you created in PagerDuty.

<Image align="center" width="50% " src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image%20(12).png" />

## Creating Discord Channel

First create a webhook in a channel on your Discord server, copy the webhook URL.

<Image align="center" border={false} caption="On Discord, Edit Channel > Integrations > Webhooks" src="https://files.readme.io/f64fb9e1dddd31bede52894dc974927eb156cb4f1ec505e19713b975a824c7e7-image.png" />

Then paste the webhook URL to Sentio.

<Image align="center" border={false} caption="On Sentio, Channels > Add Channel" src="https://files.readme.io/ab024290f8128f910867a6077ef77376cce9731a72bf072bf70deae50f9c473d-image.png" />