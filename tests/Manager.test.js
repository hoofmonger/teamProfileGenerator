const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");



test("that manager can have a role", ()=> {
    const managerRole = new Manager("", 1, "email@email.com",  "Manager", 101,"Manager")
    console.log(managerRole);
    expect(managerRole.managerRole).toBe("Manager")
   
})

test("that managers can have an office number", ()=> {
    const officeNumber = new Manager("", 1, "email@email.com", "Manager", 101)
    expect(officeNumber.officeNumber).toBe(101)
})

