"use client";

import { Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import CardPlan from "@/components/homepagecomponents/CardPlan";
import { SliderPlan } from "@/components/homepagecomponents/SliderPlan";

export default function DietPlan() {
  return (
    <HStack
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      mt="64px"
      justifyContent="space-between"
    >
      <VStack textAlign="center" gap="12px" >
        <Text fontSize="30px" fontWeight="500">
          Choose a diet plan adapted to your needs
        </Text>
        <Text fontSize="20px" fontWeight="400">
          Find the program that suits you and get sustainable results. Choose
          from over 15 nutritional plans!
        </Text>
      </VStack>
      <SliderPlan/>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="24px"
        display={{ base: "none", md: "grid" }}
      >
        <GridItem>
          <CardPlan
            imagePng="../images/calendar.png"
            cardHeading="Keto Diet"
            cardMain="Most popular for weight loss"
          />
        </GridItem>
        <GridItem>
          <CardPlan
            imagePng="../images/meal.png"
            cardHeading="Meal planning"
            cardMain="Most popular for lifestyle"
          />
        </GridItem>
        <GridItem>
          <CardPlan
            imagePng="../images/bulk.png"
            cardHeading="Bulk Up"
            cardMain="Most popular for sport"
          />
        </GridItem>
        <GridItem>
          <CardPlan
            imagePng="../images/carb.png"
            cardHeading="Low Carb"
            cardMain="Most popular for weight loss"
          />
        </GridItem>
      </Grid>
    </HStack>
  );
}
