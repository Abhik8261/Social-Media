const express=require('express');
const { createPost, likeAndlikePost, deletePost, getPostOfFollowing } = require('../controllers/post.jsx');
const { isAuthenticated } = require('../Middleware/auth.js');
const router=express.Router();






router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndlikePost).delete(isAuthenticated,deletePost);
  router.route("/posts").get(isAuthenticated,getPostOfFollowing)



module.exports=router