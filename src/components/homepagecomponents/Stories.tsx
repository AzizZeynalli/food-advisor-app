"use client";
import React, { useState } from "react";

import { Box, Center, Heading, VStack, useBreakpointValue} from "@chakra-ui/react";
import CardStory from "@/components/homepagecomponents/CardStory";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export function Stories() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Box m="50px 0">
        <Heading textAlign="center" fontSize="30px" fontWeight="500">
          Join millions of success stories
        </Heading>
        <Center>
        <Box  position="relative" display='flex' alignItems='center' justifyContent='center' maxW={{base:"400px", md:"1450px"}}> 
          <Swiper
        
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              1450: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={false}
            navigation={!isMobile}
            pagination={isMobile && { clickable: true }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardStory
                imageStory="../images/tarana1.png"
                cardName="Tarana 20"
                cardHistory="Lost 7 lbs in 1 month"
                cardAbout="I got into a real dance in the kitchen with recipes from your site.Cooking is no longer a routine; thank you!"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/ruslan.png"
                cardName="Ruslan 34"
                cardHistory="Lost 33 lbs in 2 months"
                cardAbout="Today, I became the chef of my own kitchen, but I completed the recipes thanks to you!"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/sama1.png"
                cardName="Sama 31"
                cardHistory="Lost 8 lbs in 2 weeks"
                cardAbout="Cooking with the recipes from your site was an experience beyond easy!"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/murad1.png"
                cardName="Murad 21"
                cardHistory="Lost 6 lbs in 1 month"
                cardAbout="Thanks to you, I got an invitation to a laughter crisis while cooking!"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/aziz1.png"
                cardName="Aziz 20"
                cardHistory="Lost 33 lbs in 2 months"
                cardAbout="Trying the recipes on your site was a true pleasure! Each one was easy and delicious."
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/kanan.png"
                cardName="Kanan 25"
                cardHistory="Lost 101 lbs in 5 months"
                cardAbout="Cooking with your recipes is so easy and tasty that now everyone can be a chef!"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/eldar.png"
                cardName="Eldar"
                cardHistory="Lost 7 lbs in 2 months"
                cardAbout="The recipes I discovered on your site allowed me to try different flavors in the kitchen."
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/fagan.png"
                cardName="Fagan"
                cardHistory="Lost 33 lbs in 2 months"
                cardAbout="Your recipes are not only delicious but also very creative! I found many interesting ideas to try in the kitchen."
              ></CardStory>
            </SwiperSlide>
          </Swiper>
        </Box>
        </Center>
      </Box>
    </>
  );
}
