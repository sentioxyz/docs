# 💡 Quickstart

{% hint style="info" %}
In this section, we will show you how to set up a simple project to monitor an ERC20 contract.&#x20;
{% endhint %}

## Step 1: Create a Sentio Account

Simply go to [https://app.sentio.xyz](https://app.sentio.xyz) and login/create your account.&#x20;

## Step 2: Create a Project (optional)

By default, Sentio will create an empty "default" project for you, if you want to have a default project ID, then click "**Create Project**" on the project selector.

<figure><img src=".gitbook/assets/image (1) (1) (2).png" alt=""><figcaption></figcaption></figure>

## Step 3: Setup Dev environment

We require users to follow [setup.md](setup.md "mention") before working on the projects.

## Step 4: Create Processor Project

You can simply run the following command to create a processor project with the name <mark style="color:blue;">`default`</mark>

```bash
npx -y -p @sentio/cli sentio create
```

You can also give the processor project a name by using the following command

```bash
npx -y -p @sentio/cli sentio create $PROJECT_NAME
```

The commands will generate a template project based on [X2Y2 token](https://github.com/X2Y2-io/x2y2-sdk). This should be a good starting point to write your own processor logic.  It is also possible to create template projects for other types of chains, please refer [CLI Reference](developer-guides/cli-reference.md#sentio-create). &#x20;

{% hint style="info" %}
You can directly **modify the code** to fit your use case as well.
{% endhint %}

For more information on how to write a processor you can refer to [processor-basic.md](developer-guides/sdk-guide/processor-basic.md "mention")

## Step 5: Upload Processor

You can build and upload the processor project by using the following command

```bash
yarn install
yarn sentio upload
```

You will see a link to [data-source.md](references/concepts/data-source.md "mention") printed and you can open it in a browser to see the upload status.

<figure><img src=".gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

## End: Verify Metrics

The command line should tell you the processor has been uploaded correctly and give you a link to check the status of the processor, such as what chains this processor is running, how many blocks have it processed, the version, etc. &#x20;

You can go to the metrics page to check the metrics submitted to the project. Checkout  [metrics.md](references/concepts/metrics.md "mention")for more details.

