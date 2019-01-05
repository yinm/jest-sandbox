function fetchData() {
  return new Promise((resolve) => {
    resolve('peanut butter')
  })
}

test('the data is peanut butter', () => {
  expect.assertions(1)
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})

function fetchDataWithException() {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchDataWithException().catch(e => expect(e).toMatch('error'))
})
