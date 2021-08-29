const { test, expect } = require("@jest/globals")
const exp = require("constants")
const Engineer = require("../lib/Engineer")

test("that the employee can have a name", ()=>{
    const employeeName = new Employee("", 1, "email@email.com")
    expect(employeeName.name).toBe("")
})

test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 4, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 2, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 3, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an email", ()=>{
    const employeeEmail = new Employee("", 1, "email@email.com")
    expect(employeeEmail.email).toBe("email@email.com")
})

test("that engineers can have a role", ()=>{
    const engineerRole = new Engineer("", 2, "email@email.com", "Engineer")
    expect(engineerRole.engineerRole).toBe("Engineer")
})

test("that engineers can have a github", ()=>{
    const engineerGithub = new Engineer("", 2, "email@email.com", "github")
    expect(engineerGithub.github).toBe("github")
})

test("that the employee can have a role", ()=>{
    const employeeRole = new Employee("", 1, "email@email.com", "Engineer")
    expect(employeeRole.employeeRole).toBe["Manager", "Engineer", "Intern"]
})