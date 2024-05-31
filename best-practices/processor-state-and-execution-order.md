---
title: 🔍 Processor State and Execution Order
categorySlug: best-practices
hidden: false
---

## Execution Order

Processor is executing (semi-)chronologically: It might not have consistent ordering among all the different [handlers-and-filters.md](../developer-guides/sdk-guide/handlers-and-filters.md "mention"). So please DO NOT ASSUME any order when you write the logic inside the processor. For example, if you are using global variables, please **DO NOT assume** if ordering of access from different handlers.

## State&#x20;

**DO NOT** assume processor in-memory state is restart-safe. Thus, please **DO NOT rely** on global variables being persistent at all time.
