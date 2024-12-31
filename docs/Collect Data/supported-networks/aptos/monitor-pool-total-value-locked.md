---
title: Monitor Pool Total Value Locked
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
Say you have a swap, and you want to monitor its Total Value Locked. You can do it by periodically access account resources. For example, you can do the following:

```typescript
AptosAccountProcessor.bind({address: "0x5a97986a9d031c4567e15b797be516910cfcb4156312482efc6a19c0a30c948"})
    .onTimeInterval(async (resources, ctx) =>
        syncPools(resources, ctx), 60, 24 * 60)
```

The program will fetch account resources for the given address and **trigger** `syncPools`

* Every **24\* 60** minutes when backfill of historical data.
* Every **60** minutes when processing the real-time data.

In `syncPools`, you could fetch the pools and compute the TVL

```typescript
async function syncPools(resources: MoveResource[], ctx: AptosResourceContext) {

    let pools: TypedMoveResource<liquidity_pool.LiquidityPool<any, any, any>>[]
    pools = defaultMoveCoder().filterAndDecodeResources<liquidity_pool.LiquidityPool<any, any, any>>("0x190d44266241744264b964a37b8f09863167a12d3e70cda39376cfb4e3561e12::liquidity_pool::LiquidityPool", resources)
    // ....
}
```

> ✅
>
> See this [file](https://github.com/sentioxyz/sentio-processors/blob/main/common/src/aptos/aptos-dex.ts#L67) for more context.
