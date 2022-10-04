# 💨 Metrics

Currently, we support users to submit two types of metric data

## Counter&#x20;

Counter represents the cumulative value at a given time, each data point reported is a delta value (**add or subtract**) to the last value. Usually used to record e.g the total number of tokens transferred.

## Gauge

Gauge represents a sampled value at a given time, each data point reported is the current value. Usually used to record e.g. balance or total Supply.
