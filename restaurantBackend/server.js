const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectionDb= require('./middleware/connectionDb');

const app = express();

app.use(bodyParser);
app.use(cookieParser())
app.use(cors({
    origin:"",
    credentials:true,
    methods:["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ]
}))


connectionDb();