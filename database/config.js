const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log(process.env.MONGODB_CNN);


    } catch (error) {
        console.log(error);
        throw new Error('There was an error connecting to database');
    }
}

module.exports = {
    dbConnection
}