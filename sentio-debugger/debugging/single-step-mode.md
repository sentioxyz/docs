# Single-step mode

{% hint style="info" %}
To use single-step mode, you need:

* Turn on single-step mode
* **Strongly recommended**: Turn on optimizer -- Sentio will recompile the contract with different compiler parameters to achieve the best source mappings.
{% endhint %}

<figure><img src="../../.gitbook/assets/image (30).png" alt=""><figcaption><p>Debugger options</p></figcaption></figure>

## Use the debugger

The debugger has standard definitions of

* **Step-Over**: Move to the next line of execution.
* **Step-Into**: If there is a function, steps into the function.
* **Step-Out**: If we are in a function, steps out the function to the upper level.
* **Continue**: This is the standard break-point.
* **Restart**: Restart from the beginning.

## Inspect variables&#x20;

The debugger automatically shows the local variables within the call context, and all the contract variables.

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption><p>Variables</p></figcaption></figure>

The debugger also supports adding **user defined watched variables (similar to a regular debugger)**

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

