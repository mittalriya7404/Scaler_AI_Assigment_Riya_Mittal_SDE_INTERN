const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const { get } = require("node:http");
const { getProductById, getAllProducts } = require("../controllers/productController");

// GET all products (with search + category filter)
router.get("/", getAllProducts);

// GET single product
router.get("/:id", getProductById);

module.exports = router;
