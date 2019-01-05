test('check mock', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false))

  myMockFn((err, val) => console.log(val))
  myMockFn((err, val) => console.log(val))
})

function noname(cb) {
  cb(null, true)
}
noname((err, val) => console.log(val))

