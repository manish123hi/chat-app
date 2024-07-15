const express = require('express')
const app = express()
app.use(express.json())
const port = 3003
const userRoute = require('./routes/users')
app.use(userRoute)
const connect = require('./db/connection')
connect();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})