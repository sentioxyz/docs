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

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(4).png)

In this case, it will copy all the parameters from the existing transaction and you could make adjustments on top of it. Like block number, block index, gas fee, block header, state, etc.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(1)%20(1)%20(1)%20(1)%20(1)%20(1)%20(1).png)

Click the simulate transaction button will save this run to the simulation history of your project and show you the result, just like what you see from the normal debugger UI.

## Direct Build

You can also click the simulator button on the left navigation bar and go to the simulator page which shows all the history simulations. Click the simulation button on the right corner will pop a similar UI but without prepopulated transaction data.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(2)%20(1)%20(1)%20(1)%20(1).png)

## Override Contract

Use the compilations tab to upload a local contract compilation folder. See [upload-compilation](upload-compilation "mention") for more details.

<img src="https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image (3) (1) (1).png" alt="" />

When doing the simulation, choose the contract override.

![](https://media.githubusercontent.com/media/sentioxyz/docs/HEAD/assets/image%20(33).png)
