const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        require: [true, 'Username is required']
    }
}, {
    _v: false
});

UserSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('User', UserSchema);