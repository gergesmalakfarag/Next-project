"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 12px 25px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f9f9f9",
      }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
    >
      <img
        src={product.imageCover}
        alt={product.title}
        style={styles.image}
      />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.description}>
        {product.description?.slice(0, 100)}...
      </p>
      <p style={styles.price}>Price: {product.price} EGP</p>
      <p style={styles.rating}>Rating: {product.ratingsAverage} ⭐</p>
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  title: {
    fontSize: "20px",
    margin: "10px 0 5px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  price: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  rating: {
    color: "#f39c12",
  },
};
