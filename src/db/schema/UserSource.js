import mongoose from 'mongoose'
const Schema = mongoose.Schema

// --- create a schema ---
// http://mongoosejs.com/docs/guide.html#indexes
// create compound index for groupId with triggerType
const userSourceSchema = new Schema({
  sourceType: { type: string, required: true}
  sourceId: { type: string, required: true, unique: true }
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

// --- custom method ---
const updateTime = (schema) => {
  console.log('update time')

  const currentDate = new Date()
  schema.updated_at = currentDate
  if (!schema.created_at)
    schema.created_at = currentDate
}

const preSave = function(next) {
  updateTime(this)
  next()
}

// --- setup userSchema ---
// userSchema.methods.dudify = dudifyName
userSourceSchema.pre('save', preSave)

const UserSource = mongoose.model('UserSource', userSourceSchema);
export default UserSource
