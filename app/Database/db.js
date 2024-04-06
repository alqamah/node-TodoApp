require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMongoose =()=>{
  mongoose.connect(process.env.mongourl,
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> Todo App"))
  .catch((e)=>console.log("Mongodb Connection Error"))
}