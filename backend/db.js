const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/TanzNotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectMongo = () =>{
        mongoose.connect(mongoURI,()=>{
            console.log("Connected to Mongo Successfully");
        })
}
module.exports = connectMongo