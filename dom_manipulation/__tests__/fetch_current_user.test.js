jest.mock('jquery')

beforeEach(() => jest.resetModules())

it('calls into $.ajax with the correct params', () => {
  const $ = require('jquery')
  const fetchCurrentUser = require('../fetchCurrentUser')

  const dummyCallback = () => {}
  fetchCurrentUser(dummyCallback)

  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://example.com/currentUser'
  })
})

it('calls the callback when $.ajax requests are finished', () => {
  const $ = require('jquery')
  const fetchCurrentUser = require('../fetchCurrentUser')

  const callback = jest.fn()
  fetchCurrentUser(callback)

  $.ajax.mock.calls[0][0].success({
    firstName: 'Bobby',
    lastName: 'Marley'
  })

  expect(callback.mock.calls[0][0]).toEqual({
    fullName: 'Bobby Marley',
    loggedIn: true
  })
})
