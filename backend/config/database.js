const mongoose=require('mongoose');

connectDatabase();
exports.connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI)
    .then((con)=>console.log(`Database connected: ${con.connection.host}`))
    .catch((err)=> console.log(err));
}