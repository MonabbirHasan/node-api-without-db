const {
  getALLUsers,
  createUsers,
  updateUsers,
  DeleteUsers,
} = require('../controllers/users.controller')

const router = require('express').Router()

router.get('/', getALLUsers)
router.post('/', createUsers)
router.put('/:id', updateUsers)
router.delete('/:id', DeleteUsers)

module.exports = router
