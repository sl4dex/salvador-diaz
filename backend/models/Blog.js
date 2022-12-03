const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({ 
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

blogSchema.plugin(uniqueValidator)

// Se llama cuando se devuelve el JSON de un blog (por ejemplo, cuando se hace un GET)
blogSchema.set('toJSON', { 
  transform: (document, returnedObject) => { 
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Se crea el modelo Blog a partir del esquema blogSchema
module.exports = mongoose.model('Blog', blogSchema)