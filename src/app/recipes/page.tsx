'use client'
import { CardContainer } from "@/components/CardContainer";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { RecipesHeader } from "@/components/RecipesHeader";
import { Box } from "@chakra-ui/react";

export default function Recipes() {
    return (
        <Box>
            {/* <Navigation /> */}
            {/* <RecipesHeader /> */}
            <CardContainer />
            {/* <Footer /> */}
        </Box>
    );
}
