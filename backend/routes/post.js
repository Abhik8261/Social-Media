const express=require('express');
const { createPost } = require('../controllers/post.jsx');
const { isAuthenticated } = require('../Middleware/auth.js');
const router=express.Router();






router.route("/post/upload").post(isAuthenticated, createPost);




module.exports=router