const pool = require("../config/db");

 const addToCart = async ({ productId, quantity }) => {
  const existing = await pool.query(
    "SELECT * FROM cart_item WHERE product_id = $1",
    [productId]
  );

  if (existing.rows.length > 0) {
    const item = existing.rows[0];

    const updated = await pool.query(
      "UPDATE cart_item SET quantity = quantity + $1 WHERE id = $2 RETURNING *",
      [quantity, item.id]
    );

    return updated.rows[0];
  }

  const result = await pool.query(
    "INSERT INTO cart_item (product_id, quantity) VALUES ($1, $2) RETURNING *",
    [productId, quantity]
  );

  return result.rows[0];
};

 const getCartItems = async () => {
  const result = await pool.query(`
    SELECT 
      c.id,
      c.quantity,
      p.id AS product_id,
      p.title,
      p.price,
      p.images
    FROM cart_item c
    JOIN product p ON c.product_id = p.id
  `);

  return result.rows;
};

 const updateCartItem = async (id, quantity) => {
  const result = await pool.query(
    "UPDATE cart_item SET quantity = $1 WHERE id = $2 RETURNING *",
    [quantity, id]
  );

  return result.rows[0];
};

 const removeCartItem = async (id) => {
  await pool.query("DELETE FROM cart_item WHERE id = $1", [id]);

  return { message: "Item removed" };
};

module.exports = {
  addToCart,
  getCartItems, 
    updateCartItem,
    removeCartItem,
};