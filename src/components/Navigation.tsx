"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Link,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
// import Link from "next/link";

export function Navigation() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <Flex
      py="20px"
      px="32px"
      bg="#EEF8FD"
      alignItems="center"
      justifyContent="space-between"
      h="80px"
    >
      <Box display="flex" alignItems="center" gap="32px">
        <Link href='/' ><Image h="36px" src="../images/logo.svg" alt="logo" /></Link>
        <Box display={{ lg: "flex", base: "none" }} gap="32px">
          <Link
          href='/blog'
            color="#95A6BD"
            fontSize="16px"
            fontWeight="500"
            lineHeight="normal"
          >
            Blog
          </Link>
          <Link
          href='/recipes'
            color="#95A6BD"
            fontSize="16px"
            fontWeight="500"
            lineHeight="normal"
          >
            Recipes
          </Link>
          <Link
          href='help'
            color="#95A6BD"
            fontSize="16px"
            fontWeight="500"
            lineHeight="normal"
          >
            Help
          </Link>
        </Box>
      </Box>
      <Button variant="ghost" ref={btnRef} onClick={onOpen}>
        <Image src="/images/hamburger.svg" alt="" display={{ lg: "none" }} />
      </Button>
      <Box display={{ lg: "flex", base: "none" }} alignItems="center" bg="#fff">
        <Link
          href="/login"
          color="#95A6BD"
          fontSize="16px"
          fontWeight="500"
          lineHeight="40px"
          px="16px"
          h="40px"
        >
          Already have an account? Log in
        </Link>
        <Button
          bg="#233345"
          color="#fff"
          borderRadius="24px"
          _hover={{ bg: "#3e5a7b" }}
          fontSize="13.672px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </Box>     
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt='40px' >
            <VStack>
              <Link
              href='/blog'
                color="#95A6BD"
                fontSize="16px"
                fontWeight="500"
                lineHeight="normal"
              >
                Blog
              </Link>
              <Link
              href='recipes'
                color="#95A6BD"
                fontSize="16px"
                fontWeight="500"
                lineHeight="normal"
              >
                Recipes
              </Link>
              <Link
              href='help'
                color="#95A6BD"
                fontSize="16px"
                fontWeight="500"
                lineHeight="normal"
              >
                Help
              </Link>
              <Button
                bg="#F5F8FC"
                color="#000"
                borderRadius="24px"
                _hover={{ bg: "#e4ecf7" }}
                fontSize="13.672px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                onClick={() => router.push("/login")}
                px='40px'
              >
                Log in
              </Button>
              <Button
                bg="#233345"
                color="#fff"
                borderRadius="24px"
                _hover={{ bg: "#3e5a7b" }}
                fontSize="13.672px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                px='40px'
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
