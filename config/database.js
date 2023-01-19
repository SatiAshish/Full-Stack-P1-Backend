const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Grocery-App").then( () =>{
    console.log("Database connectade successfuly");
}).catch( (err)=>{
    console.log("No connecction");
})