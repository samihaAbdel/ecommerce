const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
module.exports.createProduct = async (req, res) => {
  try {
    // res.status(200).json({ file: req.files, body: req.body });
    const { name, price, description, category, quantity, createdBy } =
      req.body;
    let productPictures = [];
    if (req.files.length > 0) {
      productPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }
    const product = new Product({
      name: name,
      slug: slugify(name),
      price,
      description,
      productPictures,
      category,
      quantity,
      createdBy: req.user._id,
    });
    await product.save();
    return res.status(200).send({ product });
  } catch (error) {
    return res.status(400).send(error);
  }
};
