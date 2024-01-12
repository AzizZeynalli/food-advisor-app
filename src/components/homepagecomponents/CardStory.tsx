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
            w="80px"
            h="80px"
            top="0"
            borderRadius="50px"
          ></Box>
          <VStack bg="#F5F8FC">
            <Text>{cardName}</Text>
            {cardPremium ? <Button>Premium</Button> : null}
            <Text>{cardHistory}</Text>
            <Text>{cardAbout}</Text>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
}
