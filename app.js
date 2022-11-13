
require(
    "dotenv"
).config()
const cors= require("cors")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const { default: mongoose } = require("mongoose");
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);

// Connect to MONGODB
mongoose.connect(process.env.MONGO_URI, () => {
	console.log(`Connected to Database!, ${process.env.MONGO_URI}`);
});

module.exports = app;
