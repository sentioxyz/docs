# 🔗 Setup

## Before you begin

Sentio requires users to install [**node (v16+)**](https://nodejs.dev/en/) **** before uploading user code.

To install node, please follow the instructions [here](https://nodejs.dev/en/).

## Register an Account and Command Line Login

Go to [app.sentio.xyz](https://app.sentio.xyz) to register an account. We support standard google/github login. To upload processor, you can do:

```
npx -y -p @sentio/cli sentio login
```

This would prompt a link and you could signin using the link. This will create an valid **API key** and store it locally.

## Generate the API key (optional)

Click the profile page on the **left bottom corner** and then create an [API key](https://app.sentio.xyz/profile#tab=apikey).

<figure><img src=".gitbook/assets/image (1) (3).png" alt=""><figcaption><p>Generate API key</p></figcaption></figure>

API key could be used for API call and login with command line. To login, copy the command given and execute in any terminal. Then you are all set.

{% hint style="warning" %}
Note, Please replace with your own API key.
{% endhint %}

```bash
export YOUR_API_KEY=generated from UI
npx -y -p @sentio/cli sentio login --api-key $YOUR_API_KEY
```
