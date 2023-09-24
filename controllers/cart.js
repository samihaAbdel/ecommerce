const Cart = require("../models/Cart"); // Import the Cart model

module.exports.addItemToCart = async (req, res) => {
  try {
    const cartFind = await Cart.findOne({ user: req.user._id });
    if (cartFind) {
      //if cart exist we updated it by quantity
      const product = req.body.cartItems.product;
      const item = await cartFind.cartItems.find((c) => c.product == product);
      if (item) {
        const cartF = await Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: item.quantity + req.body.cartItems.quantity,
              },
            },
          }
        );
        if (cartF) {
          return res.status(201).json({ cart: cartF });
        }
      } else {
        const cartF = await Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        );
        if (cartF) {
          return res.status(201).json({ cart: cartF });
        }
      }

      // res.status(200).json({ msg: "coucou je suis la" });
    } else {
      // if dont exists we create it
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      const cartAdded = await cart.save();

      if (cartAdded) {
        return res.status(201).json({ cartAdded });
      }
    }
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to add item to cart", details: error.message });
  }
};
