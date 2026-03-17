const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectionDb= require('./middleware/connectionDb');

const app = express();

app.use(bodyParser);
app.use(cookieParser());
app.use(express.json());

connectionDb();
app.use(cors({
    origin:"http://localhost:5173/",
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
