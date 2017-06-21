const InventoryService = require("./InventoryService");

class Product {
  constructor(pid, name) {
    this.pid = pid;
    this.name = name;
  }

  stockAvailable() {
    return InventoryService.stockAvailable(this.pid);
  }
}

// ProductInMemoryData reflect in memory storage
const ProductInMemoryData = {
  O141155: new Product("O141155", "Mamepoko")
};

// find product by given pid
module.exports = {
  find(pid) {
    return ProductInMemoryData[pid];
  }
};
