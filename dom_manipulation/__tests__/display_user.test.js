'use strict'

jest.mock('../fetchCurrentUser.js')

it('displays a user after a click', () => {
  document.body.innerHTML = `
    <div>
      <span id="username" />
      <button id="button" />
    </div> 
  `

  require('../displayUser')
  const fetchCurrentUser = require('../fetchCurrentUser')

  fetchCurrentUser.mockImplementation(cb => {
    cb({
      fullName: 'Johnny Cash',
      loggedIn: true
    })
  })

  document.getElementById('button').click()

  expect(fetchCurrentUser).toBeCalled()
  expect(document.getElementById('username').textContent).toEqual('Johnny Cash - Logged In')
})
