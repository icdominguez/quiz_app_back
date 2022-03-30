const { Schema, model } = require('mongoose');

const TypeSchema = Schema({
    description: {
        type: String,
        require: true
    }
});

module.exports = model('Type', TypeSchema);