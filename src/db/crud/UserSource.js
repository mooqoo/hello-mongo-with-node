
import UserSource from '../schema/UserSource'

const SourceType = {
  USER: 'USER',
  GROUP: 'GROUP',
  ROOM: 'ROOM',
}

// --- create ---
const createUserSource = (sourceType, sourceId) => new UserSource({
  sourceType: sourceType,
  sourceId: sourceId,
})

// --- save method ---
const save = (source) => source.save((err) => {
  if (err) {
    console.log('source save error = ', err)
    return console.log('source already exist') // throw err
  }
  console.log('source saved successfully!')
})

// --- read ---
const showAll = () => {
  console.log('UserSource: showAll...')
  // get all the users
  UserSource.find({}, (err, sourceList) => {
    if (err) throw err
    console.log('UserSource: showAll: sourceList = ', sourceList)
  })
}

// --- query ---

// --- create ---
const create = (sourceType, sourceId) => {
  // check if it this new
  console.log('UserSource: create... sourceType=' + sourceType + ', sourceId=' + sourceId)
  const sourceType = createUserSource(sourceType, sourceId)
  save(sourceType)
  console.log('UserSource: create done...')
}

export default {
  create,
  showAll,
}
