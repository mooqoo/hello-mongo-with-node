import mongoose from 'mongoose'
const Schema = mongoose.Schema

// create a schema
const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
})

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'

  return this.name
}

const User = mongoose.model('User', userSchema);
export default User
