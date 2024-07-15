const express = require('express')
const app = express()
const port = 3003
const userRoute = require('./routes/users')
app.use(userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})