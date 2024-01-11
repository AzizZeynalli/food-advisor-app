import { HStack, Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() { 

    const router = useRouter();
    const mailto = "mailto:contact@fooderra.az";


    return (
       <HStack 
        bg='#233345' 
        w='100%' 
        justifyContent='space-around' 
        alignItems='center'
        p='28px 0'
        flexDirection={{ base: "column", md: "row" }}
        width='100%'>
        
            <VStack textAlign='center'>
                <Image
                onClick={() => {
                    router.push("/");
                  }}
                src="../images/white_logo.svg" alt="Logo"/>
                <Text 
                color='white' 
                fontWeight='400' 
                fontSize='16px'>© 2023 fooderra.az</Text>
            </VStack>
            <HStack 
            justifyContent='space-around' 
            w='50%' 
            color='white' 
            fontWeight='400' 
            fontSize={{base: "13px", md: "16px"}}
            flexDirection={{ base: "column", md: "row" }}
            gap='20px'>
                <VStack 
                alignItems={{ base: "center", md: "flex-start" }} >
                    <Text fontSize='20px' fontWeight='600'>About Fooderra</Text>
                    <Text onClick={() => {
                    router.push("/blog");
                    }}
                    >Blog</Text>
                    <Text onClick={() => {
                    router.push("/recipes");
                    }}
                    >Recipes</Text>
                    <Text onClick={() => {
                    router.push("/areas");
                    }}
                    >Areas</Text>
                    <Text onClick={() => {
                    router.push("/categories");
                    }}
                    >Categories</Text>
                    <Text onClick={() => {
                    router.push("/termsandconditions");
                    }}
                    >Terms and Conditions</Text>
                </VStack>
                <VStack 
                gap='8px'
                alignItems={{ base: "center", md: "flex-start" }}>
                    <Text fontSize='20px' fontWeight='600'>Contact us</Text>
                    <Text 
                    onClick={(e) => {
                        window.location.href = mailto;
                        e.preventDefault();
                      }}>
                        contact@fooderra.az</Text>
                </VStack>
            </HStack>
       </HStack>
    );
}
