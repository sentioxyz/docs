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
Alerts can be created for a query or formula to notify (via [notification-channel](notification-channel "mention")) when a certain condition is met.

## Metrics based alert (same as [create-alerts](create-alerts "mention"))

Assume we want to alert if TVL of your project is below a threshold, you could

* Select the metric that represents the TVL
* Add an alert condition
* Choose a notification channel [notification-channel](notification-channel "mention")

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/creatingAlert.gif" alt="" />

  <figcaption />
</figure>

> ℹ️
>
> Note you can also use [formula](aggregation-functions-and-formulas) in alerts

## Log based Alerts

You can count certain number of logs matching a criteria, and setup alerts based on the condition.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/log.gif" alt="" />

  <figcaption />
</figure>

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

## Define alerts

Assume we want to alert if TVL of your project is below a threshold, you could

* Select the metric that represents the TVL
* Add a alert condition
* Choose a notification channel [notification-channel](notification-channel "mention")

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/creatingAlert.gif" alt="" />

  <figcaption />
</figure>

> ℹ️
>
> Note you can also use [formula](aggregation-functions-and-formulas) in alerts

## Viewing Alert Instances

When you receive an alert instance (assuming through email channel), you can find the attached link that directly takes you to the alert instance page.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/alertInstance.gif" alt="" />

  <figcaption>
    <p>Viewing Alert Instance</p>
  </figcaption>
</figure>