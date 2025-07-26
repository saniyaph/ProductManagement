const productModel = require("../models/productModel");

const addProduct = async (req, res) => {
  try {
    const { name, category, price, quantity, desc } = req.body;
    await productModel.create({ name, category, price, quantity, desc });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  const { name, category, price, quantity, desc } = req.body;
  await productModel.findByIdAndUpdate(req.params.id, {
    name,
    category,
    price,
    quantity,
    desc,
  });
  res.redirect("/dashboard");
};

const searchProduct = async (req, res) => {
  try {
    
    const search = req.body.search;
    const product = await productModel.findOne({
      name: { $regex: search, $options: "i" },
    });
    if (product) {
      res.render("search_product", { product, message: null });
    } else {
      res.render("search_product", { product, message: "no such product" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProduct, updateProduct, searchProduct };
