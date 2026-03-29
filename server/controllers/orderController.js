const orderService=require("../services/orderService");

 const placeOrder = async (req, res) => {
  try {
    const result = await orderService.placeOrder(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);

    if (err.message === "Cart is empty") {
      return res.status(400).json({ error: err.message });
    }

    res.status(500).json({ error: "Order failed" });
  }
};

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching orders" });
  }
};


module.exports = {
  placeOrder,
  getOrders,
};