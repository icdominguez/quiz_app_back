const { request, response } = require("express");

const Difficulty = require("../models/difficulty");

const difficultiesGet = async(req = request, res = response) => {

    const[difficulties] = await Promise.all([
        Difficulty.find()
    ]);

    res.json(difficulties);
}

module.exports = {
    difficultiesGet
}