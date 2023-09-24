const Category = require("../models/category");
const slugify = require("slugify");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.addCategory = async (req, res) => {
  try {
    const categoryObj = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };

    if (req.file) {
      categoryObj.categoryImage =
        process.env.API + "/public/" + req.file.filename;
    }

    if (req.body.parentId) {
      categoryObj.parentId = req.body.parentId;
    }

    const cat = await new Category(categoryObj);
    cat.save();
    return res.status(201).json({ msg: "Category is created:", cat });
  } catch (error) {
    return res.status(400).json({ msg: "Error", error });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const cat = await Category.find();
    if (cat) {
      const categoryList = createCategories(cat);
      res.status(200).send({ msg: " The categories:", categoryList });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
