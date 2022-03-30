const { response, request } = require('express');

const Question = require('../models/question');

const questionsGet = async(req = request, res = response) => {

    const { amount, difficulty, type, category } = req.body;

    const [questions] = await Promise.all([
        Question.find({"category": category, "difficulty": difficulty, "type": type}).limit(amount)
    ]);

    res.json(questions);
}

const questionsGetRandom = async(req = request, res = response) => {

    const[questions] = await Promise.all([
        Question.aggregate([{$sample:{size:10}}])
    ]);

    res.json(questions);

}

module.exports = {
    questionsGet,
    questionsGetRandom
}