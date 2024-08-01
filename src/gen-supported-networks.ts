import { EthChainId, EthChainInfo } from "@sentio/chain";
import * as fs from "node:fs";

let content = fs.readFileSync('supported-networks-header.md', 'utf8');
const infos= Object.values(EthChainInfo).sort((a, b) => a.name.localeCompare(b.name)).filter((info) => !info.name.includes("Testnet"));

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
for (const network of infos) {
  supportedEvm += `| ${network.name} | ✓ | ✓ | ${traceChain.has(network.chainId) ? "✓ " : ""} | ${debuggerChains.has(network.chainId) ? "✓ " : ""}  | Real-time |\n`
}

content = content.replace("${supported-evm}", supportedEvm)

const template = fs.readFileSync('evm-chain-template.md', 'utf8');

let chainContent = ""
for (const network of infos) {
  chainContent += template.replaceAll("${name}", network.name).replace(" Mainnet", "").replaceAll("${chainId}", network.chainId) + '\n';
}

content = content.replace("${chain-content}", chainContent)

fs.writeFileSync('../references/supported-networks.md', content)