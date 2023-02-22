const express=require('express');
const { createPost, likeAndlikePost, deletePost } = require('../controllers/post.jsx');
const { isAuthenticated } = require('../Middleware/auth.js');
const router=express.Router();






router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndlikePost).delete(isAuthenticated,deletePost);
  



module.exports=router