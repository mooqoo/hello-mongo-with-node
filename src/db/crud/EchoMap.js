
import Echo from '../schema/EchoMap'

// --- create ---
const createEcho = (
  triggerValue, echoValue, echoType = 'text', groupId = null
) => new Echo({
  groupId: groupId,
  triggerValue: triggerValue,
  echoType: echoType,
  echoValue: echoValue,
})

// --- save method ---
const save = (echo) => echo.save((err) => {
  if (err) {
    console.log('echo save error = ', err)
    return console.log('echo already exist') // throw err
  }
  console.log('echo saved successfully!')
})

// --- export method ---
// export const showAll = (Schema) => {
//   console.log('Schema: showAll...')
//   // get all the users
//   Schema.find({}, (err, documents) => {
//     if (err) throw err
//     console.log('showAll: data = ', documents);
//   })
// }
// --- read ---
const showAll = () => {
  console.log('Echo: showAll...')
  // get all the users
  Echo.find({}, (err, echoList) => {
    if (err) throw err
    console.log('Echo: showAll: echoList = ', echoList)
  })
}

// --- query ---
const findEchoMapByGroupId = (groupId) => {
  console.log('Echo: findEchoMapByGroupId...')
  Echo.find({ groupId: groupId }, function(err, echoList) {
    if (err) throw err
    console.log('findByGroupId: echoList = ', echoList)
  })
}

const findEchoValue = (groupId, triggerValue) => {
  console.log('Echo: findEchoValue...')
  Echo.find({ groupId: groupId, triggerValue: triggerValue }, function(err, echoList) {
    if (err) throw err
    console.log('findEchoValue: echoList = ', echoList)
  })
}

// --- create ---
const create = (
  triggerValue, echoValue, echoType = 'text', groupId = null
) => {
  // check if it this new
  console.log('Echo: create... triggerValue=' + triggerValue + ', echoValue=' + echoValue)
  const user = createEcho(triggerValue, echoValue, echoType, groupId)
  save(user)
  console.log('Echo: create done...')
}

export default {
  create,

  showAll,

  findEchoMapByGroupId,
  findEchoValue,
}
