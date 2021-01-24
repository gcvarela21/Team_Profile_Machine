const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school, addTeamMember, role) {
        super(name, id, email);
        if (school) this.school = school;
        if (addTeamMember) this.addTeamMember = addTeamMember;
        if (role) this.role = role;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;