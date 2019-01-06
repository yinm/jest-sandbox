const fetchCurrentUser = require('./fetchCurrentUser.js')

document.getElementById('button').addEventListener('click', () => {
  fetchCurrentUser(user => {
    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out')
    document.getElementById('username').textContent = `${user.fullName} - ${loggedText}`
  })
}, false)
