const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {

  describe("Constructors", () => {
    
    it("can pass school through arguments", () => {
      const school = "Starfleet Academy";
      const input = new Intern("redShirt", 15, "email@email.com", school);

      expect(input.school).toEqual(school);
    })
  })

  describe("Methods", () => {

    it("s getSchool() retrieves school", () => {
      const school = "Jedi Temple";
      const input = new Intern("redShirt", 15, "email@email.com", school);

      expect(input.getSchool()).toEqual(school);
    })

    it("s getRole() retrieves 'Intern'", () => {
      const role = "Intern";
      const input = new Intern("redShirt", 15, "email@email.com", "Tough Luck U");

      expect(input.getRole()).toEqual(role);
    })
  })
})