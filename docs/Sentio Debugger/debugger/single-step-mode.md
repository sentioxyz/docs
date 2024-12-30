---
title: Single-step mode
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
> To use single-step mode, you need:

* Turn on single-step mode
* (optionally) Use Debug Build -- Sentio will recompile the contract with different compiler parameters to achieve the best source mappings. See [#limitations](single-step-mode#limitations "mention")

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (4) (6) (1).png" alt="" />
  <figcaption>
    <p>Debugger options</p>
  </figcaption>
</figure>

## Use the debugger

The debugger has standard definitions of

* **Step-Over**: Move to the next line of execution.
* **Step-Into**: If there is a function, steps into the function.
* **Step-Out**: If we are in a function, steps out the function to the upper level.
* **Continue**: This is the standard break-point.
* **Restart**: Restart from the beginning.

## Inspect variables 

The debugger automatically shows the local variables within the call context, and all the contract variables.

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (1) (1) (1) (2).png" alt="" />
  <figcaption></figcaption>
</figure>

The debugger also supports adding **user defined watched variables (similar to a regular debugger)**

<figure>
  <img src="https://raw.githubusercontent.com/sentioxyz/docs/v1.0/assets/image (1) (1) (3).png" alt="" />
  <figcaption></figcaption>
</figure>

## Limitations

* contract compiled with viaIR option is not fully supported
* When debug with **release build**, since it's fully optimized, there might be source-mapping issues and unexpected execution orders. You may read more about [build-mode](build-mode "mention"), and consider switching to other build mode.