"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import CardStory from "@/components/homepagecomponents/CardStory";
import "./slider.css";

export function Stories() {
  const cardCount = useBreakpointValue({ base: 10, md: 10 }) || 0;
  const [selectedItem, setSelectedItem] = useState(0);

  const handlePrevClick = () => {
    setSelectedItem((prevItem) => (prevItem - 1 + cardCount) % cardCount);
  };

  const handleNextClick = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % cardCount);
  };

  return (
    <>
      <Box mt='50px'>
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
            showThumbs={true}
            thumbWidth={400}
          >
            <CardStory
              imageStory="../images/tarana1.png"
              cardName="Tarana 20"
              cardPremium="Premium"
              cardHistory="Lost 7 lbs in 1 month"
              cardAbout="I started using this application because I was stuck at a weight loss plateau and could not manage to
            lose the excess fat. From the first days, I could see the results on the scale, I couldn't believe it! It is true that the macronutrients breakdown is very important. I have recommended this application to my relatives, friends, colleagues who are themselves satisfied with it."
            ></CardStory>
            <CardStory
              imageStory="../images/sama1.png"
              cardName="Sama 31"
              cardHistory="sagol"
              cardAbout="sagol"
            ></CardStory>
            <CardStory
              imageStory="../images/murad1.png"
              cardName="Murad 20"
              cardPremium="salam"
              cardHistory="sagol"
              cardAbout="sagol"
            ></CardStory>
            <CardStory
              imageStory="../images/aziz1.png"
              cardName="Aziz 20"
              cardPremium="salam"
              cardHistory="sagol"
              cardAbout="sagol"
            ></CardStory>
            <CardStory
              imageStory="../images/fagan.png"
              cardName="Fagan 20"
              cardPremium="salam"
              cardHistory="sagol"
              cardAbout="sagol"
            ></CardStory>
            <CardStory
              imageStory="../images/kanan.png"
              cardName="Kanan 20"
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
      </Box>
    </>
  );
}
