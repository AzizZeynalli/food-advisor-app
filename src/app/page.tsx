"use client";

import { Layout } from "@/components";
import {
  Image,
  Text,
  HStack,
  VStack,
  Heading,
  Button,
  Grid,
  GridItem,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import BalancedRecipes from "@/components/homepagecomponents/BalancedRecipes";
import DietPlan from "@/components/homepagecomponents/DietPlan";
import { Stories } from "@/components/homepagecomponents/Stories";

export default function Home() {
  const router = useRouter();

  const buttonHoverStyles = useBreakpointValue({
    base: { color: "#233345", backgroundColor: "white" },
    md: { color: "white", backgroundColor: "#233345" },
  });
  
  return (
    <Layout>
      <VStack>
        <HStack
          pt="62px"
          w="100%"
          bgImage={{ base: "none", md: "../images/startnow.png" }}
          bgColor={{ base: "#eef8fd", md: "none" }}
          justifyContent='space-between'
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack w={{ base: "80%", md: "50%" }} textAlign="left" pb="36px" color={{base:"black", md:"white"}}>
            <Heading pb="16px" fontSize="40px" fontWeight="500">
              Cook, Share, Savor!
            </Heading>
            <Text pb="40px" fontSize="20px" fontWeight="400">
              Kickstart Your Path to a Healthier, Happier You!.
            </Text>
            <Button
              p="25px 100px"
              borderRadius="500px"
              color={{base:"white", md:"#233345"}}
              bg={{base:"#233345", md:"white"}}
              _hover={buttonHoverStyles}
              onClick={() => {
                router.push("/");
              }}
            >
              Start now
            </Button>
          </VStack>
          <Image 
          src="../images/iPhone14.png" pb="12px" pr='40px'
          display={{base:"none", xl:"flex"}}></Image>
        </HStack>
        <BalancedRecipes />
        <DietPlan />
        <Box
        h={{base:"100xp", md:"500px"}}
        w='100%'
        bgImage="../images/blueback.png"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        display='flex'
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
          <Button
          p="25px 100px"
          borderRadius="500px"
          color="white"
          bg="#233345"
          m='100px 0'
          _hover={{ color: "#233345", backgroundColor: "white" }}
          onClick={() => {
            router.push("/");
          }}
        >
          Start now
        </Button>
        </Box>
        
        <Stories/>
      </VStack>
    </Layout>
  );
}
