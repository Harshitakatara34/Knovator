import React, { useState, useEffect } from "react";
import { Image, Box, Flex, CSSReset, Heading } from "@chakra-ui/react";
import OrderForm from "./OrderForm";
import { Text } from "@chakra-ui/react";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <CSSReset />
      <Box minH="100vh" p="4" bg="gray.100">
        <Flex>
          <Box flex="2">
            <Heading>Cart Page</Heading>
            <Flex flexWrap="wrap" justifyContent="space-between" mt={"10px"}>
              {cartItems.map((item) => (
                <Box key={item.id} m="2" maxW="100px">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <Text fontSize="lg">{item.name}</Text>
                  <Text fontSize="lg">₹{item.price}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
          <Box flex="1" ml="4">
            <OrderForm />
          </Box>
        </Flex>
        <Heading>Total Price: ₹{calculateTotalPrice()}</Heading>
      </Box>
    </>
  );
};

export default Cart;
