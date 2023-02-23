const express=require('express');
const { register,login, followUser, logout, updatePassword, updateProfile, detleteProfile, myProfile, getUserProfile, getAllUsers } = require('../controllers/user');
const {isAuthenticated}=require('../Middleware/auth')
const router=express.Router();



router.route("/register").post(register);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated,followUser);

router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);

router.route("/delete/me").delete(isAuthenticated,detleteProfile);

router.route("/me").get(isAuthenticated,myProfile)
router.route("/user/:id").get(isAuthenticated,getUserProfile);
router.route("/users").get(isAuthenticated,getAllUsers);


module.exports=router