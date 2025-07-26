const {
  addProduct,

  updateProduct,
  searchProduct,
} = require("../controller/productController");
const express = require("express");
const productModel = require("../models/productModel");

const productRouter = express.Router();
productRouter.get("/add", (req, res) => {
  res.render("addProduct");
});

productRouter.post("/add", addProduct);
productRouter.get("/updateForm/:id", async (req, res) => {
  const product = await productModel.findById(req.params.id);
  res.render("updateForm", { product });
});
productRouter.patch("/update/:id", updateProduct);

productRouter.post("/search", searchProduct);

productRouter.delete("/delete/:id", async (req, res) => {
  await productModel.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard");
});

module.exports = productRouter;
