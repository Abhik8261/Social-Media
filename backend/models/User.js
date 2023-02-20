const mongoose=require("mongoose")

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
});


module.exports=mongoose.model("User",userSchema)