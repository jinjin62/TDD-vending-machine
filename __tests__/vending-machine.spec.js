const VendingMachine = require("../src/vending-machine");
const data = require("../vendingMachinData.json");

describe("VendingMachine", () => {
  let vendingMachine;

  beforeEach(() => {
    vendingMachine = {};

    vendingMachine.data = {
      inventory: {
        coke: {
          id: 0,
          price: 1,
          quantity: 10
        },
        fanta: {
          id: 1,
          price: 2,
          quantity: 10
        },
        sprite: {
          id: 2,
          price: 3,
          quantity: 10
        },
        pepsi: {
          id: 3,
          price: 4,
          quantity: 10
        },
        tea: {
          id: 4,
          price: 5,
          quantity: 10
        }
      }
    };
  });

  describe("queryInventory", () => {
    beforeEach(() => {
      vendingMachine.subject = new VendingMachine(data);
      // vendingMachine.inventoryData = vendingMachine.subject.inventory;
    });
    describe("when asked for inventory", () => {
      beforeEach(() => {
        vendingMachine.result = vendingMachine.subject.showInventory();
      });
      it("should give the inventory available", () => {
        // expect(test.result.averageAge).toEqual(test.demographics.averageAge);
        expect(vendingMachine.result).toEqual({
          coke: {
            id: 0,
            price: 1,
            quantity: 10
          },
          fanta: {
            id: 1,
            price: 2,
            quantity: 10
          },
          sprite: {
            id: 2,
            price: 3,
            quantity: 10
          },
          pepsi: {
            id: 3,
            price: 4,
            quantity: 10
          },
          tea: {
            id: 4,
            price: 5,
            quantity: 10
          }
        });
      });
    });
  });
});
