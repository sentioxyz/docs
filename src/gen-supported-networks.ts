import { EthChainId, EthChainInfo } from "@sentio/chain";
import * as fs from "node:fs";

const whitelistTestnet = new Set([EthChainId.TAC_TESTNET])

let content = fs.readFileSync('./src/supported-networks-header.md.template', 'utf8');
const mainnetInfos = Object.values(EthChainInfo).sort((a, b) => a.name.localeCompare(b.name)).filter((info) => !info.mainnetChainId || whitelistTestnet.has(info.chainId) );

const testChainMap = new Map<EthChainId, EthChainInfo[]>()
for (const network of Object.values(EthChainInfo)) {
  if (!network.mainnetChainId) {
    continue
  }

  let testChains = testChainMap.get(network.mainnetChainId)
  if (!testChains) {
    testChains = []
    testChainMap.set(network.mainnetChainId, testChains)
  }
  testChains.push(network)
}

const debuggerChains = new Map(Object.entries({
  [EthChainId.ETHEREUM]: true,
  [EthChainId.POLYGON]: true,
  [EthChainId.BINANCE]: true,
  [EthChainId.ARBITRUM]: true,
  [EthChainId.AVALANCHE]: true,
  [EthChainId.LINEA]: true,
  [EthChainId.SCROLL]: true,
  [EthChainId.BLAST]: true,
  [EthChainId.BASE]: true,
  [EthChainId.XLAYER_MAINNET]: true,
  [EthChainId.ASTAR]: true,
  [EthChainId.MOONBEAM]: true,
}))

const traceChain = new Map(Object.entries({
  [EthChainId.ETHEREUM]: true,
  [EthChainId.ASTAR]: true,
  [EthChainId.LINEA]: true,
  [EthChainId.MOONBEAM]: true,
  [EthChainId.POLYGON]: true,
}))

let supportedEvm = ""
for (const network of mainnetInfos) {
  supportedEvm += `| ${network.name} | \`${network.chainId}\` | \`${network.slug}\`  | ✓ | ✓ | ${traceChain.has(network.chainId) ? "✓ " : ""} | ${debuggerChains.has(network.chainId) ? "✓ " : ""}  | Real-time |\n`
}

content = content.replace("${supported-evm}", supportedEvm)

const template = fs.readFileSync('./src/evm-chain-template.md.template', 'utf8');

let chainContents = ""
for (const network of mainnetInfos) {
  let chainContent = template.replaceAll("${name}", network.name.replace(/ [^ ]+net$/, "")).replace(" Testnet", "").replaceAll("${chainId}", network.chainId) + '\n';
  let notes = ""
  if (whitelistTestnet.has(network.chainId)) {
    notes = "Currently support is for testnet only."
  }
  chainContent = chainContent.replace("${notes}", notes)
  chainContent = chainContent.replace("${slug}", network.slug)

  const testChains = testChainMap.get(network.chainId)


  if (testChains) {
    let contentPrefix = testChains.length == 1 ? "Testnet is available" : "Testnets are available"

    let contentSuffix = ""
    if (traceChain.has(network.chainId) || debuggerChains.has(network.chainId)) {
      contentSuffix += " with limited capabilities"
    }

    chainContent += `>️ ${contentPrefix} at chain ID: ${testChains.map((chain) => chain.chainId).join(", ")}, slug ${testChains.map((chain) => chain.slug).join(", ")} ${contentSuffix}.\n`
  }

  chainContents += chainContent
}

content = content.replace("${chain-content}", chainContents)

fs.writeFileSync('docs/Documentation/supported-networks.md', content)