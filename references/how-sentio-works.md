# ✅ How Sentio Works

Sentio roughly works as the following

* User A writes the processor code and upload through sentio CLI.
* The processor code is **triggered on user-defined conditions** and executed on **** Sentio internal infrastructures in **realtime (automatically adjusted with chain reorg)**.
* Users can specify **block range** to run. If not provided, Sentio backfills all the historical data (from contract creation time) and follows the blockchain in real time.
* The processor code emits **Counter** or **Gauge** that shows up automatically on Sentio metrics page.
* User A can build dashboard and alert on top of metrics collected.
