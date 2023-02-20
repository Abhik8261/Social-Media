const express=require('express');
const app=express();

if(process.env.NODE_ENV !=='production'){

    require('dotenv').config({path:'backend/config/config.env'})
}


//import routes
module.exports=app;