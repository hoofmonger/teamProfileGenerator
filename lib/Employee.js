class Employee{
    constructor(name, id, email, employeeRole){
        this.name = name;
        this.id = id
        this.email = email
        this.employeeRole = employeeRole
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.employeeRole
    }

};

module.exports=Employee