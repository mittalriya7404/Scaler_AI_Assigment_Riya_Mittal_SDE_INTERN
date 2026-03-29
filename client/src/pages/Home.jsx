// src/pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");

    let url = "https://scaler-ai-assigment-riya-mittal-sde.onrender.com/products";

    const query = [];

    if (search) query.push(`search=${search}`);
    if (category) query.push(`category=${category}`);

    if (query.length > 0) {
      url += `?${query.join("&")}`;
    }

    axios.get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));

  }, [category, location.search]); // 🔥 BOTH dependencies

  return (
    <div className="max-w-[1200px] mx-auto">
      <CategoryBar setCategory={setCategory} category={category} />
      <Banner  setCategory={setCategory}/>
      <Products products={products} />
    </div>
    
  );
}
