
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
  if (err) return console.log('user already exist') // throw err
  console.log('User saved successfully!')
})

// --- export method ---
export const showAll = () => {
  console.log('User: showAll...')
  // get all the users
  User.find({}, (err, users) => {
    if (err) throw err
    console.log(users);
  })
}

// get the user starlord55
export const findByName = (userName) => {
  console.log('User: findByName...')
  User.find({ username: userName }, function(err, user) {
    if (err) throw err
    console.log(user)
  })
}

//
export const createAndSaveUser = (name, shouldDudify) => {
  // check if it this new
  console.log('User: createAndSaveUser... name=' + name + ', shouldDudify=' + shouldDudify)
  const user = createUser(name)
  if (shouldDudify) dudify(user)
  save(user)
  console.log('createAndSaveUser: done...')
}
