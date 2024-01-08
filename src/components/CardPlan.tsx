"use client"
import { Card, CardBody, Text, Heading, HStack, VStack, Image } from "@chakra-ui/react";

export default function CardPlan({  cardHeading, cardText, imagePng }: any) {

    return (
        <Card >
            <CardBody>
                <HStack 
                m='12px'
                bg='#FFEBEB'
                borderRadius='24px'
                justifyContent='space-between'
                alignItems='center'>
                    <VStack gap='12px' p='30px auto 30px 28px'>
                        <Heading
                        fontSize='30px'
                        fontWeight='600'>{cardHeading}</Heading>
                        <Text
                        fontSize='16px'
                        fontWeight='400'>{cardText}</Text>
                    </VStack>
                    <Image src={imagePng}></Image>
                </HStack>
            </CardBody>
        </Card>
    );
}