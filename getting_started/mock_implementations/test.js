test('mock implementation', () => {
  jest.mock('./foo')
  const foo = require('./foo')

  foo.mockImplementation(() => 42)
  console.log(foo())
})
