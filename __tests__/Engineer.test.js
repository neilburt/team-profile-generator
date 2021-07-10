const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

  describe("Constructors", () => {
    
    it("can pass GitHub through arguments", () => {
      const github = "sonya";
      const input = new Engineer("redShirt", 15, "email@email.com", github);

      expect(input.github).toEqual(github);
    })
  })

  describe("Methods", () => {

    it("s getGitHub() retrieves GitHub", () => {
      const github = 56;
      const input = new Engineer("redShirt", 15, "email@email.com", github);

      expect(input.getGitHub()).toEqual(github);
    })

    it("s getRole() retrieves 'Engineer'", () => {
      const role = "Engineer";
      const input = new Engineer("redShirt", 15, "email@email.com", "deadman");

      expect(input.getRole()).toEqual(role);
    })
  })
})