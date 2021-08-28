const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("that managers can have a role of manager", ()=> {
    const managerRole = new Manager("", 1, "email@email.com", "Manager")
    expect(managerRole.employeeRole).toBe("Manager")
})

test("that managers can have an office number", ()=> {
    const officeNumber = new Manager("", 1, "email@email.com", 101)
    expect(officeNumber.officeNumber).toBe(101)
})