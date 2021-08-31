const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, employeeRole, engineerRole, github){
        super(name, id, email, employeeRole)
        this.github = github
        this.engineerRole = engineerRole
    }

    
    getGithub(){
        return this.github
    }

    getRole(){
        return this.engineerRole
    }
}

module.exports=Engineer