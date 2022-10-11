var users = require('../models/users.model')
const { v4: uuidv4 } = require('uuid')

// get all data
const getALLUsers = (req, res) => {
  res.status(200).json({ users })
}
// insert data
const createUsers = (req, res) => {
  var insertUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    zipCode: req.body.zipCode,
    profession: req.body.profession,
    education: req.body.education,
  }
  users.push(insertUser)
  res.status(200).json(users)
}

// update data
const updateUsers = (req, res) => {
  var upId = req.params.id
  var valus = {
    uname: req.body.name,
    uemail: req.body.email,
    uphone: req.body.phone,
    uaddress: req.body.address,
    uzipCode: req.body.zipCode,
    uprofession: req.body.profession,
    ueducation: req.body.education,
  }
  users
    .filter((user) => user.id === upId)
    .map((selectedUser) => {
      selectedUser.name = valus.uname
      selectedUser.email = valus.uemail
      selectedUser.phone = valus.uphone
      selectedUser.address = valus.uaddress
      selectedUser.zipCode = valus.uzipCode
      selectedUser.profession = valus.uprofession
      selectedUser.education = valus.ueducation
    })
  res.status(200).json({ users })
}
// delete users
const DeleteUsers = (req, res) => {
    var DelId = req.params.id
    users=users.filter((user)=>user.id!==DelId)
    res.status(200).json({ users })
  }
module.exports = { getALLUsers, createUsers, updateUsers,DeleteUsers }
