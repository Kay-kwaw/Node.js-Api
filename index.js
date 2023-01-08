
const fs = require('fs/promises');
//Express is a minimal and flexible node.js web application framework that provides set of roboust features for mobile applications and web applications
const express = require('express');
//Cors helps you access numberous functionalities on the web browser
//Cross origin resource sharing
const cors = require('cors');

//Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings,
const _ = require('lodash');
//To generate a unique identifier for posts
const {v4:uuid}= require('uuid');


//sETTING API 
const app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});
