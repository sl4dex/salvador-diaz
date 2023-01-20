const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config() // saca las variabes de entorno de .env y las carga en process.env
const morgan = require('morgan') 
const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')

const app = express()

// Conectar a la base de datos de mongoDB Atlas
const MONGODB_URI = process.env.NODE_ENV === 'testing' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('connected to MongoDB Atlas')) // Si conecta con exito, imprimirlo en consola
  .catch(err => console.log(err)) // Si no conecta, imprimir el error en consola

// 👇👇 --- Middleware ------------------

app.use(express.json()) // cada vez que se haga una peticion, se va a ejecutar este middleware: si hay un error, lo va a manejar
app.use(express.static(path.join(__dirname, '../frontend/build'))) // Serve bundled frontend file from the build folder

// 👇👇 --- Routes ----------------------

app.get('/api', function(req, res) {
  res.status(200).send('Hi')
})

app.use('/api', userRouter)
app.use('/api', blogRouter)
// add testing routes only if backend is run in testing environment
if (process.env.NODE_ENV === 'testing') {
  const testingRouter = require('./routes/testing')
  app.use('/api', testingRouter)
}

// Catch-all route to make sure the frontend always gets served, avoiding issues with refreshing the page with a non-root route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.listen(process.env.PORT, () => {
  console.log('Server is running on port ', process.env.PORT)
})