const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, internRole, school){
        super(name, id, email)
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