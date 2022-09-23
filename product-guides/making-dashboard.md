# 📊 Making Dashboard

### Graphing <a href="#graphing" id="graphing"></a>

Use the query editor to customize the graph displayed on the Metrics Explorer page.

You can specify the time frame in the top right corner of the page. The default is **Past 3 Months**.

Metrics that are not reported in the last 24 hours do not appear in the query editor. You can add these metrics to your graphs manually by entering the metric name or full query.

#### Scope <a href="#scope" id="scope"></a>

Define a filtering scope with the **from** text box by selecting or searching for tag values. For example, you can use the **from** text box to filter metric values from a specific address, contract or any other tags defined in the processor

#### Space aggregation <a href="#space-aggregation" id="space-aggregation"></a>

Define the [space aggregation](https://docs.datadoghq.com/metrics/introduction/#space-aggregation) used to combine the values of the series of a metric. For example, you can use it to sum up the withdrawal amount of different pool addresses.

The possible options are:

* Average of reported values (default)
* Max of reported values
* Min of reported values
* Sum of reported values
* Count of reported values

#### Functions <a href="#functions" id="functions"></a>

You can optionally add functions to your query using the function button. Not all functions are available for all metric types.

#### Export <a href="#export" id="export"></a>

Export your graph to a dashboard or notebook with the buttons at the top right. You can also use **Split Graph in Notebook** to view the data split into individual graphs by things like region, service, or environment.

##
