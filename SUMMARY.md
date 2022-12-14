# Table of contents

* [👋 Welcome to Sentio](README.md)
* [🔗 Setup](setup.md)
* [🗄 Samples](samples.md)
* [💡 Quickstart](quickstart.md)

## How-to Guides (by examples)

* [➡ Submit metrics](how-to-guides-by-examples/submit-metrics/README.md)
  * [EVM chains](how-to-guides-by-examples/submit-metrics/evm-chains/README.md)
    * [Monitor wormhole WETH balance (via Events)](how-to-guides-by-examples/submit-metrics/evm-chains/monitor-wormhole-weth-balance-via-events.md)
    * [Monitor wormhole WETH balance (via view function)](how-to-guides-by-examples/submit-metrics/evm-chains/monitor-wormhole-weth-balance-via-view-function.md)
    * [Submitting metrics with your labels](how-to-guides-by-examples/submit-metrics/evm-chains/submitting-metrics-with-your-labels.md)
    * [Decoding from custom ABIs](how-to-guides-by-examples/submit-metrics/evm-chains/decoding-from-custom-abis.md)
    * [Handling factory contract](how-to-guides-by-examples/submit-metrics/evm-chains/handling-factory-contract.md)
  * [Solana](how-to-guides-by-examples/submit-metrics/solana/README.md)
    * [Decode Solana instructions](how-to-guides-by-examples/submit-metrics/solana/decode-solana-instructions.md)
    * [Monitor WETH balance on Solana (via Native program)](how-to-guides-by-examples/submit-metrics/solana/monitor-weth-balance-on-solana-via-native-program.md)
    * [Monitor anchor programs](how-to-guides-by-examples/submit-metrics/solana/monitor-anchor-programs.md)
  * [Aptos](how-to-guides-by-examples/submit-metrics/aptos/README.md)
    * [Generate all the types](how-to-guides-by-examples/submit-metrics/aptos/generate-all-the-types.md)
    * [Monitor event/function/transaction](how-to-guides-by-examples/submit-metrics/aptos/monitor-event-function-transaction.md)
* [➡ Compute unique users](how-to-guides-by-examples/compute-unique-users.md)
* [➡ Send events via webhook](how-to-guides-by-examples/send-events-via-webhook.md)
* [➡ View metrics](how-to-guides-by-examples/view-metrics.md)
* [➡ Build dashboards](how-to-guides-by-examples/build-dashboards.md)
* [➡ Create alerts](how-to-guides-by-examples/create-alerts.md)
* [➡ Share your project](how-to-guides-by-examples/share-your-project.md)

## Developer Guides

* [➡ CLI Reference](developer-guides/cli-reference.md)
* [➡ SDK Guide](developer-guides/sdk-guide/README.md)
  * [Processor Basic](developer-guides/sdk-guide/processor-basic.md)
  * [Metrics in processors](developer-guides/sdk-guide/metrics-in-processors.md)
  * [Handlers and Filters](developer-guides/sdk-guide/handlers-and-filters.md)
  * [Track (distinct) events](developer-guides/sdk-guide/track-distinct-events.md)
  * [Export via WebHook](developer-guides/sdk-guide/export-via-webhook.md)
  * [Dynamic Processor Creation](developer-guides/sdk-guide/dynamic-processor-creation.md)
  * [Handle Big Numbers](developer-guides/sdk-guide/handle-big-numbers.md)
  * [Price Feed](developer-guides/sdk-guide/price-feed.md)
  * [Write Test](developer-guides/sdk-guide/write-test.md)

## Access Sentio Via APIs

* [Aptos Composer](access-sentio-via-apis/aptos-composer.md)

## References

* [✅ How Sentio Works](references/how-sentio-works.md)
* [🖥 Concepts](references/concepts/README.md)
  * [📔 ABI](references/concepts/abi.md)
  * [⛓ Chain concepts](references/concepts/chain-concepts/README.md)
    * [EVM](references/concepts/chain-concepts/evm.md)
    * [Aptos](references/concepts/chain-concepts/aptos.md)
    * [Solana](references/concepts/chain-concepts/solana.md)
  * [⌨ Processor](references/concepts/processor.md)
  * [💨 Metrics](references/concepts/metrics.md)
  * [📐 Aggregation, Functions and Formulas](references/concepts/aggregation-functions-and-formulas.md)
  * [📊 Dashboard](references/concepts/dashboard.md)
  * [📶 Channel](references/concepts/channel.md)
  * [🪝 Webhook](references/concepts/webhook.md)
  * [⏰ Alert](references/concepts/alert.md)
* [▶ UI layout](references/ui-layout.md)
* [🔒 Quotas and Limits](references/quotas-and-limits.md)
* [💎 Supported Networks](references/supported-networks.md)
* [🤝 Permission and Sharing](references/permission-and-sharing.md)

## Best Practices

* [🔍 Multi-chain support](best-practices/multi-chain-support.md)
* [🔍 Avoid high cardinality](best-practices/avoid-high-cardinality.md)
* [🔍 Updating processors](best-practices/updating-processors.md)
* [🔍 Understanding errors](best-practices/understanding-errors.md)
