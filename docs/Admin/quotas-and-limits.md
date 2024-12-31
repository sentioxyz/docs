---
title: 🔒 Limits
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
## Number of Series

We limit the total number of [#series](metrics#series "mention") you can submit in one processor. Current the limit is set to **10,000.**

## Number of Projects

Free tier users can have at most **3 projects**.

## Number of Alerts

Free tier users can have at most **3 alerts**.

## How the usage of multi-version is computed?

If you enabled multi-version (say the 2 versions are *X* and *Y, X being the new version*), the backfill stage is always free. Once version *X* reaches the state of **Watching,** the Sentio units usage of both *X* and *Y* will be counted until you switch to the active version to *X.* (then the usage of *Y* will no longer be counted). Similarly, if you abandon version *X*, then the usage of *X* will no longer be counted.