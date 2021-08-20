const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// create connection 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'assignment'
})

// connet
db.connect((err) => {
  if (err) console.log(err)
  console.log('MySql Connected...');
})

// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE assignment'
  db.query(sql, (err, result) => {
    if (err) console.log(err)
    console.log(result)
    console.log('Database created...')
  })
})

// Create table
app.get('/createtable', (req, res) => {
  let sql = 'CREATE TABLE user (id INT AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))'
  db.query(sql, (err, result) => {
    if (err) console.log(err)
    console.log(result)
    console.log('user table created...')
  })
})

// 首頁
app.get('/', (req, res) => {
  res.render('index')
})

// 登入頁面
app.get('/users/login', (req, res) => {
  res.render('login')
})

// 登入檢查
app.post('/users/login', (req, res) => {
  const { email, password } = req.body
  let sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
  let message = ''

  db.query(sql, (err, result) => {
    if (err) console.log(err)
    if (!result.length) {
      message = 'Email或密碼有錯誤！'
      return res.render('login', { message, email, password })
    }
    res.redirect('/users/member')
  })
})

// 註冊頁面
app.get('/users/register', (req, res) => {
  res.render('register')
})

// 註冊檢查
app.post('/users/register', (req, res) => {
  const { email, password } = req.body
  const userData = { email, password }
  let sqlCheckUser = `SELECT * FROM user WHERE email = '${email}'`
  let sqlAddUser = 'INSERT INTO user SET ?'
  let message = ''

  db.query(sqlCheckUser, (err, result) => {
    if (err) console.log(err)
    if (result.length) {
      message = '此 Email 已經註冊過。'
      return res.render('register', { message, email, password })
    }
    db.query(sqlAddUser, userData, (err, result) => {
      if (err) console.log(err)
      console.log(result)
      console.log('posts fetched...')
    })
    res.redirect('/users/member')
  })
})

// 登入成功畫面
app.get('/users/member', (rew, res) => {
  res.render('member')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

// // Treehouse practice
// // Insert user
// app.get('/adduser', (req, res) => {
//   let userData = { email: 'test2@examle.com', password: '12345678' }
//   let sql = 'INSERT INTO user SET ?'
//   let query = db.query(sql, userData, (err, result) => {
//     if (err) console.log(err)
//     console.log(result)
//     console.log('posts fetched...')
//   })
//   res.redirect('/')
// })

// // Select post
// app.get('/getposts', (req, res) => {
//   let sql = 'SELECT email FROM user'
//   let query = db.query(sql, (err, result) => {
//     if (err) console.log(err)
//     console.log(result)
//     console.log('posts fetched...')
//   })
//   res.redirect('/')
// })

// // Select single post
// app.get('/getpost/:id', (req, res) => {
//   let sql = `SELECT email FROM user WHERE id = ${req.params.id}`
//   let query = db.query(sql, (err, result) => {
//     if (err) console.log(err)
//     console.log(result)
//     console.log('post fetched...')
//   })
//   res.redirect('/')
// })

// // Update post
// app.get('/updatepost/:id', (req, res) => {
//   let newEmail = 'test2@example.com'
//   let sql = `Update user SET email = '${newEmail}' WHERE id = ${req.params.id}`
//   let query = db.query(sql, (err, result) => {
//     if (err) console.log(err)
//     console.log(result)
//     console.log('post update...')
//   })
//   res.redirect('/')
// })