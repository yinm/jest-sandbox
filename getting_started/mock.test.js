test('check mock', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis()
  }

  const otherObj = {
    myMethod: jest.fn(function() {
      return this
    })
  }
})
