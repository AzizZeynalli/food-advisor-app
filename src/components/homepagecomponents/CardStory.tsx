"use client";
import {
  Card,
  CardBody,
  Image,
  Text,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";

export default function CardStory({
  imageStory,
  cardName,
  cardPremium,
  cardHistory,
  cardAbout,
}: any) {
  return (
    <Card>
      <CardBody>
        <Box position="relative" p="12px 20px">
          <Box
            bgImage={`url(${imageStory})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="absolute"
            left='40%'
            w="80px"
            h="80px"
            top="0"
            borderRadius="50px"
            border='none'
          ></Box>
          <VStack bg="#F5F8FC">
            <Text mt='90px' fontSize='12px' fontWeight='600'>{cardName}</Text>
            {cardPremium ? <Button>Premium</Button> : null}
            <Text fontSize='18px' fontWeight='600'>{cardHistory}</Text>
            <Text fontSize='14px' fontWeight='400'>{cardAbout}</Text>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
}
