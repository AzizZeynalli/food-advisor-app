'use client'

import { Layout } from "@/components";
import CardHome from "@/components/CardHome";
import { Box, Image, Text, Button, HStack, VStack, Card} from "@chakra-ui/react";
import Link from "next/link";


export default function Home() {
  return (
    <Layout>
      <Box display='none'>
        <Box position='relative'>
          <Image src="../images/mainback.jpeg"  />
          <Box position='absolute' top='25%' left='25%' textAlign='center'>
            <Text fontSize='40px' fontWeight='500' mb='16px'>Your personal nutrition guide</Text>
            <Text fontSize='20px' fontWeight='400' mb='40px'>Get your personalized program and start your journey to a healthier, happier you.</Text>
            <Button p='17px 70px' borderRadius="500px" color='white' fontSize='18px' fontWeight='600' mb='50px' bg='#233345' _hover={{ color: '#233345', backgroundColor: "white"}} ><Link href={"/signup"}>Start now</Link></Button>
            <Text fontWeight='800' fontSize='30px'>SIMPLE RECIPES MADE FOR   <span style={{ color: '#276749' }}>real, actual, everyday life.</span></Text>
          </Box>
        </Box>
      </Box>
      <HStack 
      flexDirection={{base:"column", md: "row"}} 
      justifyContent='space-between'>
          <VStack  
          order={{base: "2", sm: "1"}}
          textAlign='center'
          gap='12px'>
            <Text 
            fontSize='30px'
            fontWeight='500'>Get daily inspiration with balanced recipes</Text>
            <Text
            fontSize='20px'
            fontWeight='400'>Our quick and easy recipes are on the table in no time! All recipes are validated by our team of dietitians.</Text>
          </VStack>
          <HStack flexWrap='wrap'>
            <CardHome imageUrl="../images/home1.png" cardText="Avocado toast with egg" cardTime="15 min"/>
            <CardHome imageUrl="../images/home2.png" cardText="Yoghurt with mixed fruits" cardTime="5 min"/>
            <CardHome imageUrl="../images/home3.png" cardText="Chicken breast & kale" cardTime="15 min"/>
            <CardHome imageUrl="../images/home4.png" cardText="Fig & chickpeas salad" cardTime="15 min"/>
          </HStack>
      </HStack>
    </Layout>
  )
}