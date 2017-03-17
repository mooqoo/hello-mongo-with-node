
import User from '../schema/User'

// return User type
const createUser = (name) => new User({
  name: name,
  username: name,
  password: 'password'
})

// input is user
const dudify = (user) => user.dudify((err, name) => {
  if (err) throw err;
  console.log('Your new name is ' + name)
})

const save = (user) => user.save((err) => {
  if (err) throw err;
  console.log('User saved successfully!')
})

export const createAndSaveUser = (name, shouldDudify) => {
  const user = createUser(name)
  if (shouldDudify) dudify(user)
  save(user)
  console.log('createAndSaveUser: done...')
}
