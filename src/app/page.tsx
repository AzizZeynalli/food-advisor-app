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
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import BalancedRecipes from "@/components/homepagecomponents/BalancedRecipes";
import DietPlan from "@/components/homepagecomponents/DietPlan";
import { Stories } from "@/components/homepagecomponents/Stories";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <VStack>
        <HStack
          pt="62px"
          w="100%"
          bgImage={{ base: "none", md: "../images/bghome.png" }}
          bgColor={{ base: "#eef8fd", md: "none" }}
          justifyContent="space-around"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <VStack w={{ base: "80%", md: "50%" }} textAlign="center" pb="36px">
            <Heading pb="16px" fontSize="40px" fontWeight="500">
              Cook, Share, Savor!
            </Heading>
            <Text pb="40px" fontSize="20px" fontWeight="400">
              Kickstart Your Path to a Healthier, Happier You!.
            </Text>
            <Button
              p="25px 100px"
              borderRadius="500px"
              color="white"
              bg="#233345"
              _hover={{ color: "#233345", backgroundColor: "white" }}
              onClick={() => {
                router.push("/");
              }}
            >
              Start now
            </Button>
          </VStack>
          <Image src="../images/iPhone14.png" pb="12px"></Image>
        </HStack>
        <BalancedRecipes />
        <DietPlan />
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
        <Stories/>
      </VStack>
    </Layout>
  );
}
