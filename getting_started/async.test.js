function fetchData() {
  return new Promise((resolve, reject) => {
    resolve('peanuts butter')
  })
}

test('the data is peanut butter', () => {
  expect.assertions(1)
  return expect(fetchData()).resolves.toBe('peanuts butter')
})

function fetchDataWithReject() {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return expect(fetchDataWithReject()).rejects.toMatch('error')
})
