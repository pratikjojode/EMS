const mongoose=require('mongoose')
const colors=require('colors')
// function fro mongoose
const connectDb= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected on ${mongoose.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`${error}`.bgRed);
    }
}


module.exports=connectDb