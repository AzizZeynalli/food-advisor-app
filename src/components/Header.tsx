"use client"
import { Box, HStack, Image, Button, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
    return (
        <HStack p='20px' justifyContent='space-between' w='100%' maxH='64px' bg='#C9E0EB'>
            <HStack gap='16px'>
            <Link href={"/"} passHref ><Image src="../images/fooderra_logocrop.png" alt="Logo" maxW='220px'/></Link>
                <HStack gap='16px' pt='8px' fontSize='16px' fontWeight='500px' color='gray.400'>
                    <Link href={"/blog"} passHref>
                        <Button as="a" variant="link" _hover={{ color: '#233345' }}>Blog</Button>
                    </Link>
                    <Link href={"/recipes"} passHref>
                        <Button as="a" variant="link" _hover={{ color: '#233345' }}>Recipes</Button>
                    </Link>
                    <Link href={"/help"} passHref>
                        <Button as="a" variant="link" _hover={{ color: '#233345' }}>Help</Button>
                    </Link>
                </HStack>
            </HStack>
            <HStack gap='16px'>
                <HStack bg='white' borderRadius="500px" fontSize='16px' fontWeight='500px'>
                    <Link href={"/login"}>
                        <Button as="a" variant="link" _hover={{ color: '#233345' }} p='8px 16px'>Already have an account? Log in</Button>
                    </Link>
                    <Button p='8px 16px' borderRadius="500px" color='white' bg='#233345' _hover={{ color: '#233345', backgroundColor: "white"}} ><Link href={"/signup"}>Sign up</Link></Button>
                </HStack>
                <Text>en</Text>
            </HStack>
        </HStack>
    );
}