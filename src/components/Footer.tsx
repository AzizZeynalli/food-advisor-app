import { HStack, Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() { 

    const router = useRouter();


    return (
       <HStack 
        bg='#233345' 
        w='100%' 
        justifyContent='space-around' 
        p='28px 0'
        flexDirection={{ base: "column", md: "row" }}
        width='100%'>
        
            <VStack textAlign='center'>
                <Image
                onClick={() => {
                    router.push("/");
                  }}
                src="../images/white_logo.svg" alt="Logo"/>
                <HStack p='16px 0' gap='12px'>
                    <Image 
                    alt=""
                    gap='12px'
                    onClick={() => {
                        router.push("/");
                      }}
                       src="../images/apple.png" />
                    <Image 
                    alt=""
                    onClick={() => {
                        router.push("/");
                      }}
                    src="../images/google.png" />
                </HStack>
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
                    <Link href={"/press"} passHref>Press</Link>
                    <Link href={"/termsofservice"} passHref>Terms of service</Link>
                    <Link href={"/privacypolicy"} passHref>Privacy policy</Link>
                    <Link href={"/cookiespolicy"} passHref>Cookies policy</Link>
                </VStack>
                <VStack 
                gap='8px'
                alignItems={{ base: "center", md: "flex-start" }}>
                    <Text fontSize='20px' fontWeight='600'>Contact us</Text>
                    <Link href={"/contactus"} passHref>contact@fooderra.az</Link>
                    <Text fontSize='20px' fontWeight='600' pb='12px'>Follow us</Text>
                    <HStack gap='8px' alignItems='flex-start'>
                        <Image 
                        onClick={() => {
                            router.push("/");
                          }}
                          src="../images/instagram.png" alt="instagram" borderRadius='500px' bg='white' p='8px 20px' border='none'/>
                        <Image 
                        onClick={() => {
                            router.push("/");
                          }}
                          src="../images/twitter.png" alt="twitter"  borderRadius='500px' bg='white' p='8px 20px' border='none'/>
                        <Image 
                        onClick={() => {
                            router.push("/");
                          }}
                          src="../images/facebook.png" alt="facebook"  borderRadius='500px' bg='white' p='8px 20px' border='none'/>
                        <Image 
                        onClick={() => {
                            router.push("/");
                          }}
                          src="../images/linkedin.png" alt="linkedin"  borderRadius='500px' bg='white' p='8px 20px' border='none'/>
                    </HStack>
                </VStack>
            </HStack>
       </HStack>
    );
}
