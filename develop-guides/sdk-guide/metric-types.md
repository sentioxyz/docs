# Metric Types

Currently, we support users to submit two types of metric data

* Counter: represents the cumulative value at a given time, each data point reported is a delta value to the last value. Usually&#x20;
* Gauge: represents a sampled value at a given time, each data point reported is the current value.  Usually used to record e.g. balance or supply in block handler.
