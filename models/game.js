const { Schema, model} = require('mongoose');

let GameSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    correctAnswers: {
        type: Number,
        require: true
    },
    score: {
        type: Number,
        require: true
    }
}, {
    versionKey: false
});

GameSchema.methods.toJson = function() {
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Game', GameSchema)