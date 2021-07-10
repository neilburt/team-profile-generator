const Employee = require("../lib/Employee");

describe("Employee class", () => {

  describe("Instantiation", () => {

    it("can instantiate new Employee object", () => {
      const input = new Employee();

      expect(typeof(input)).toBe("object");
    })
  })

  describe("Constructors", () => {
    
    it("can pass name through arguments", () => {
      const name = "Sonya";
      const input = new Employee(name);

      expect(input.name).toEqual(name);
    })

    it("can pass id through arguments", () => {
      const id = 56;
      const input = new Employee("Reginald", id);

      expect(input.id).toEqual(id);
    })

    it("can pass email through arguments", () => {
      const email = "email@email.com";
      const input = new Employee("Geordi", 6, email);

      expect(input.email).toEqual(email);
    })
  })

  describe("Methods", () => {

    it("s getName() retrieves name", () => {
      const name = "Wesley";
      const input = new Employee(name);

      expect(input.getName()).toEqual(name);
    })

    it("s getId() retrieves id", () => {
      const id = 56;
      const input = new Employee("Miles", id);

      expect(input.getId()).toEqual(id);
    })

    it("s getEmail() retrieves email", () => {
      const email = "email@email.com";
      const input = new Employee("Data", 2, email);

      expect(input.getEmail()).toEqual(email);
    })

    it("s getRole() retrieves role", () => {
      const role = "Employee";
      const proto = new Employee("Jenna", 25, "email@email.com");

      expect(proto.getRole()).toEqual(role);
    })
  })
})