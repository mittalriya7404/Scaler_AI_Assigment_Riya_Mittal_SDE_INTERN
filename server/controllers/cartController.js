const cartService=require("../services/cartService");

 const addToCart = async (req, res) => {
  try {
    const data = await cartService.addToCart(req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

 const getCartItems = async (req, res) => {
  try {
    const data = await cartService.getCartItems();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

 const updateCartItem = async (req, res) => {
  try {
    const data = await cartService.updateCartItem(
      req.params.id,
      req.body.quantity
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

 const removeCartItem = async (req, res) => {
  try {
    const data = await cartService.removeCartItem(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  removeCartItem,
};