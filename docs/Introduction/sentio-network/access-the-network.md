---
title: Access the Network
deprecated: false
hidden: false
metadata:
  robots: index
---
# Access through Sentio Platform

The easiest way to use Sentio Network. You can create a Sentio project with Sentio Network as it's environment, which makes your processor or subgraph run on Sentio Compute Network and store the data on Sentio Data Network.

<Image align="center" alt="Host Environment in Project Setting Form" width="80% " src="https://files.readme.io/3ea0a7aa4300f1f66f7a7b752d13551a3e089248fa5d891c40dbc18088d27bb3-image.png" />

**Note**: The host environment can only be configured at project creation and **cannot be modified afterward**.

# Access Directly

You can access the Sentio Network without using Sentio Platform, which give you more control but also loose some of the benefits like version control, UI, etc.

TODO (lw) : how to create key pair, how to upload processor directly (maybe need yl?)

# Access Data Network via ClickHouse CLI

For direct, decentralized access to the Sentio Data Network, you can deploy the `clickhouse-proxy` in **sidecar mode** on your local machine. In this mode, the proxy intercepts your local ClickHouse queries, automatically signs them with your private key (using JWS authentication), and securely routes them to the decentralized network.

### 1. Build or Download clickhouse-proxy

Clone the `clickhouse-proxy` repository and build the binary:

```bash
git clone git@github.com:sentioxyz/clickhouse-proxy.git
cd clickhouse-proxy
bazel build //cmd/proxy:clickhouse-proxy
cp bazel-bin/cmd/proxy/clickhouse-proxy_/clickhouse-proxy .
```

### 2. Configure Sidecar Mode

Create a `config.json` file to enable sidecar mode and configure your credentials. This configuration allows you to interact with the Sentio Data Network using your own identity.

```json
{
  "sidecar_mode": true,
  "listen": ":9001",
  "sidecar_upstream": "DATA_NETWORK_GATEWAY_ADDRESS:9000",
  "sidecar_private_key_hex": "0xYOUR_ETHEREUM_PRIVATE_KEY"
}
```

*   **`sidecar_mode`**: Must be set to `true` to enable the local sidecar functionality.
*   **`sidecar_upstream`**: The remote gateway address of the Sentio Data Network.
*   **`sidecar_private_key_hex`**: Your Ethereum private key used for query signing and authentication.
*   **`listen`**: The local port where the proxy will listen for incoming `clickhouse-client` connections.

### 3. Start the Proxy

Run the proxy with your configuration:

```bash
./clickhouse-proxy -config config.json
```

### 4. Access via clickhouse-client

With the proxy running locally, you can use standard ClickHouse tools to query the decentralized data network. Simply connect to the local proxy address (e.g., `localhost:9001`):

```bash
clickhouse-client --host localhost --port 9001
```

All queries sent through this connection will be automatically authenticated and routed to the appropriate nodes in the Sentio Data Network.

