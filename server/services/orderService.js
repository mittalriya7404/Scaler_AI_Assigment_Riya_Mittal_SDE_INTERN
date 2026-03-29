const pool = require("../config/db");
const updateStock = require("./stockService");

const placeOrder = async ({ address }) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const cartResult = await client.query(`
      SELECT 
        cart_item.product_id,
        cart_item.quantity,
        product.price
      FROM cart_item
      JOIN product ON cart_item.product_id = product.id
    `);

    const cartItems = cartResult.rows;

    if (cartItems.length === 0) {
      throw new Error("Cart is empty");
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );

    const orderResult = await client.query(
      "INSERT INTO orders (address, total_amount) VALUES ($1, $2) RETURNING *",
      [address, total],
    );

    const order = orderResult.rows[0];

    // 🔥 STOCK UPDATE + ORDER ITEMS
    for (let item of cartItems) {
      // update stock safely
      await updateStock(client, item.product_id, item.quantity);

      // insert order item
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES ($1, $2, $3, $4)`,
        [order.id, item.product_id, item.quantity, item.price],
      );
    }

    await client.query("DELETE FROM cart_item");

    await client.query("COMMIT");

    return {
      message: "Order placed successfully",
      orderId: order.id,
    };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

const getOrders = async () => {
  try {
    const result = await pool.query(`
      SELECT 
        o.id AS order_id,
        o.total_amount,
        o.address,
        o.created_at,
        p.title,
        p.images,
        oi.quantity,
        oi.price
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN product p ON oi.product_id = p.id
      ORDER BY o.created_at DESC
    `);

    return result.rows;
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching orders");
  }
};

module.exports = {
  placeOrder,
  getOrders,
};
