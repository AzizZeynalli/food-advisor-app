import {  Box, Flex, VStack } from "@chakra-ui/react";
import Footer from "./Footer";
import { Navigation } from "./Navigation";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
      <Box>
        <Navigation />
        <Flex>{children}</Flex>
        <Footer/>
      </Box>
    );
  };