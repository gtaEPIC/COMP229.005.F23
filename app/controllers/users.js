let UserModel = require('../models/user');

module.exports.users = async function(req, res, next){
    try {
        let users = await UserModel.find({}, "-password");
        res.json({
            success: true,
            message: 'Get users successfully',
            data: users
        })
    }catch (e) {
        next(e);
    }
}

exports.create = async function(req, res, next){
    try {
        let newUser = new UserModel(req.body);

        let result = await UserModel.create(newUser);
        res.json({
            success: true,
            message: 'Create new user successfully',
            data: result
        })
    }catch (e) {
        next(e);
    }
}

exports.getUserById = async function(req, res, next){
    try {
        let user = await UserModel.findById(req.params.id, "-password");
        res.json({
            success: true,
            message: 'Get user successfully',
            data: user
        })
    }catch (e) {
        next(e);
    }
}

exports.update = async function(req, res, next){
    try {
        let userId = req.params.id;
        let updatedUser = UserModel(req.body);
        updatedUser._id = userId;

        let result = await UserModel.updateOne({_id: userId}, updatedUser);
        res.json({
            success: true,
            message: 'Update user successfully',
            data: result
        })
    }catch (e) {
        next(e);
    }
}

exports.remove = async function(req, res, next){
    try {
        let userId = req.params.id;

        let result = await UserModel.deleteOne({_id: userId});
        res.json({
            success: true,
            message: 'Delete user successfully',
            data: result
        })
    }catch (e) {
        next(e);
    }
}
