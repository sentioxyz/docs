# 🔗 Setup

## Before you begin

Sentio requires users to install [**node (v16+)**](https://nodejs.dev/en/) **** before uploading user code.

To install node, please follow the instructions [here](https://nodejs.dev/en/).

Follow [best-way-to-manage-nodejs.md](best-practices/best-way-to-manage-nodejs.md "mention") for node version management

## Register an Account and Command Line Login

Go to [app.sentio.xyz](https://app.sentio.xyz) to register an account. We support standard **Google/Github** login. To login from the commandline, you can do:

```
npx -y -p @sentio/cli sentio login
```

This should prompt for a link, and you can login using that link. It will generate a valid [api-key.md](references/concepts/api-key.md "mention") and store it locally.

## Generate the API key (optional)

Normally, you do not need to explicitly generate API keys for uploading [processor.md](references/concepts/processor.md "mention"). But you can always sign in manually, see [api-key.md](references/concepts/api-key.md "mention")

