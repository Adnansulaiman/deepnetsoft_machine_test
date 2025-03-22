const mongoose = require("mongoose");

// Define Schema
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  items:[{
    name: { type: String, },
    description: { type: String,},
    price: { type: Number,  },
  }],
});

// Create Model
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;