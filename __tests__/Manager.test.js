const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {

  describe("Constructors", () => {
    
    it("can pass office number through arguments", () => {
      const office = 77;
      const input = new Manager("redShirt", 15, "email@email.com", office);

      expect(input.office).toEqual(office);
    })
  })

  describe("Methods", () => {

    it("s getOffice() retrieves office", () => {
      const office = 56;
      const input = new Manager("redShirt", 15, "email@email.com", office);

      expect(input.getOfficeNumber()).toEqual(office);
    })

    it("s getRole() retrieves 'Manager'", () => {
      const role = "Manager";
      const input = new Manager("redShirt", 15, "email@email.com", 77);

      expect(input.getRole()).toEqual(role);
    })
  })
})