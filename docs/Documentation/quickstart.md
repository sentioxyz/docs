---
title: 💡 Quickstart
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
> ℹ️
>
> In this section, we will show you how to set up a simple project to monitor an ERC20 contract.

## Step 1: Create a Sentio Account

Simply go to [https://app.sentio.xyz](https://app.sentio.xyz) and login/create your account. 

## Step 2: Create a Project (optional)

We recommend you to create project via clicking "**Create Project**" on the project selector.\
Though this is optional because our CLI can also automatically create a project for you upon uploading.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/createProject.gif" alt="" />
  <figcaption></figcaption>
</figure>

## Step 3: Setup Dev environment

We require users to follow [setup](setup "mention") before working on the projects.

## Step 4: Create Processor Project

You can simply run the following command to create a sentio processor project.

```bash
npx @sentio/cli@latest create `<project name>`
```

The commands will generate a template project based on [X2Y2 token](https://github.com/X2Y2-io/x2y2-sdk). This should be a good starting point to write your own processor logic. It is also possible to create template projects for other types of chains, please refer [CLI Reference](cli-reference#sentio-create). 

> ℹ️
>
> You can directly **modify the code (**`src/processor.ts`**)** to fit your use case as well.

Sentio has a list of builtin ABIs. We also support custom ABIs for your own project. See [decoding-from-custom-abis](decoding-from-custom-abis "mention") for more details. 

For more information on how to write a processor you can refer to [processor-basic](processor-basic "mention")

## Step 5: Upload Processor

You can build and upload the processor project by using the following command

```bash
yarn sentio upload
```

You will see a link to [data-source](data-source "mention") printed and you can open it in a browser to see the upload status.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/main/.gitbook/assets/image (4) (3) (1).png" alt="" />
  <figcaption></figcaption>
</figure>

## End: Verify Metrics

The command line should tell you that the processor has been uploaded correctly and give you a link to check the status of the processor, such as what chains this processor is running, how many blocks it has processed, the version, etc.

You can go to the metrics page to check the metrics submitted to the project. Checkout [metrics](metrics "mention") for more details.