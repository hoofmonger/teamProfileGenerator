const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, employeeRole, internRole, school){
        super(name, id, email, employeeRole)
        this.school = school
        this.internRole = internRole
    }

    
    getSchool(){
        return this.school
    }

    getRole(){
        return this.internRole
    }
}

module.exports=Intern