const mongoose=require("mongoose");
const  bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const  crypto=require('crypto');
const sendEmail=require('../Middleware/sendEmail')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a Name'],
    },
    avatar:{
        public_id:String,
        url:String
    },
    email:{
        type:String,
        required:[true,"Please enter the e-mail"],
        unique:[true,'Email already exists']
    },
    password:{
        type:String,
        required:[true,'Please enter a password'],
        minlength:[6,'Password must be at least 6 characters'],
        select:false,
        
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post',
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    followering:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    resetPasswordToken:String,

    resetPasswordExpire:Date,
});

userSchema.pre("save",async function(next){
    if(this.isModified('password')){

        this.password=await bcrypt.hash(this.password,10); 
    }
    next();

})

userSchema.methods.matchPassword=async function (password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET)
}

userSchema.method.getResetPasswordToken=function(){
const resetToken=crypto.randomBytes(20).toString("hex");
this.resetPasswordToken=crypto.createHash("abhi8261").update(resetToken).digest("hex")
this.resetPasswordExpire= Date.now() + 5 * 60*1000;
return resetToken;
}
module.exports=mongoose.model("User",userSchema)