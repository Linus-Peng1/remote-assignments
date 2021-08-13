const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'pug')

app.use(routes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})