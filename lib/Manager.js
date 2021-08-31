const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, employeeRole, officeNumber, managerRole) {

        super(name, id, email, employeeRole)
        this.officeNumber = officeNumber
        this.managerRole = managerRole
    }
    getRole() {
        return this.managerRole
    }
    getOfficeNumber() {
        return this.officeNumber
    }

}

module.exports = Manager