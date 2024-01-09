// Product.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAddToCart = (product) => {
    if (isItemInCart(product.id)) {
      return true;
    }

    setCartItems([...cartItems, product]);

    localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));

    return false;
  };

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "gray.100",
        },
      },
    },
  });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);

    fetchData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        padding={4}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default Product;
