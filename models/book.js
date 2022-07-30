//Dependencies
let mongoose = require('mongoose')
let {Schema} = mongoose

//Schema
let bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

//compile model and export
let Book = mongoose.model('Book', bookSchema)
module.exports = Book