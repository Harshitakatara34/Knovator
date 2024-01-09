
import React from 'react';
import { Box, Image, Text, Button, useToast } from '@chakra-ui/react';

const ProductCard = ({ product, onAddToCart }) => {
  const toast = useToast();

  const handleAddToCart = () => {
    const isItemInCart = onAddToCart(product);

    if (isItemInCart) {
      toast({
        title: `${product.name} is already in the cart`,
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: `${product.name} added to cart`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      key={product.id}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      boxShadow="md"
      margin="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: 'scale(1.1)' }}
    >
      <Image src={product.image} alt={product.name} objectFit="cover" height="200px" />
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold">
          {product.name}
        </Text>
        <Text fontSize="md" color="gray.600">
          ₹{product.price}
        </Text>
        <Button colorScheme="blue" onClick={handleAddToCart} mt="4">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
