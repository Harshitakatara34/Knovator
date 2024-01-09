import React from "react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p="4"
      bg="teal.500"
      color="white"
    >
      <Box>
        <Heading as="h1" fontSize="xl">
          Your Store
        </Heading>
      </Box>
      <Box>
        <Link to={"/cart"}>
          <IconButton
            icon={<FaShoppingCart />}
            aria-label="Shopping Cart"
            colorScheme="white"
            size="lg"
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
