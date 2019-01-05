import axios from 'axios'
import Users from './users'

jest.mock('axios')

test('should fetch users', () => {
  const resp = {data: [{nane: 'Bob'}]}
  axios.get.mockResolvedValue(resp)

  return Users.all().then(users => expect(users).toEqual(resp.data))
})
