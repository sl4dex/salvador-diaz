const express = require('express')
const path = require('path')

const app = express()

// Middleware
app.use(express.json()) // cada vez que se haga una peticion, se va a ejecutar este middleware: si el body es JSON lo va a convertir en un objeto JS

// Serve bundled frontend file from the build folder
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/api', (req, res) => { 
  res.send('Hello from Express!')
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})