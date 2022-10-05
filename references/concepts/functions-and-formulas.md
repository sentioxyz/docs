# 📐 Functions and Formulas

#### Space aggregation <a href="#space-aggregation" id="space-aggregation"></a>

Define the space aggregation used to combine the values of the series of a metric. For example, you can use it to sum up the withdrawal amount of different pool addresses.

The possible options are:

* Average of reported values
* Max of reported values
* Min of reported values
* Sum of reported values
* Count of reported values

#### Functions <a href="#functions" id="functions"></a>

You can optionally add functions to your query using the function button. Not all functions are available for all metric types.

#### Formulas <a href="#functions" id="functions"></a>

You can combine two or more metrics by using a formula. For example, you can calculate the net mint amount of a smart contract by subtracting the burn amount from the mint amount. You do this by first adding two queries of the burn and mint metrics, and then adding a formula with the expression `b - a`.
