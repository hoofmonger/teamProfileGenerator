const Intern = require("../lib/Intern")

test("that the employee can have a name", ()=>{
    const employeeName = new Employee("", 1, "email@email.com")
    expect(employeeName.name).toBe("")
})

test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 3, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 5, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an ID", ()=>{
    const employeeId = new Employee("", 4, "email@email.com")
    expect(employeeId.id).toBe[1, 2, 3, 4, 5]
})
test("that the employee can have an email", ()=>{
    const employeeEmail = new Employee("", 1, "email@email.com")
    expect(employeeEmail.email).toBe("email@email.com")
})

test("that Interns can have a role", ()=> {
    const InternRole = new Intern("", 4, "email@email.com", "Intern")
    expect(InternRole.InternRole).toBe("Intern")
})

test("that Interns can have an office number", ()=> {
    const schoolName = new Intern("", 4, "email@email.com", "school")
    expect(schoolName.school).toBe("school")
})

test("that the employee can have a role", ()=>{
    const employeeRole = new Employee("", 1, "email@email.com", "Intern")
    expect(employeeRole.employeeRole).toBe["Manager", "Engineer", "Intern"]
})