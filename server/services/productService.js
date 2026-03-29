const pool = require("../config/db");

 const getAllProducts = async ({ search, category }) => {
  let query = "SELECT * FROM product WHERE 1=1";
  let values = [];
  let index = 1;

  // 🔍 search
  if (search) {
    query += ` AND title ILIKE $${index}`;
    values.push(`%${search}%`);
    index++;
  }

  // 📦 category
  if (category) {
    query += ` AND category ILIKE $${index}`;
    values.push(category);
    index++;
  }

  const result = await pool.query(query, values);
  return result.rows;
};

 const getProductById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM product WHERE id = $1",
    [id]
  );

  return result.rows[0] || null;
};

module.exports = {
  getAllProducts,
  getProductById,
};  