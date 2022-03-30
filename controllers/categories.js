const { response, request } = require("express");

const Category = require('../models/category');

const categoriesGet = async(req = request, res = response) => {

    const[categories] = await Promise.all([
        Category.find().sort({ "name": 1 })
    ]);

    res.json(categories);
}

module.exports = {
    categoriesGet
}