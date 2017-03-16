import express from 'express'
import {head} from 'ramda'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
const server = app.listen(process.env.PORT || 5000, () => {
  var port = server.address().port
  console.log('App now running on port', port)
})
