const { response, request } = require('express');

const Type = require('../models/type');

const typesGet = async(req = request, res = response) => {

    const [types] = await Promise.all([
        Type.find()
    ]);

    res.json(types);
}

module.exports = {
    typesGet
}