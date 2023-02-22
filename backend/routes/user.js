const express=require('express');
const { register,login, followUser, logout, updatePassword, updateProfile, detleteProfile } = require('../controllers/user');
const {isAuthenticated}=require('../Middleware/auth')
const router=express.Router();



router.route("/register").post(register);

router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/follow/:id").get(isAuthenticated,followUser);

router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);

router.route("/delete/me").delete(isAuthenticated,detleteProfile)
module.exports=router