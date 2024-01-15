"use client";
import React, { useState } from "react";

import { Box, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import CardStory from "@/components/homepagecomponents/CardStory";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export function Stories() {
  return (
    <>
      <Box mt="50px">
        <Heading textAlign="center" fontSize="30px" fontWeight="500">
          Join millions of success stories
        </Heading>
        <Box p="75px 20px" position="relative">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={false}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardStory
                imageStory="../images/tarana1.png"
                cardName="Tarana 20"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/sama1.png"
                cardName="Sama 31"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/sama1.png"
                cardName="Sama 31"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/aziz1.png"
                cardName="Sama 31"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/sama1.png"
                cardName="Sama 31"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
            <SwiperSlide>
              <CardStory
                imageStory="../images/aziz1.png"
                cardName="Sama 31"
                cardHistory="sagol"
                cardAbout="sagol"
              ></CardStory>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
