# ⏰ Alert

Alerts can be created for a query or formula to notify when a certain condition is met. For example, you can use Alerts to notify your team when a large mint event is emitted or a large discrepancy is detected.&#x20;

<figure><img src="../../.gitbook/assets/image (8) (1).png" alt=""><figcaption></figcaption></figure>

### Define Query or Formula

The process of defining the query or formula to be monitored is very similar to creating a dashboard. The main difference is for each alert a single series needs to be produced as the result.

### Conditions

The next step is to specify what condition needs to be met for the result above to trigger the alert. Currently, Sentio supports the following conditions:

`greater than`

`greater or equal`

`less than`

`less or equal`

`not equal`

`equal`

If the query contains multiple series, then the condition will be met when on of the series meet the condition, so you may want to do aggregation if needed.

### Notification Channel and Message

Next, you can specify the title and message when an alert is triggered. You can also specify the channel via which the notification is sent. Currently, Sentio supports the following channels:

* Slack
* Email
* Webhook

<figure><img src="../../.gitbook/assets/image (1) (3) (1).png" alt=""><figcaption></figcaption></figure>
