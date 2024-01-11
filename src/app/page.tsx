'use client'

import { Layout } from "@/components";
import CardHome from "@/components/CardHome";
import CardPlan from "@/components/CardPlan";
import { Image, Text, HStack, VStack, Heading, Button, Grid, GridItem} from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";
import Slider from 'react-slick';



export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768, 
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <Layout>
      <VStack>
      <HStack
      pt='62px'
      w='100%'
      bgImage={{base:"none", md:"../images/bghome.png"}}
      bgColor={{base:"#eef8fd", md:"none"}}
      justifyContent='space-around'
      alignItems='center'
      flexDirection={{base:"column", md:"row"}}>
        <VStack 
        w={{base:"80%", md:"50%"}}
        textAlign='center'
        pb='36px'>
          <Heading 
          pb='16px'
          fontSize='40px'
          fontWeight='500'>Cook, Share, Savor!</Heading>
          <Text 
          pb='40px'
          fontSize='20px'
          fontWeight='400'
          >Kickstart Your Path to a Healthier, Happier You!.</Text>
          <Button 
          p='20px 70px' 
          borderRadius="500px" 
          color='white' 
          bg='#233345' 
          _hover={{ color: '#233345', backgroundColor: "white"}}
          onClick={() => {
            router.push("/");
          }} >
          Start</Button>
        </VStack>
        <Image src="../images/iPhone14.png" pb='12px'></Image>
      </HStack>

      <HStack 
      flexDirection='row'
      justifyContent='space-between'
      mt='64px'>
          <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
              justifyContent='center'
              display={{ base: "none", md: "grid" }}
            >
              <GridItem>
                <CardHome imageUrl="../images/home1.png" cardText="Avocado toast with egg" cardTime="15 min" />
              </GridItem>
              <GridItem>
                <CardHome imageUrl="../images/home2.png" cardText="Yoghurt with mixed fruits" cardTime="5 min" />
              </GridItem>
              <GridItem>
                <CardHome imageUrl="../images/home3.png" cardText="Chicken breast & kale" cardTime="15 min" />
              </GridItem>
              <GridItem>
                <CardHome imageUrl="../images/home4.png" cardText="Fig & chickpeas salad" cardTime="15 min" />
              </GridItem>
            </Grid>
            {/* <Slider {...settings}>
              <CardHome imageUrl="../images/home1.png" cardText="Avocado toast with egg" cardTime="15 min" />
              <CardHome imageUrl="../images/home2.png" cardText="Yoghurt with mixed fruits" cardTime="5 min" />
              <CardHome imageUrl="../images/home3.png" cardText="Chicken breast & kale" cardTime="15 min" />
              <CardHome imageUrl="../images/home4.png" cardText="Fig & chickpeas salad" cardTime="15 min" />
            </Slider> */}
          <VStack
          textAlign='center'
          gap='12px'
          p="12px 52px">
            <Text 
            fontSize='30px'
            fontWeight='500'>Get daily inspiration with balanced recipes</Text>
            <Text
            fontSize='20px'
            fontWeight='400'>Our quick and easy recipes are on the table in no time! All recipes are validated by our team of dietitians.</Text>
          </VStack>
      </HStack>

      <HStack
      flexDirection='row'
      alignItems='center'
      mt="64px"
      justifyContent='space-between'>
        <VStack
          textAlign='center'
          gap='12px'
          p="12px 52px">
            <Text 
            fontSize='30px'
            fontWeight='500'>Choose a diet plan adapted to your needs</Text>
            <Text
            fontSize='20px'
            fontWeight='400'>Find the program that suits you and get sustainable results. Choose from over 15 nutritional plans!</Text>
        </VStack>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap="24px" display={{ base: "none", md: "grid" }}>
            <GridItem>
                <CardPlan imagePng="../images/calendar.png" cardHeading="Keto Diet" cardMain="Most popular for weight loss" />
            </GridItem>
            <GridItem>
                <CardPlan imagePng="../images/meal.png" cardHeading="Meal planning" cardMain="Most popular for lifestyle" />
            </GridItem>
            <GridItem>
                <CardPlan imagePng="../images/bulk.png" cardHeading="Bulk Up" cardMain="Most popular for sport" />
            </GridItem>
            <GridItem>
                <CardPlan imagePng="../images/carb.png" cardHeading="Low Carb" cardMain="Most popular for weight loss" />
            </GridItem>
        </Grid>

      </HStack>
      </VStack>
      

    </Layout>
  )
}