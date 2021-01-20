const mongoose =require('mongoose');
require('dotenv').config()

function connectDB() {
   
    mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, err => {
        err ? console.log(err) : console.log('DB is connected successfully');
    });
}
module.exports=connectDB;