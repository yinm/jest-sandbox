test('mock implementation', () => {
  const myMockFn = jest.fn(cb => cb(null, true))

  myMockFn((err, val) => console.log(val))
  myMockFn((err, val) => console.log(val))
})

function noname(cb) {
  cb(null, true)
}
noname((err, val) => console.log(val))

const noname2 = cb => cb(null, true)
noname2((err, val) => console.log(val))
