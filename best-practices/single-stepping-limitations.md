# 🔍 Single Stepping Limitations

* contract compiled with viaIR option is not fully supported
* When debug with **release build**, since it's fully optimized, there might be source-mapping issues and unexpected execution orders.
* When debug **debug build**, gas usage is ignored, this may cause different code execution. e.g. if the original transaction is out of gas, using debug build will make the transaction fully executed.

