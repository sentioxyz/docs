---
title: Code Index API
categorySlug: access-sentio-via-apis
hidden: false
---

Code intelligence experience like jumping to the definition and finding reference experience is powered by index API. Two parameters to be provided, numeric chain ID (e.g. polygon 137 as in the example), and the transaction ID.

```
curl --header 'api-key: <API_KEY>' \
     --header 'Content-Type: application/json' \
     --location 'https://app.sentio.xyz/api/v1/solidity/index/137/0x55caabb0d2b704fd0ef8192a7e35d8837e678207'
```

The API returns a SCIP `Index`, the details schema is documented at [https://github.com/sourcegraph/scip/blob/main/scip.proto](https://github.com/sourcegraph/scip/blob/main/scip.proto). You can read more about SCIP [here](https://docs.sourcegraph.com/code\_navigation/explanations/writing\_an\_indexer#understanding-the-scip-protobuf-schema).

We also provided an NPM package [@sentio/scip](https://www.npmjs.com/package/@sentio/scip) that provides utils to help process the results.

