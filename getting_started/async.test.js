function fetchData(cb) {
  setTimeout(cb, 1000)
}

test('the data is peanut butter', (done) => {
  function callback(data) {
    expect(data).toBe('peanut butter')
    done()
  }

  fetchData(callback('peanut butter'))
})
