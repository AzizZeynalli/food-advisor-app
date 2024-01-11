"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Navigation } from "@/components/Navigation";
import { RecipesHeader } from "@/components/RecipesHeader";
import { CardContainer } from "@/components/CardContainer";
import { RecipesFooter } from "@/components/RecipesFooter";
import ProfileContainer from "@/components/ProfileContainer";

type Blog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
};

export default function Profile() {
  return (
    <Box>
      <Navigation />
      <ProfileContainer />
      <CardContainer />
    </Box>
  );
}
