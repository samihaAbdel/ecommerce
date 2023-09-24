const express = require("express");
const router = express.Router();
const { addItemToCart } = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../middleware");

router.get("/test", requireSignin, userMiddleware, (req, res) => {
  res.status(200).send({ msg: "Bonjour Cart.js" });
});
router.post("/addtocart", requireSignin, userMiddleware, addItemToCart);
module.exports = router;
