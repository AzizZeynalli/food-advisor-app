"use client";

import { Layout } from "@/components";
import CardHome from "@/components/homepagecomponents/CardHome";
import CardPlan from "@/components/homepagecomponents/CardPlan";
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
            bg="#EEF8FD"
            justifyContent="space-around"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack w={{ base: "80%", md: "50%" }} textAlign="center" pb="36px">
              <Heading pb="16px" fontSize="40px" fontWeight="500">
                Your personal nutrition guide
              </Heading>
              <Text pb="40px" fontSize="20px" fontWeight="400">
                Get your personalized program and start your journey to a
                healthier, happier you.
              </Text>
              <Button
                p="20px 70px"
                borderRadius="500px"
                color="white"
                bg="#233345"
                _hover={{ color: "#233345", backgroundColor: "white" }}
              >
                <Link href={"/signup"}>Start now</Link>
              </Button>
            </VStack>
            <Image src="../images/phone.svgl" alt="" pb="12px"></Image>
            <Image
              display={{ base: "none", md: "flex" }}
              src="../images/guakka.svg"
              right="30px"
              bottom="30px"
              alt=""
            ></Image>
          </HStack>

          <HStack
            flexDirection={{ base: "column", md: "row-reverse" }}
            justifyContent="space-between"
            mt={{ base: "64px", md: "0" }}
          >
            <VStack
              textAlign="center"
              gap="12px"
              p={{ base: "12px 52px", md: "0" }}
              w={{ base: "100%", md: "50%" }}
            >
              <Text
                w={{ base: "100%", md: "50%" }}
                fontSize="30px"
                fontWeight="500"
              >
                Get daily inspiration with balanced recipes
              </Text>
              <Text
                w={{ base: "100%", md: "50%" }}
                fontSize="20px"
                fontWeight="400"
              >
                Our quick and easy recipes are on the table in no time! All
                recipes are validated by our team of dietitians.
              </Text>
            </VStack>
            <HStack
              flexWrap="wrap"
              w={{ base: "100%", md: "50%" }}
              justifyContent="center"
            >
              <CardHome
                imageUrl="../images/home1.png"
                cardText="Avocado toast with egg"
                cardTime="15 min"
              />
              <CardHome
                imageUrl="../images/home2.png"
                cardText="Yoghurt with mixed fruits"
                cardTime="5 min"
              />
              <CardHome
                imageUrl="../images/home3.png"
                cardText="Chicken breast & kale"
                cardTime="15 min"
              />
              <CardHome
                imageUrl="../images/home4.png"
                cardText="Fig & chickpeas salad"
                cardTime="15 min"
              />
            </HStack>
          </HStack>

          <HStack
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            mt={{ base: "64px", md: "0" }}
            justifyContent="space-between"
          >
            <VStack
              textAlign="center"
              gap="12px"
              w={{ base: "100%", md: "50%" }}
            >
              <Text
                w={{ base: "100%", md: "50%" }}
                fontSize="30px"
                fontWeight="500"
              >
                Choose a diet plan adapted to your needs
              </Text>
              <Text
                w={{ base: "100%", md: "50%" }}
                fontSize="20px"
                fontWeight="400"
              >
                Find the program that suits you and get sustainable results.
                Choose from over 15 nutritional plans!
              </Text>
            </VStack>
            <HStack flexWrap="wrap" gap="24px" w={{ base: "100%", md: "50%" }}>
              <CardPlan
                imagePng="../images/calendar.png"
                cardHeading="Keto Diet"
                cardMain="Most popular for weight loss"
              />
              <CardPlan
                imagePng="../images/meal.png"
                cardHeading="Meal planning"
                cardMain="Most popular for lifestyle"
              />
              <CardPlan
                imagePng="../images/bulk.png"
                cardHeading="Bulk Up"
                cardMain="Most popular for sport"
              />
              <CardPlan
                imagePng="../images/carb.png"
                cardHeading="Low Carb"
                cardMain="Most popular for weight loss"
              />
            </HStack>
          </HStack>
        </VStack>
      </Layout>
  );
}
