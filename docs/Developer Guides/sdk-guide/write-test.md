---
title: Write Test
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
When you create a processor through the command line, it will automatically generate a basic jest test for you.

```typescript
  test('has valid config', async () => {
    const config = await service.getConfig({})
    expect(config.contractConfigs.length > 0).toBeTruthy()
  })
```

It simply starts the processor and checks if there is any basic error that failed the processor declaration.&#x20;

To check the logic of your handler function, we can use `testLog` , `testBlock`, `testTrace` , to send events to your processor. In the code we generated for your contract, there are also some test utils that help you generate mocked data. Below is a test example that mocks a transfer event, sends it to the processor, and verifies the result :

```typescript
import { TestProcessorServer, firstCounterValue } from '@sentio/sdk/testing'
import { mockTransferLog } from '@sentio/sdk/eth/builtin/erc20'

describe('Test Processor', () => {
  const service = new TestProcessorServer(() => import(processor.js'))

  beforeAll(async () => {
    await service.start()
  })

  test('check transfer event handling', async () => {
    const resp = await service.testLog(
      mockTransferLog('0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9', {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xb329e39ebefd16f40d38f07643652ce17ca5bac1',
        value: 10n ** 18n * 10n,
      })
    )

    const tokenCounter = firstCounterValue(resp.result, 'token')
    expect(tokenCounter).toEqual(10n)
  })
})

```