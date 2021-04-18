const dotenv = require('dotenv');
dotenv.config();

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log(`Your API key is ${process.env.API_KEY}`);
const fetch = require ('node-fetch')
const https = require('follow-redirects').https;
const fs = require('fs');
const validator = require('validator');


//
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//const bodyParser = require('body-parser')


const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/addData', async (req, res) =>{
    //const baseUrl = process.env.API_ID;
    const APIKey = process.env.API_KEY;
    console.log(req.body);
    
    const request = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${APIKey}&lang=en&of=json&txt=${req.body.input}`)
    console.log(request);
    
    try {
        const data = await request.json();
        res.send(data);
    } catch (error) {
        console.log("error", error);
        }
})

