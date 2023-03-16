const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String
}, { timestamps: true } );

module.exports = Book = mongoose.model('ToDo', TodoSchema);