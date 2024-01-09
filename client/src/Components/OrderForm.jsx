import React, { useState } from "react";
import axios from "axios";
import { Input, Button, useToast, Box, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const OrderForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const toast = useToast();

  const placeOrder = async () => {
    try {
      if (!firstName || !lastName || !address) {
        toast({
          title: "Please fill in all required fields.",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      const fullCart = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      setCart(fullCart);
      const response = await axios.post(
        "http://localhost:3001/api/place-order",
        {
          firstName,
          lastName,
          address,
          cart,
        }
      );
      toast({
        title: response.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      localStorage.removeItem("cartItems");
      setOrderPlaced(true);
      setFirstName("");
      setLastName("");
      setAddress("");
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  return (
    <Box>
      <Heading>Order Form</Heading>
      {orderPlaced ? (
        navigate("/placed")
      ) : (
        <Box>
          <Input
            mb="3"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            mb="3"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            mb="3"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button colorScheme="teal" onClick={placeOrder}>
            Place Order
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default OrderForm;
