const express = require('express')
const router = express.Router()

// caculate 1 + 2 + 3 + ...... + n = ?
function Gauss(number) {
  return (number + 1) * number / 2
}

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
    total = Gauss(number)
    message = `total = ${total}`
  }
  // res.render('index', { message })
  res.send(message)
})

router.get('/myName', (req, res) => {
  const name = req.cookies.name
  res.render('myName', { name })
})

router.get('/trackName', (req, res) => {
  res.cookie('name', req.query.name)
  res.redirect('/myName')
})

module.exports = router