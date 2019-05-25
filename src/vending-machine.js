class VendingMachine {
  constructor(inv, coins) {
    this.inv = inv;
    this.coins = coins;
  }

  showInventory() {
    return this.inv.quantity;
  }
  queryMoney() {
    return this.coins.quantity;
  }
  restockSingularCoin({ coin, quantity }) {
    if (typeof coin !== "string" || typeof quantity !== "number") {
      throw new Error();
    } else {
      return (this.coins[coin].quantity += quantity);
    }
  }
  restockSingleItem({ item, quantity }) {
    console.log("HELLO", { item, quantity });
    if (typeof coin !== "string" || typeof quantity !== "number") {
      throw new Error();
    } else {
      return (this.inv[item].quantity += quantity);
    }
  }
}
module.exports = VendingMachine;
