const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("that the manager can have a name", ()=>{
    const employeeName = new Employee("", 1, "email@email.com")
    expect(employeeName.name).toBe("")
})

test("that the manager can have an ID", ()=>{
    const employeeId = new Employee("", 1, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})

test("that the manager can have an email", ()=>{
    const employeeEmail = new Employee("", 1, "email@email.com")
    expect(employeeEmail.email).toBe("email@email.com")
})

test("that manager can have a role", ()=> {
    const managerRole = new Manager("", 1, "email@email.com", "Manager")
    expect(managerRole.managerRole).toBe("Manager")
})

test("that managers can have an office number", ()=> {
    const officeNumber = new Manager("", 1, "email@email.com", 101)
    expect(officeNumber.officeNumber).toBe(101)
})

test("that the employee can have a role", ()=>{
    const employeeRole = new Employee("", 1, "email@email.com", "Manager")
    expect(employeeRole.employeeRole).toBe["Manager", "Engineer", "Intern"]
})