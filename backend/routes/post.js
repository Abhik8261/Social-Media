const express=require('express');
const { createPost, likeAndlikePost, deletePost, getPostOfFollowing, updateCaption, addComment } = require('../controllers/post.jsx');
const { isAuthenticated } = require('../Middleware/auth.js');
const router=express.Router();






router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id").get(isAuthenticated, likeAndlikePost).delete(isAuthenticated,deletePost).put(isAuthenticated,updateCaption);
router.route("/posts").get(isAuthenticated,getPostOfFollowing)
router.route("/post/comment/:id").put(isAuthenticated,addComment)


module.exports=router