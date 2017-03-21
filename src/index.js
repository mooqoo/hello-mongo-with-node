import express from 'express'
import mongoose from 'mongoose'

import {
  createAndSaveUser,
  showAll,
  findByName,
  findAndCreate,
} from './db/crud/User'

import echo from './db/crud/EchoMap'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create db and connect to it
const dbUri = 'mongodb://localhost/helloMongo'
mongoose.connect(dbUri, (err, res) => {
  if (err) {
    console.log ('ERROR connecting to: ' + dbUri + '. ' + err)
  } else {
    console.log ('Succeeded connected to: ' + dbUri)
  }
})

const addDataToDb = () => {
  console.log('run addDataToDb method...')
  // showAll()

  // findByName('Alex')
  // createAndSaveUser('Victor', true)
  // createAndSaveUser('Jenny', false)

  // create echo
  // echo.create('a', 'this is a echo')
  // echo.create('b', 'this is b another echo', null, 'groudId')
  // echo.create('b', 'this is b another echo @@@', null, 'groudId')
  // echo.create('b', 'this is b global echo ###',)
  // echo.create('c', 'hello group echo', null, 'groudId')
  // echo.showAll()

  // echo.findEchoMapByGroupId('groudId')
  // echo.findEchoMapByGroupId(null)
  // echo.findEchoValue('groudId', 'b')
}

// 因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 5000, () => {
  var port = server.address().port
  console.log('App now running on port', port)
  addDataToDb()
})

// --- handle command from console ---
// http://stackoverflow.com/questions/10428684/how-to-implement-console-commands-while-server-is-running-in-node-js
const done = () => {
  console.log('Now that process.stdin is paused, there is nothing more to do.')
  process.exit()
}

const handleConsoleCmd = (cmdInput) => {
  const cmdArray = cmdInput.trim().split(' ')
  console.log('handleConsoleCmd: cmdArray = ', cmdArray)

  if (cmdInput.trim() === 'quit') done()
}

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', handleConsoleCmd)
