const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.questionsPath = '/api/questions'
        this.categoriesPath = '/api/categories'
        this.difficultiesPath = '/api/difficulties'
        this.typesPath = '/api/types'
        this.gamesPath = '/api/games'

        this.connectBBDD();

        this.middlewares();

        this.routes();
    }

    async connectBBDD() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', (req,res) => {
            res.send('Welcome to trivia API');
        });

        this.app.use(this.usersPath, require('../routes/users'));
        this.app.use(this.questionsPath, require('../routes/questions'));
        this.app.use(this.categoriesPath, require('../routes/categories'));
        this.app.use(this.difficultiesPath, require('../routes/difficulties'));
        this.app.use(this.typesPath, require('../routes/types'));
        this.app.use(this.gamesPath, require('../routes/games'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }

}

module.exports = Server;