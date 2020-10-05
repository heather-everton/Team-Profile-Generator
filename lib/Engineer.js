const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, role, other) {
        super(name, id, email);
        this.role = 'Engineer';
        this.other = other
    }
    getGithub() {
        return this.github;
    }

}

module.exports = Engineer

