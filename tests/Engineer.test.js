const { test, expect } = require("@jest/globals")
const exp = require("constants")
const Engineer = require("../lib/Engineer")





test("that engineers can have a role", ()=>{
    const engineerRole = new Engineer("", 2, "email@email.com", "Engineer", "Engineer", "github")
    expect(engineerRole.engineerRole).toBe("Engineer")
    console.log(engineerRole)
})

test("that engineers can have a github", ()=>{
    const engineerGithub = new Engineer("", 2, "email@email.com", "Engineer", "Engineer", "github")
    expect(engineerGithub.github).toBe("github")
})

