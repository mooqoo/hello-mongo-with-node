import mongoose from 'mongoose'
const Schema = mongoose.Schema

// --- create a schema ---
const userSchema = new Schema({
  name: String,
  username: { type: String, required: true },
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

// --- custom method ---
const updateTime = function(next) {
  // get the current date
  const currentDate = new Date()

  // change the updated_at field to current date
  this.updated_at = currentDate

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate

  next()
}

const dudifyName = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'

  return this.name
}

// --- setup userSchema ---
userSchema.methods.dudify = dudifyName
userSchema.pre('save', updateTime);

const User = mongoose.model('User', userSchema);
export default User
