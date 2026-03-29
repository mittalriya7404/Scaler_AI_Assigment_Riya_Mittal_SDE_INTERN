const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const { placeOrder, getOrders } = require("../controllers/orderController");

// 🛒 Place Order
router.post("/", placeOrder);
router.get("/getOrder", getOrders);

module.exports = router; 