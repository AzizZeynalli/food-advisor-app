"use client"
import { Card, CardBody, Text, Heading, HStack, VStack, Image } from "@chakra-ui/react";

export default function CardPlan({  cardHeading, cardMain, imagePng }: any) {

    return (
        <Card 
        boxShadow='0'
        w='350px'>
            <CardBody>
                <HStack
                bg='#FFEBEB'
                borderRadius='24px'
                justifyContent='space-between'
                alignItems='center'>
                    <VStack gap='12px' pl='28px'
                    alignItems='flex-start'>
                        <Heading
                        fontSize='30px'
                        fontWeight='600'>{cardHeading}</Heading>
                        <Text
                        fontSize='16px'
                        fontWeight='400'>{cardMain}</Text>
                    </VStack>
                    <Image src={imagePng}></Image>
                </HStack>
            </CardBody>
        </Card>
    );
}