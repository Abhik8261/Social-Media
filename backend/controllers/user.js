const User=require('../models/User');



exports.register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;

        let user=await User.findOne({email});
        if(user) return res.status(400).json({success:false,message:"user already exists"})
        user = await User.create({
            name,
            email,
            password,
            avatar:{public_id:'sample_id',url:'sampleurl'}
        })
        const token=await user.generateToken();
        const options={expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true,
        }
        
                res.status(201).cookie("token",token,options).json({
                    success:true,
                    user,
                    token,
                })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}


exports.login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user doesnot exist"
            })
        }

        const isMatch=await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect password",
            })
        }
        const token=await user.generateToken();
const options={expires:new Date(Date.now()+90*24*60*60*1000),
    httpOnly:true,
}

        res.status(200).cookie("token",token,options).json({
            success:true,
            user,
            token,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
        
    }
}

exports.followUser=async(req,res)=>{
    try {

        const userToFollow=await User.findById(req.params.id);
        const loggedInUser=await User.findById(req.user._id);
        if(!userToFollow){
            return res.status(404).json({
                success:flase,
                message:"user not found"
            });

        }
        if(loggedInUser.followering.includes(userToFollow._id)){
         const indexfollowing= loggedInUser.followering.indexOf(userToFollow._id)
         loggedInUser.followering.splice(indexfollowing,1);
         
         const indexfollowers=userToFollow.followers.indexOf(loggedInUser._id);
         userToFollow.followers.splice(indexfollowers,1);

         await loggedInUser.save();
         await userToFollow.save();
         res.status(200).json({
            success:true,
            message:"User unfollowed",
        })
        }
        else{

            loggedInUser.followering.push(userToFollow._id);
            userToFollow.followers.push(loggedInUser._id);
    
            await loggedInUser.save();
            await userToFollow.save();
            res.status(200).json({
                success:true,
                message:"User followed",
            })
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}