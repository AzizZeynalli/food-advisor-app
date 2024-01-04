'use client'

import { Layout } from "@/components";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <Box>
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
    </Layout>
  )
}