// import modules

import express from 'express'
import { books } from './data/books.js'

// create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)


// Mount routes

app.get('/home', function(req, res) {
  res.render('home')
})
app.get('/', function(req, res) {
  res.redirect('/books')
})
app.get('/books', function(req, res) {
  res.render('books/index.ejs', {
    books: books
  })
})

app.get('/moths/are/furry', function(req, res) {
  res.send('<h2>Buzzzzzzzzzzzzzzzzz</h2>')
})

// app.post('/books', function(req, res) {
//   res.send('Thanks for the book!')
// })
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})