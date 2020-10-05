const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email);
        this.role = 'Manager';
        this.office = office;
    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager

