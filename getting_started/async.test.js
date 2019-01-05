function fetchData() {
  return new Promise((resolve, reject) => {
    resolve('peanut butter')
  })
}

test('thee data is peanut butter', async () => {
  expect.assertions(1)
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

function fetchDataWithReject() {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}

test('the fetch fails with an error', async () => {
  expect.assertions(1)
  try {
    await fetchDataWithReject()
  } catch (e) {
    expect(e).toMatch('error')
  }
})
