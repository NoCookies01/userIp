const express = require('express')
const requestIp = require('request-ip')
const app = express()
const port = 3000

const { getUserIp } = require('./getIp');

app.get('/', (req, res) => {
  var clientIp = getUserIp(req)
  res.send(`Your Real IP Address is ${clientIp}.`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})