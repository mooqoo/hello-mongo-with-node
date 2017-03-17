import express from 'express'
import mongoose from 'mongoose'

import {createAndSaveUser} from './db/update/User'

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

  // createAndSaveUser('Alex', true)
  // createAndSaveUser('Wilson', false)
  // createAndSaveUser('Victor', true)
}

// 因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 5000, () => {
  var port = server.address().port
  console.log('App now running on port', port)
  addDataToDb()
})
