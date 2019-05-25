const VendingMachine = require("../src/vending-machine");
const inv = require("../vendingMachinData.json");
const coins = require("../coins.json");

describe("VendingMachine", () => {
  let vendingMachine;

  beforeEach(() => {
    vendingMachine = {};
    vendingMachine.subject = new VendingMachine(inv, coins);
  });

  describe("queryInventory", () => {
    describe("when asked for inventory", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.showInventory();
      });
      it("should give the inventory available", () => {
        // expect(test.result.averageAge).toEqual(test.demographics.averageAge);
        expect(vendingMachine.result).toEqual(inv.inventory);
      });
    });
  });
  describe("queryMoney", () => {
    describe("when asked for amount of money in the vending machine", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.queryMoney();
      });
      it("should give the amount of money", () => {
        // expect(test.result.averageAge).toEqual(test.demographics.averageAge);
        expect(vendingMachine.result).toEqual(vendingMachine.subject.quantity);
      });
    });
  });
  describe("Restock single coin", () => {
    describe("Restock singular coin, with valid input", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.restockSingularCoin({
          coin: "loonie",
          quantity: 11
        });
      });
      it("Should increment the quantity of specified coin, by specified amount", () => {
        expect(vendingMachine.result).toEqual(21);
      });
    });
    describe("restock single item", () => {
      describe("when vending machine inventory is empty", () => {
        beforeEach(() => {
          vendingMachine.result = vendingMachine.subject.restockSingleItem({
            item: "coke",
            quantity: 10
          });
        });
        it("should increase coin by given amount", () => {
          expect(vendingMachine.result).toEqual(20);
        });
      });
    });
  });
});
