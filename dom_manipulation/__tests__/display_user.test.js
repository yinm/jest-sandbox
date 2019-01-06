'use strict'

jest.mock('../fetchCurrentUser.js')

it('displays a user after a click', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>'

  // This module has a side-effect
  require('../displayUser')

  const $ = require('jquery')
  const fetchCurrentUser = require('../fetchCurrentUser')

  fetchCurrentUser.mockImplementation(cb => {
    cb({
      fullName: 'Johnny Cash',
      loggedIn: true
    })
  })

  $('#button').click()

  expect(fetchCurrentUser).toBeCalled()
  expect($('#username').text()).toEqual('Johnny Cash - Logged In')
})
