---
title: ⚙️ Simulation
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
The Sentio simulator allows you to run simulations quickly and inspect the simulation result with great detail.

You could quickly start the simulation as follows or calling [API](https://docs.sentio.xyz/reference/debug-and-simulation).

## From existed transaction

The simplest way to start a simulation is to click the simulator button as shown below, on a transaction that is been browsed.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (4).png" alt="" width="563" />
  <figcaption></figcaption>
</figure>

In this case, it will copy all the parameters from the existing transaction and you could make adjustments on top of it. Like block number, block index, gas fee, block header, state, etc.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (1) (1) (1) (1) (1) (1) (1).png" alt="" width="375" />
  <figcaption></figcaption>
</figure>

Click the simulate transaction button will save this run to the simulation history of your project and show you the result, just like what you see from the normal debugger UI.

## Direct Build

You can also click the simulator button on the left navigation bar and go to the simulator page which shows all the history simulations. Click the simulation button on the right corner will pop a similar UI but without prepopulated transaction data.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (2) (1) (1) (1) (1).png" alt="" />
  <figcaption></figcaption>
</figure>

## Override Contract

Use the compilations tab to upload a local contract compilation folder. See [upload-compilation](upload-compilation "mention") for more details.

<img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (3) (1) (1).png" alt="" />

When doing the simulation, choose the contract override.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/.gitbook/assets/image (33).png" alt="" />
  <figcaption></figcaption>
</figure>