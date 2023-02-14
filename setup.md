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

Normally, you do not need to explicit generate API keys for uploading [processor.md](references/concepts/processor.md "mention"). But you can always sign in manually, please refer to [api-key.md](references/concepts/api-key.md "mention")

