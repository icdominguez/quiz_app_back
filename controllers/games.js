const { request, response } = require("express");
const { body } = require("express-validator");
const res = require("express/lib/response");

const Game = require("../models/game");

const saveGame = async(req = request, res = response) => {
    const { username, numberOfQuestions, correctAnswers, score } = req.body

    const data = {
        username: username,
        numberOfQuestions: numberOfQuestions,
        correctAnswers: correctAnswers,
        score: score
    }

    console.log("Data: " + data)

    const newGame = new Game(data);

    try {
        await newGame.save()
    } catch(e) {
        res.status(500).json({
            msg: `There was an error creating the game: ${e}`
        })
    }

    res.status(201).json({
        "created": "resource sucessfully created"
    })
}

const getBestGames = async(req = request, res = response) => {
    const[games] = await Promise.all([
        Game.find({}).sort({ "puntuation": -1 }).limit(10)
    ]);

    games.forEach((element, index) => {
        element.id = index + 1
        console.log(element)
    })

    res.status(200).json(games)
}

module.exports = {
    saveGame,
    getBestGames
}