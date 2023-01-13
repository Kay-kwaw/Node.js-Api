
const fs = require('fs/promises');
//Express is a minimal and flexible node.js web application framework that provides set of roboust features for mobile applications and web applications
const express = require('express');
//Cors helps you access numberous functionalities on the web browser
//Cross origin resource sharing
const cors = require('cors');

//Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings,
const _ = require('lodash');
//To generate a unique identifier for posts
const { v4: uuid }= require('uuid');
//sETTING API 
const app = express();
//A mdiddleware function to support JSON 

app.use(express.json());


app.get("/outfit", (req, res) => {
    const weekdays = ["monday", "tuesday","wednesday", "thursday", "friday", "saturday", "sunday"]
    const cars = ["poche","benz 300","corolla","Range rover","camry","accent","Land rover","opel"]
    const wears = ["whites","blue","green","black","yellow","purple","indingo","purple"]
    const shoes = ["whites","blue","green","black","yellow","purple","indingo","purple"]
    
    res.json({
        weekdays: _.sample(weekdays),
        cars: _.sample(cars),
        wears: _.sample(wears),
        shoes: _.sample(shoes)
    })
});
//Defining a get endpoint for the comments section
//What this function does is basically does is to grab the id and return the comment

app.get("/comments/:id", async (req, res) => {
    const id = req.params.id;
    let content; 

    try{
        content = await fs.readFile(`data/comments/${id}.txt`, 'utf-8');
    }catch(err){
        return res.sendStatus(404);
    }

    res.json({
        content:content
    });
});



app.post('/comments',async (req, res) => {
    const id = uuid(); 
    const content = req.body.content;
    if (!content) {
        return res.status(400);
    }
    await fs.mkdir("data/comments", {recursive: true});
    await fs.writeFile(`data/comments/${id}.txt`, content);

    res.status(201).json({
        id: id,
        
    })


});
 


app.listen(3000, () =>{
    console.log('API Server is running on port 3000');
});
