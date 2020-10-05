const Intern = require('../lib/Intern.js');

test('creates a manager object', () => {
  const intern = new Intern('John', 'joh @tests.com', 234, 'Intern',"UofU");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.stringContaining('@'));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.role).toBe('Intern');
  expect(intern.school).toEqual(expect.any(String))
});

