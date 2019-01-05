test('mock implementation', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false))

  myMockFn((err, val) => console.log(val))
  myMockFn((err, val) => console.log(val))
})
