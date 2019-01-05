test('check mock', () => {
  const myMockFn = jest.fn(cb => cb(null, true))

  myMockFn((err, val) => console.log(val))

  myMockFn((err, val) => console.log(val))
})
