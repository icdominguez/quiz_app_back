const { response, request } = require('express');

const User = require('../models/user');

const checkUser = async(req, res = response) => {
    const { username } = req.body;
    console.log(username)

    const userDb = await User.findOne({username: username});

    if(userDb) {
        return res.status(200).json({
            msg: `El usuario ${userDb.username} ya existe`
        });
    }

    const data = {
        ...body,
        username: username
    }

    const user = new User(data);

    try {
        await User.save();
    } catch(e) {
        res.status(500).json({
            msg: `Error al crear el usuario: ${e}`
        })
    }

    res.status(201).json(user);
}

module.exports = {
    checkUser
}