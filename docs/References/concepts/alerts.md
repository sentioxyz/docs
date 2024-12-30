---
title: ⏰ Alerts
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
Alerts can be created for a query or formula to notify (via [notification-channel](notification-channel "mention")) when a certain condition is met.&#x20;

## Metrics based alert (same as [create-alerts](create-alerts "mention"))

Assume we want to alert if TVL of your project is below a threshold, you could&#x20;

* Select the metric that represents the TVL
* Add a alert condition
* Choose a notification channel [notification-channel](notification-channel "mention")

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/creatingAlert.gif" alt=""><figcaption></figcaption></figure>

> ℹ️
>
> Note you can also use [formula](aggregation-functions-and-formulas) in alerts


## Log based Alerts

You can count certain number of logs matching a criteria, and setup alerts based on the condition.

<figure><img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/log.gif" alt=""><figcaption></figcaption></figure>

## Alert Message

Beyond static content, you can also reference variables inside your alert message. In log based alert, you can use `.Samples` to reference the list of the event log instances. e.g. For event log recorded an `amount` field, you can customize the message like this:

```
Transfer events found:
{{ range .Samples }}
value {{.amount}}, at chain: {{.chain}}
{{ end }}
```

The syntax is straightforward here:

* `{{.VARIABLE_NAME}}` is to reference a variable or field (same as you defined in your event log) by name.
* `{{range .VARIABLE_NAME}} ... {{ end }}` is to loop through a list of elements if the variable is a list.