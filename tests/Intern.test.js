const Intern = require("../lib/Intern")





test("that Interns can have a role", ()=> {
    const InternRole = new Intern("", 4, "email@email.com", "Intern", "Intern", "school")
    console.log(InternRole)
    expect(InternRole.internRole).toBe("Intern")
})

test("that Interns can have a school", ()=> {
    const schoolName = new Intern("", 4, "email@email.com", "Intern", "Intern", "school")
    expect(schoolName.school).toBe("school")
})