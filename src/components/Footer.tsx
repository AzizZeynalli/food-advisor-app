import { HStack, Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() { 
    return (
       <HStack bg='#233345' w='100%' justifyContent='space-around' p='28px 0'>
            <VStack textAlign='center'>
                <Link href={"/"} passHref ><Image src="/images/white_logo.svg" alt="Logo" maxW='220px'/></Link>
                <HStack p='16px 0' gap='12px'>
                    <Link href='' ><Image src="/images/apple.png" gap='12px' alt='' /></Link>
                    <Link href='' ><Image src="/images/google.png" alt='' /></Link>
                </HStack>
                <Text color='white' fontWeight='400' fontSize='16px'>© 2023 foodvisor.io</Text>
            </VStack>
            <HStack justifyContent='space-around' w='50%' color='white' fontWeight='400' fontSize='16px'>
                <VStack>
                    <Text fontSize='20px' fontWeight='600'>About Foodvisor</Text>
                    <Link href={"/press"} passHref>Press</Link>
                    <Link href={"/termsofservice"} passHref>Terms of service</Link>
                    <Link href={"/privacypolicy"} passHref>Privacy policy</Link>
                    <Link href={"/cookiespolicy"} passHref>Cookies policy</Link>
                </VStack>
                <VStack gap='8px'>
                    <Text fontSize='20px' fontWeight='600'>Contact us</Text>
                    <Link href={"/contactus"} passHref>contact@foodvisor.io</Link>
                    <Text fontSize='20px' fontWeight='600' pb='12px'>Follow us</Text>
                    <HStack gap='8px'>
                        <Link href={"/instagram"} passHref><Image src="/images/instagram.png" alt="instagram" borderRadius='500px' bg='white' p='8px 20px'/></Link>
                        <Link href={"/twitter"} passHref><Image src="/images/twitter.png" alt="twitter"  borderRadius='500px' bg='white' p='8px 20px'/></Link>
                        <Link href={"/facebook"} passHref><Image src="/images/facebook.png" alt="facebook"  borderRadius='500px' bg='white' p='8px 20px'/></Link>
                        <Link href={"/linkedin"} passHref><Image src="/images/linkedin.png" alt="linkedin"  borderRadius='500px' bg='white' p='8px 20px'/></Link>
                    </HStack>
                </VStack>
            </HStack>
       </HStack>
    );
}
