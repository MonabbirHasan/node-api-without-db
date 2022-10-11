const { v4: uuidv4 } = require('uuid')

var users = [
  {
    id: uuidv4(),
    name: 'omer faroque',
    email: 'hmd320667@gmail.com',
    phone: '01743714489',
    address: 'Dhaka/Bangladesh',
    zipCode: '2210',
    profession: 'web and mobile app developer',
    education: 'ssc not complete',
  },
  {
    id: uuidv4(),
    name: 'monabbirhasan',
    email: 'hmd320667@gmail.com',
    phone: '01743714489',
    address: 'Dhaka/Bangladesh',
    zipCode: '2210',
    profession: 'web and mobile app developer',
    education: 'ssc not complete',
  },
]
module.exports = users
