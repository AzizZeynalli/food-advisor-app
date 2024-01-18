'use client'
import { HStack, Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FooterTermsCondition from "./FooterTermsCondition";
 interface TermsAndConditionsButtonProps {
  openModal: () => void;
}

const Footer: React.FC<TermsAndConditionsButtonProps>=({ openModal }) =>{ 

    const router = useRouter();
    const mailto = "mailto:contact@fooderra.az";
    
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };
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
                cursor="pointer"
                onClick={() => {
                    window.scrollTo({top:0, left:0, behavior:"smooth"})
                  }}
                src="/images/white_logo.svg" alt="Logo"/>
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
                    <Text cursor="pointer" onClick={() => {
                    router.push("/blog");
                    }}
                    >Blog</Text>
                    <Text cursor="pointer" onClick={() => {
                    router.push("/recipes");
                    }}
                    >Recipes</Text>
                    <Text  cursor="pointer" onClick={() => {
                    router.push("/areas");
                    }}
                    >Areas</Text>
                    <Text cursor="pointer" onClick={() => {
                    router.push("/categories");
                    }}
                    >Categories</Text>
                    <Text cursor="pointer" onClick={openTermsModal}
                    >Terms and Conditions</Text>
                    <FooterTermsCondition isOpen={isTermsModalOpen} closeModal={closeTermsModal}/>
                </VStack>
                <VStack 
                gap='8px'
                alignItems={{ base: "center", md: "flex-start" }}>
                    <Text fontSize='20px' fontWeight='600'>Contact us</Text>
                    <Text 
                    cursor="pointer"
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
export default Footer;