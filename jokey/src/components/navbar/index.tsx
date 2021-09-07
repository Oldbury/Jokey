import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Flex p="3">
      <Box>
        <Link href="/">
          <Heading size="md">Jokey</Heading>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link href="/random">Random Joke</Link>
        {/* <Button colorScheme="teal" mr="4">
      Sign Up
    </Button>
    <Button colorScheme="teal">Log in</Button> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
