const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;
var localDB = 'mongodb://localhost:27017/evoai_admin'; 
const MONGOLAB_URI = "mongodb+srv://admin:admin@123@cluster0-b8bnt.mongodb.net/binanceDB?retryWrites=true&w=majority"
mongoose.connect(MONGOLAB_URI, { useCreateIndex: true, useNewUrlParser: true });



