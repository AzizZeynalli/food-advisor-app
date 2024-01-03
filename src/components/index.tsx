import {  Flex, VStack } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
      <VStack justifyContent="space-between" gap='0'>
        <Header/>
        <Flex>{children}</Flex>
        <Footer/>
      </VStack>
    );
  };