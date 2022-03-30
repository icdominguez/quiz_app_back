const mongoose = require('mongoose');

let schema = mongoose.Schema;

let categorySchema = new schema ({
    category_id: {
        type: Number,
        require: true
    }, 
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Category', categorySchema)