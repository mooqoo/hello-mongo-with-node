import mongoose from 'mongoose'
const Schema = mongoose.Schema

// --- create a schema ---
// http://mongoosejs.com/docs/guide.html#indexes
// create compound index for groupId with triggerType
const echoSchema = new Schema({
  groupId: { type: String, default: null },
  enabled: { type: Boolean, default: true },

  triggerType: { type: String, default: 'text' },
  triggerValue: { type: String, lowercase: true, trim: true, required: true },
  echoType: { type: String, default: 'text' },
  echoValue: { type: String, required: true },  // add trim?

  triggerCount: { type: Number, default: 0 },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})
// create compound index with sort order both ascending(1)
echoSchema.index({ groupId: 1, triggerValue: 1 }, { unique: true })

// --- custom method ---
const enableEcho = function(enable) {
  console.log('update enable echo. enable = ', enable)
  this.enabled = enable
}

const updateEcho = function(echoValue, echoType = 'text') {
  console.log('update updateEcho: echoValue=' + echoValue + ', echoType=' + echoType)
  this.echoType = echoType
  this.echoValue = echoValue
}

// called when query
const updateCount = (echo) => {
  console.log('update count')
  echo.triggerCount += 1
}

const updateTime = (echo) => {
  console.log('update time')

  const currentDate = new Date()
  echo.updated_at = currentDate
  if (!echo.created_at)
    echo.created_at = currentDate
  // next()
}

const preSave = function(next) {
  updateCount(this)
  updateTime(this)
  next()
}

// --- setup userSchema ---
// userSchema.methods.dudify = dudifyName
echoSchema.pre('save', preSave)

echoSchema.on('index', function(err) {
  console.log('on index is called...')
  if (err) console.log(err)
})


const EchoMap = mongoose.model('EchoMap', echoSchema);
export default EchoMap
