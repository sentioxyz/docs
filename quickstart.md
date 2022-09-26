# 💡 Quickstart

{% hint style="info" %}
In this section, we will show you how to set up a simple project to monitor an ERC20 contract.&#x20;
{% endhint %}

## Step 1: Create a Sentio Account

Simply go to [https://app.sentio.xyz](https://app.sentio.xyz) and login/create your account

## Step 2: Create a Project (optional)

By default, Sentio will create an empty "default" project for you, if you want to have a default project ID, then click "Create Project" on the project selector.

<figure><img src=".gitbook/assets/image (1) (1) (2).png" alt=""><figcaption></figcaption></figure>

## Step 3: Create an API Key&#x20;

Click the profile page on the left bottom corner and then create an API key.

<figure><img src=".gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

## Step 4: Login with API Key

Copy and paste the login command from Step 3 on your command line. Note that this only needs to be run once unless the API key is deleted in the future.

```
npx -p @sentio/sdk sentio login --api-key $YOUR_API_KEY
```

You need to install Node.js for the command to run.

## Step 5: Create Processor Project

You can simply run the following command to create a processor project with the name `default`

```
npx -p @sentio/sdk sentio create
```

You can also give the processor project a name by using the following command

```
npx -p @sentio/sdk sentio create $PROJECT_NAME
```

The commands will generate a sample project based on X2Y2 token. This should be a good starting point to write your own processor logic. For more information on how to write a processor you can refer to [basic.md](develop-guides/sdk-reference/basic.md "mention")

## Step 6: Upload Processor

You can build and upload the processor project by using the following command

```
yarn install
yarn sentio upload
```

## End: Verify Metrics

The command line should tell you the processor has been uploaded correctly and give you a link to check the status of the processor, such as what chains this processor is running, how many blocks have it processed, the version, etc. &#x20;

You can go to the metrics page to check the metrics submitted to the project. Checkout  [examine-metrics.md](product-guides/examine-metrics.md "mention")for more details.

