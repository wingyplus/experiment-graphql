const InventoryInMemoryData = {
  O141155: 20
};

module.exports = {
  stockAvailable(pid) {
    return InventoryInMemoryData[pid];
  }
};
