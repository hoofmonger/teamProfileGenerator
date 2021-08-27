const Employee = require("../lib/Employee");
test("that the employee can have a name", ()=>{
    const employeeName = new Employee("", 1, "email@email.com")
    expect(employeeName.name).toBe("")
})
test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 1, "email@email.com")
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
test("that the employee can have a role", ()=>{
    const employeeRole = new Employee("", 1, "email@email.com", getRole())
    expect(employeeRole.getRole()).toBe["Manager", "Engineer", "Intern"]
})