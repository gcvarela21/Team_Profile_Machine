class Employee {
    constructor(name, id, email) {
        if (name) this.name = name;
        if (id) this.id = id;
        if (email) this.email = email;
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }   
}

module.exports = Employee;
