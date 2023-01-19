const groceryItem = require("../models/groceryItems");

// Add item
exports.addItem = async(req,res) =>{
    try{
        const item = new groceryItem(req.body);
        const creatItem = await item.save();
        res.status(200).send(creatItem);
    }catch(err){
        res.status(400).send(err)
    }
};

// Get Items

exports.getItems = async(req, res) =>{
    try{
        const items = await groceryItem.find();
        res.status(200).send(items);
    }catch(err){
        res.status(400).send(err);
    }
}

// Delete Item

exports.deleteItem = async(req, res) =>{
    try{
        const deleteItem = await groceryItem.findByIdAndDelete(req.params.id);
        res.status(200).send("Item deleted successfully");
    }catch(err){
        res.status(400).send(err);
    }
}