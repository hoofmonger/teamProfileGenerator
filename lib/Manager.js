const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber, manangerRole){

        super(name, id, email)
        this.officeNumber = officeNumber
        this.managerRole = managerRole
    }
    getRole(){
        return this.managerRole
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    
}

module.exports=Manager