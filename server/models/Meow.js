const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let meowSchema = new Schema({
    name: {
        type: String
    },
    content: {
        type: String
    },
}, {
    collection: 'meows'
    
})

module.exports = mongoose.model('Meow', meowSchema)