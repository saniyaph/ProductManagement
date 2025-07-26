const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
  desc: String,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
