# 🪝 Webhook

Sentio allows you to define the json message you want to send to webhook. In every webhook call, Sentio sends **an array** of json messages along with a few more metadata fields.

* **event\_id：**This is unique for the messages from a channel. If you receive a ID more than once, the new message should override the old message. This is required due to block chain reorg.
* **timestamp\_micros:** The timestamp in microseconds when the event happened.
* **version:** The processor version. Every new upload of the processor bumps the version by 1.

The actual json data is in the field "`data`"
