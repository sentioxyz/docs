---
title: 🔍 Updating processors
categorySlug: best-practices
hidden: false
---

It is quite common for users to update your processor code. To update it, simply rerun the upload command.

```bash
yarn sentio upload
```

Our system will re-run all the historical data and update your metrics.

This means that it will erase the historical data, and your usage will be interrupted. Our paid users can use [#version-control-only-available-for-paid-users](../references/concepts/data-source.md#version-control-only-available-for-paid-users "mention")to avoid downtime.
