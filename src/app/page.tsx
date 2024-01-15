"use client";

import { Layout } from "@/components";
import BalancedRecipes from "@/components/homepagecomponents/BalancedRecipes";
import DietPlan from "@/components/homepagecomponents/DietPlan";
import { Stories } from "@/components/homepagecomponents/Stories";
import {
  Image,
  Text,
  HStack,
  VStack,
  Heading,
  Button,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const button1HoverStyles = useBreakpointValue({
    base: { color: "#233345", backgroundColor: "white" },
    md: { color: "white", backgroundColor: "#233345" },
  });

  return (
    <Layout>
      <VStack>
        <HStack
          pt="62px"
          w="100%"
          bgImage={{ base: "none", md: "../images/bghime.png" }}
          bgColor={{ base: "#eef8fd", md: "none" }}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          justifyContent={{ base: "center", xl: "space-between" }}
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack pb="36px" color="black" pl={{ base: "none", xl: "200px" }}>
            <Heading pb="16px" fontSize="40px" fontWeight="500">
              Cook, Share, Savor!
            </Heading>
            <Text pb="40px" fontSize="20px" fontWeight="400">
              Kickstart Your Path to a Healthier, Happier You!.
            </Text>
            <Button
            p='20px 80px'
              bg="#233345"
              color="#fff"
              borderRadius="24px"
              _hover={{ bg: "#3e5a7b" }}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              onClick={() => router.push("/recipes")}
            >
              Start now
            </Button>
          </VStack>
          <Image
            src="../images/iPhone14.png"
            pb="12px"
            pr="40px"
            display={{ base: "none", xl: "flex" }}
            alt=""
          />
        </HStack>
        <BalancedRecipes />
        <DietPlan />
        <VStack bg="#EEF8FD"  textAlign="center" gap="60px" p="64px 52px">
          <Heading fontSize="30px" fontWeight="500" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
          <Text fontSize="20px" fontWeight="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text>
          <Image src="../images/image 5.png"/>
          <Button
            p='20px 80px'
              bg="#233345"
              color="#fff"
              borderRadius="24px"
              _hover={{ bg: "#3e5a7b" }}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              onClick={() => router.push("/areasp")}
            >
              Start now
            </Button>
        </VStack>
        <Stories />
      </VStack>
    </Layout>
  );
}
