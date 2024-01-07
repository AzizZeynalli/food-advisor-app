"use client"
import { Card, CardBody, Image, Text,Box} from "@chakra-ui/react";
import Link from "next/link";

export default function Cards({ imageUrl, cardText, cardTime }: any) {

    return (
        <Card 
        m='12px' 
        boxShadow='0'>
            <CardBody>
                <Box position='relative'>
                    <Image src={imageUrl} ></Image>
                    <Text 
                    position='absolute' 
                    right='8px' 
                    bottom='8px'
                    color='white'>{cardTime}</Text>
                </Box>
                <Box bg='#F5F8FC' py='16px' pl='16px'>
                    <Text 
                    fontSize='16px' 
                    fontWeight='400'

                    >
                        {cardText}
                    </Text>
                </Box>
            </CardBody>
        </Card>
    );
}