class VendingMachine {
  constructor(data) {
    this.data = data;
  }

  showInventory() {
    return this.data.inventory;
  }
}

module.exports = VendingMachine;
