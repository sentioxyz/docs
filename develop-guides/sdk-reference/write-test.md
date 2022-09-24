# Write Test

When you create a processor through the command line, it will automatically generate a basic jest test for you.

```
  test('has valid config', async () => {
    const config = await service.getConfig({})
    expect(config.contractConfigs.length > 0).toBeTruthy()
  })
```

It simply starts the processor, checks if there is any basic error that failed the processor declaration.&#x20;

To check the logic of your handler function, we can use `testLog` , `testBlock`, `testTrace` , to send events to your processor. In the code we generated for your contract, there are also some test utils that helps you generate mocked data. e.g. we want to mock a transfer event and send it to the processor and verify the result, we could do:

```
import { TestProcessorServer, firstCounterValue } from '@sentio/sdk/lib/test'
import { mockTransferLog } from '@sentio/sdk/lib/builtin/erc20/test-utils'
import { BigNumber } from 'ethers'

describe('Test Processor', () => {
  const service = new TestProcessorServer(() => require('./processor'))

  beforeAll(async () => {
    await service.start()
  })

  test('check transfer event handling', async () => {
    const resp = await service.testLog(
      mockTransferLog('0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9', {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xb329e39ebefd16f40d38f07643652ce17ca5bac1',
        value: BigNumber.from(10n ** 18n * 10n),
      })
    )

    const tokenCounter = firstCounterValue(resp.result, 'token')
    expect(tokenCounter).toEqual(10n)
  })
})

```

