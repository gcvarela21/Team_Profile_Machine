const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, officeNumber, addTeamMember, role) {
        super(name, id, email);
        if (officeNumber) this.officeNumber = officeNumber;
        if (addTeamMember) this.addTeamMember = addTeamMember;
        if (role) this.role = role;
        
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return this.role;
    }

};

module.exports = Manager;