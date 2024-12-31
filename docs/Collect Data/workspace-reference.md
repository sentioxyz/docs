---
title: 📦 Web IDE
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
# Sentio Code Workspace - User Guide

## Introduction

The **Sentio Code Workspace** is an online coding environment developed with the **Coder** platform, designed to facilitate the efficient development of **Sentio Processors**. Accessible directly through the Sentio App, the workspace provides developers with a streamlined environment to create and manage processor source code.

### Access Path

To access Sentio Code Workspace, navigate through:
**Sentio App** → **DataSource** → **Processor** → **Source Code**

### Requirements

* **Account Plan**: Users must be on a **Pro** or **Enterprise** plan.
* **Usage Limitations**: There are currently no restrictions on usage frequency or the number of simultaneously active workspaces.

***

## Usage Instructions

### Step 1: Create a New Workspace

1. Click the **Create Workspace** button.  
2. The system will initiate a new workspace, and the workspace status on the left will display **Starting**.  
3. After a few moments, the status will update to **Running** (see Screenshot below).
   <figure>
     <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/Sentio_Workspace_Running.png" alt="" />
     <figcaption><p>Running Workspace</p></figcaption>
   </figure>

### Step 2: Open the Workspace

1. While the workspace status shows **Running**, click the **Open Workspace** button.\
   If you encounter the login screen at this point, please use OpenID Connect to log in, utilizing the same OIDC service provider as the Sentio App.
2. This will open an online VS Code IDE where the processor source code will automatically download into the `processors` directory.

### Step 3: Install Dependencies and Build

1. Open the terminal in VS Code.
2. Enter the following commands to install dependencies and build the processor:
   ```bash
   yarn install && yarn build
   ```
3. The Sentio SDK will compile your code, preparing it for deployment.

### Step 4: Upload the Processor

1. After development, run the following command to upload the updated processor to the server and generate a new version:
   ```bash
   yarn upload --host https://app.sentio.xyz
   ```

***

## Additional Steps and Notes

### Workspace Lifespan and Restarting

1. Each workspace has a default lifespan of **24 hours**. Once the time limit is reached, the workspace will automatically stop, with the **Workspace Status** changing to **Stopped** (see Screenshot below).
   <figure>
     <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/Sentio_Workspace_Stopped.png" alt="" />
     <figcaption><p>Stopped Workspace</p></figcaption>
   </figure>
2. To restart, click **Restart** on the right side of the workspace panel.
3. Once the status changes back to **Running**, you can resume work.

> **Note**: When a workspace restarts, it will re-download the source code, overwriting any existing files in the directory. Do not store any files in the workspace that require long-term persistence, as they may be lost.

***

## FAQ

### 1. Can a workspace be shared?

Each workspace is visible **only to you**. Different projects and processor versions are isolated in separate workspaces, ensuring privacy and organization.

### 2. What should I do if I encounter the error: "/bin/sh: 1: sentio: not found" during Install Dependencies and Build?

This error usually indicates an outdated processor template that does not include the **Sentio SDK** and **Sentio CLI** in its dependencies. To resolve this, add the following to your `package.json` file and re-run the `yarn build` command:

```json
"dependencies": {
  "@sentio/sdk": "^2.44.2"
},
"devDependencies": {
  "@sentio/cli": "^2.21.5",
  "typescript": "^5.5.2"
}
```

***

This guide provides the essential steps for accessing and working within Sentio Code Workspace. Happy coding!