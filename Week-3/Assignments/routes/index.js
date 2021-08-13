const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/data', (req, res) => {
  const number = Number(req.query.number)
  let message = ''
  let total = 0

  if (number === 0) {
    message = 'Lack of Parameter'
  } else if (!number) {
    message = 'Wrong Parameter'
  } else {
    for (let i = 0; i <= number; i++) {
      total += i
    }
    message = `total = ${total}`
  }

  res.render('index', { message })
})

module.exports = router