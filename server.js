const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/posts');
require('dotenv/config')

//Middelware:
app.use(express.json());

//Connect to db:
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true},()=>console.log('connected to DB'));


//Routes;
app.get('/', (req, res)=>{
    res.send('Home Sweet Home')
});

app.use('/posts', router)


//listen to server
app.listen(4000, (err)=>{
    if(err){
        throw err
    }else{
        console.log("SERVER IS UP")
    }
});