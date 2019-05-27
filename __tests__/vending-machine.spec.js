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
  });
  describe("restock single item", () => {
    describe("when vending machine inventory is empty", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.restockSingleItem({
          item: "a1",
          quantity: 10
        });
      });
      it("should increase coin by given amount", () => {
        expect(vendingMachine.result).toEqual(20);
      });
    });
  });
  describe("Dispense a single item", () => {
    describe("when money input is correct", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.restockSingleItem({
          item: "a1",
          quantity: 10
        });
      });
      it("should despense an item", () => {
        expect(vendingMachine.result).toEqual(30);
      });
    });
  });
  describe("Dispense change", () => {
    describe("Given either an invalid input, or the input (money) is not large enough to purchase desired item", () => {
      it("Should throw an error", () => {
        const result = () => vendingMachine.subject.dispenseChange(5, 2);
        expect(result).toThrow();
      });
    });
    describe("Given a valid input, where the money input is greater than the price of the item and the change is not a float", () => {
      it("should dispense the change", () => {
        const result = vendingMachine.subject.dispenseChange(5, 7);
        expect(result).toEqual({
          toonie: 1,
          loonie: 0,
          quarter: 0,
          dime: 0,
          nickel: 0
        });
      });
    });
  });
});
