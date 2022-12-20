# Aptos Composer

Sentio Aptos Composer is a function simulator for the Aptos blockchain. It's fully [open-sourced](https://github.com/sentioxyz/sentio-composer) under Apache License. We also have a [public instance](https://composer.sentio.xyz/) that you can freely use.

We developed this due to the lack of an easy way to simulate a call against a function, especially against a historical version, which has constantly been brought up as a pain point in development and debugging. In addition, it captures the full results of function return, which means you could call those Aptos function directly from your web app, avoiding duplicating a lot of logic in your JS/TS code. You can read more about it at [Medium](https://sentioxyz.medium.com/open-sourcing-sentio-composer-the-aptos-view-function-simulator-1f7578b97b27).

For production use, it's recommended you host your own instance, or use our production instance for our customers.&#x20;

#### Use Dedicate Composer Instance

First, you need to have a Sentio account at [https://app.sentio.xyz](https://app.sentio.xyz/). Then [generate an API Key](../setup.md#generate-the-api-key-optional). Once you have the API key, you can access the endpoint using `https://app.sentio.xyz/api/v1/composer/call_function?api-key=$API_KEY.` Here is an example of how you can access composer view cURL.

{% code overflow="wrap" %}
```shell
curl 'https://app.sentio.xyz/api/v1/composer/call_function?api-key=$API_KEY' \
  -i \
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  --data-raw '{"func":"0x1::coin::balance","type_args":["0x1::aptos_coin::AptosCoin"],"args":["0x21ddba785f3ae9c6f03664ab07e9ad83595a0fa5ca556cec2b9d9e7100db0f07"],"ledger_version":35842267,"network":"mainnet"}' 
```
{% endcode %}



