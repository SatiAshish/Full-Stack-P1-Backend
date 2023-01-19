const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    },
    isPurchased:{
        type:Boolean
    }
})

module.exports = mongoose.model('groceryItem', groceryItemSchema);