"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import CardStory from "@/components/homepagecomponents/CardStory";
import "./slider.css";

export function Stories() {
  const cardCount = useBreakpointValue({ base: 1, md: 10 }) || 0;
  const [selectedItem, setSelectedItem] = useState(0);

  const handlePrevClick = () => {
    setSelectedItem((prevItem) => (prevItem - 1 + cardCount) % cardCount);
  };

  const handleNextClick = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % cardCount);
  };

  return (
    <>
      <Heading textAlign="center" fontSize="30px" fontWeight="500">
        Join millions of success stories
      </Heading>
      <Box p="75px 20px" position="relative">
        <VStack
          position="absolute"
          left="0"
          top="40%"
          display={{ base: "none", md: "Flex" }}
        >
          <button onClick={handlePrevClick}>&lt;</button>
        </VStack>
        <Carousel
          selectedItem={selectedItem}
          onChange={setSelectedItem}
          width={400}
          showStatus={false}
          showArrows={false}
        >
          <CardStory
            imageStory="../images/tarana.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
          <CardStory
            imageStory="../images/sama.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
          <CardStory
            imageStory="../images/murad.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
          <CardStory
            imageStory="../images/aziz.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
          <CardStory
            imageStory="../images/fagan.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
          <CardStory
            imageStory="../images/kanan.png"
            cardName="sama"
            cardPremium="salam"
            cardHistory="sagol"
            cardAbout="sagol"
          ></CardStory>
        </Carousel>
        <Box
          position="absolute"
          right="0"
          top="40%"
          display={{ base: "none", md: "Flex" }}
        >
          <button onClick={handleNextClick}>&gt;</button>
        </Box>
      </Box>
    </>
  );
}
