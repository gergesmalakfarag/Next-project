import React from "react";
import ProductCard from "./ProductCard";

async function getProducts() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  const data = await res.json();
  return data.data;
}

export default async function About() {
  const allProducts = await getProducts();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {allProducts.slice(0, 9).map((product, index) => (
        <ProductCard key={product._id} product={product} index={index} />
      ))}
    </div>
  );
}
