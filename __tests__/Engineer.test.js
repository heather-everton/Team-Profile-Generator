const Engineer = require('../lib/Engineer.js');

test('creates a manager object', () => {
  const engineer = new Engineer('Brian Garstka', 'brian@tests.com', 345, 'Engineer', 'github.com/brian-garstka');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.stringContaining('@'));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.role).toBe('Engineer');
  expect(engineer.github).toEqual(expect.stringContaining('github'))
});

