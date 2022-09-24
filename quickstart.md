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

## Step 4: Login with Your API Key

As will be mentioned in the last step, you could copy and paste the login command, this will only need to be run once, you don't need to run this for your next projects.

```
npx -p @sentio/sdk sentio login --api-key $YOUR_API_KEY
```

Also make sure you have Node.js installed in your local environment.

## Step 5: Create Your Processor

You can simply run the following command to create your processor which will submit metrics into your project.&#x20;

```
npx -p @sentio/sdk sentio create
```

If you have specified a different project name other than "default", then run following instead:

```
npx -p @sentio/sdk sentio create $PROJECT_NAME
```

## Step 6: Upload your Processor

The sample project includes a simple processor that tracks ERC20 mints event of X2Y2 token. To upload and run it, run

```
yarn install
yarn sentio upload
```

## End: verify your data

The command line should tell you the processor has been uploaded correctly and give you a link to check the status of the processor, such as what chains this processor is running, how many blocks have it processed, the version, etc. &#x20;

You can go to the metrics page to check the metrics that are submitted to the projects.



## Video overview

Got 2 minutes? Check out a video overview of our product:

{% embed url="https://www.loom.com/embed/3bfa83acc9fd41b7b98b803ba9197d90" %}
