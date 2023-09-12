const express = require("express");
const Category = require("../models/category.js");
const slugify = require("slugify");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
    const cat = await new Category(categoryObj);
    cat.save();
    return res.status(201).json({ msg: "Category is created:", cat });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
