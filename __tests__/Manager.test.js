const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Dave', 'dave@tests.com', 123, 'Manager', 303);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.stringContaining('@'));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.role).toBe('Manager');
  expect(manager.office).toEqual(expect.any(Number))
});

