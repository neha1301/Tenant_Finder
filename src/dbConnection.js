const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.DB_URI).then(()=>{
    console.log('DB Connection Successful');
}).catch((err)=>{
    console.log("DB Connection Failed: ", err.message); 
});

