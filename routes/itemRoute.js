const express = require('express');
const { addItem, getItems, deleteItem, purchasedItem } = require('../controller/itemController');

const router = express.Router();



router.route("/grocery/add").post(addItem);
router.route("/grocery/getAll").get(getItems);
router.route("/grocery/deleteItem/:id").delete(deleteItem);

module.exports = router;