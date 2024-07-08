const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');



const mongoose = require('mongoose');   

//create a new user
router.post('/user',userControllers.postUser );

//get all users
router.get('/users', userControllers.getAllUsers);
//get user by id
router.get('/user/:id', userControllers.getUserbyId);
//update the user
router.put('/user/:id', userControllers.updateUser);
//patch the user
router.patch('/user/:id', userControllers.patchUser);


module.exports = router;
