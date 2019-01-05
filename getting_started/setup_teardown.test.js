let database

function initializeCityDatabase() {
  database = [
    'Vienna',
    'San Juan',
    'Tokyo'
  ]
}

function clearCityDatabase() {
  database = []
}

function isCity(city) {
  return database.includes(city)
}

beforeEach(() => {
  initializeCityDatabase()
})

afterEach(() => {
  clearCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

test('city database does not have Osaka', () => {
  expect(isCity('Osaka')).toBeFalsy()
})
