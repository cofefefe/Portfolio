const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'})

const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.msocsev.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, 
    {
    useNewUrlParser:true,
    })
    .then(()=> console.log('Connected to mongodb'))
    .catch((error) => console.log('failed connexion to mongoDB, look error => ', error))