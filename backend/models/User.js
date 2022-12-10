const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator') // Para validar que el uname sea unico

const userSchema = new mongoose.Schema({ 
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
})

userSchema.plugin(uniqueValidator)

// Se llama cuando se devuelve el JSON de un usuario (por ejemplo, cuando se hace un GET)
userSchema.set('toJSON', {
  transform: (document, returnedObject) => { 
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

// Se crea el modelo User a partir del esquema userSchema
module.exports = mongoose.model('User', userSchema)