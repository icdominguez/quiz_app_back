const mongoose = require('mongoose');

let schema = mongoose.Schema;

let questionSchema = new schema({
    category: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    answers: {
        type: Array,
        require: true
    },
    correct_answer: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Question', questionSchema);