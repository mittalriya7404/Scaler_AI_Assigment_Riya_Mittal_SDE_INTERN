const pool = require("../config/db");

// 🔥 update stock for single product
 const updateStock = async (client, productId, quantity) => {
  const result = await client.query(
    `UPDATE product
     SET stock = stock - $1
     WHERE id = $2 AND stock >= $1
     RETURNING *`,
    [quantity, productId]
  );

  if (result.rowCount === 0) {
    throw new Error(`Product ${productId} is out of stock`);
  }

  return result.rows[0];
};

module.exports = updateStock;