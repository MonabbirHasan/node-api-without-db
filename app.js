const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const {
  getALLUsers,
  createUsers,
  updateUsers,
  DeleteUsers,
} = require('./controllers/users.controller')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', getALLUsers)
app.use('/insert', createUsers)
app.use('/update/:id', updateUsers)
app.use('/delete/:id', DeleteUsers)

// hoem rout
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// rout not found message
app.use((req, res, next) => {
  res.status(404).json({ message: 'this page rout is not exists' })
})

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'something is wrong in server' })
})

module.exports = app
