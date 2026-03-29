const express = require("express");
const router = express.Router();

const { addToCart, getCartItems, updateCartItem, removeCartItem } = require("../controllers/cartController");

// Add to Cart
router.post("/add", addToCart);

// Get Cart Items (JOIN )
router.get("/", getCartItems); 

// Update Quantity
router.put("/:id", updateCartItem);

// Remove Item
router.delete("/:id", removeCartItem);

module.exports = router;
