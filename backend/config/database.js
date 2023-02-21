const mongoose=require('mongoose');


exports.connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI)
    .then((con)=>console.log(`Database connected: ${con.connection.host}`))
    .catch((err)=> console.log(err));
}
mongoose.set('strictQuery', false);