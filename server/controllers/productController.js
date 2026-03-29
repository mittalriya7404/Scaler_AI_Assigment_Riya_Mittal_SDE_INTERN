const productService =require("../services/productService");

 const getAllProducts = async (req, res) => {
  try {
    const data = await productService.getAllProducts(req.query);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching products" });
  }
};

 const getProductById = async (req, res) => {
  try {
    const data = await productService.getProductById(req.params.id);

    if (!data) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching product" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};