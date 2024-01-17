"use client";
import {
  Card,
  CardBody,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";

export default function CardStory({
  imageStory,
  cardName,
  cardHistory,
  cardAbout,
}: any) {
  return (
    <Card>
      <CardBody>
        <Box position="relative" p="0 20px 20px 20px" bg="#F5F8FC" w="400px" textAlign='center'>
          <Box
            bgImage={`url(${imageStory})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="absolute"
            w="80px"
            h="80px"
            borderRadius="50px"
            border='none'
            display="flex"
            justifyContent="center"
            alignItems="center"
          ></Box>
          <VStack>
            <Text mt='90px' fontSize='12px' fontWeight='600'>{cardName}</Text>
            <Text fontSize='18px' fontWeight='600'>{cardHistory}</Text>
            <Text fontSize='14px' fontWeight='400'>{cardAbout}</Text>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
}
