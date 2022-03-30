const express = require('express');
const app = express();

app.use(require('./questions'));
app.use(require('./users'));
app.use(require('./categories'));
app.use(require('./difficulties'));

app.get('/', function(req,res) {
    res.send('Trivia API developed by Ismael Cordón Domínguez');
})

module.exports = app;