const $ = require('jquery')

function parseJSON(user) {
  return {
    fullNmae: user.firstName + ' ' + user.lastName,
    loggedIn: true
  }
}

function fetchCurrentUser(callback) {
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: 'GET',
    url: 'http://example.com/currentUser'
  })
}

module.exports = fetchCurrentUser
