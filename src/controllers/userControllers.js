const UserModel = require('../models/userModel');

exports.postUser = async (req, res)=>{
    const user = UserModel.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
    });
    console.log(user);
    return res.status(201).json({message:"User Created"});
};

exports.getAllUsers = async (req, res)=>{
    const users = await UserModel.find({});
    return res.status(200).json(users);  
};


exports.getUserbyId = async (req, res)=>{
    const user = await UserModel.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json(user);
};

exports.updateUser = async (req, res)=>{
    const user = await UserModel.findByIdAndUpdate(req.params.id, {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password
    }, {new:true});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json(user);
};

exports.patchUser = async (req, res)=>{
    const user = await UserModel.findByIdAndUpdate(req.params.id, {
        user_password: req.body.user_password
    }, {new:true});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json(user);
};

