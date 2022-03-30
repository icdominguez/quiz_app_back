const mongoose = require('mongoose');

let schema = mongoose.Schema;

let difficultySchema = new schema ({ 
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Difficulty', difficultySchema)