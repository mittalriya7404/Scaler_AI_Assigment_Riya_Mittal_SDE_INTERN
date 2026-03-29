const express = require("express");
const cors= require("cors");
const app = express();


const productRoutes = require("./routes/productRoutes"); 
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});


app.use("/order", orderRoutes);


app.use("/products", productRoutes);

app.use("/cart", cartRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});