const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// saca las variabes de entorno de .env y las carga en process.env
require('dotenv').config()
const userRouter = require('./routes/users')

const app = express()

// Conectar a la base de datos de mongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to MongoDB')) // Si conecta con exito, imprimirlo en consola
  .catch(err => console.log(err)) // Si no conecta, imprimir el error en consola

// Middleware
app.use(express.json()) // cada vez que se haga una peticion, se va a ejecutar este middleware: si el body es JSON lo va a convertir en un objeto JS

// Serve bundled frontend file from the build folder
app.use(express.static(path.join(__dirname, '../frontend/build')))

// Routes

app.get('/', (req, res) => { 
  res.status(200).send('Hello World')
})

app.use('/api', userRouter)


app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3001')
})