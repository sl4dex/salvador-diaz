const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// saca las variabes de entorno de .env y las carga en process.env
require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')
const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')

const app = express()

// Conectar a la base de datos de mongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to MongoDB')) // Si conecta con exito, imprimirlo en consola
  .catch(err => console.log(err)) // Si no conecta, imprimir el error en consola

// --- Middleware ----------------------------------
app.use(express.json()) // cada vez que se haga una peticion, se va a ejecutar este middleware: si hay un error, lo va a manejar

// Serve bundled frontend file from the build folder
app.use(express.static(path.join(__dirname, '../frontend/build')))

// --- Routes --------------------------------------

app.get('/api', function(req, res) {
  res.status(200).send('Hi')
})
// Catch-all route to make sure the frontend always gets served, avoiding issues with refreshing the page with a non-root route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})


app.use('/api', userRouter)
app.use('/api', blogRouter)

// middleware: si el body es JSON lo va a convertir en un objeto JS
app.use(errorHandler) // IMPORTANTE PONER EL MIDDLEWARE DE MANEJO DE ERRORES DESPUES DE LAS RUTAS 

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3001')
})