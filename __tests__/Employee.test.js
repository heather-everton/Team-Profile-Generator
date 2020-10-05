const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Heather Everton', 'heather@tests.com', 123, 'Employee');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe('Employee');
});

test('get employee name', ()=> {
    const employee = new Employee('Heather Everton', 'heather@tests.com', 123, 'Employee');
    expect(employee.getName()).toBe('Heather Everton');
});

test('get employee id', () => {
    const employee = new Employee('Heather Everton', 'heather@tests.com', 123, 'Employee');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', ()=> {
    const employee = new Employee('Heather Everton', 'heather@tests.com', 123, 'Employee');
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});