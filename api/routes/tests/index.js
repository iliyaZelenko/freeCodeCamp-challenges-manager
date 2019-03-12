const { Router } = require('express')
const assert = require('assert')

const router = Router()

// Mock Users
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const a = 5

  eval(`
    try {
      const result = assert(a === 4);
    } catch (e) {
      res.json({
        b: 2,
        e: e
      });
    }
  `)

  // res.json(users);
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
