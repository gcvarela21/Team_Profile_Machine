// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github, addTeamMember, role) {
        super(name, id, email);
        if (github) this.github = github;
        if (addTeamMember) this.addTeamMember = addTeamMember;
        if (role) this.role = role;
        
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;