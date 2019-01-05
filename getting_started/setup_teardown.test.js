let database

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    database = [
      'Vienna',
      'San Juan'
    ]
    resolve()
  })
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    database = []
    resolve()
  })
}

function isCity(city) {
  return database.includes(city)
}

beforeAll(() => {
  return initializeCityDatabase()
})

afterAll(() => {
  return clearCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database does not have Tokyo', () => {
  expect(isCity('Tokyo')).toBeFalsy()
})
