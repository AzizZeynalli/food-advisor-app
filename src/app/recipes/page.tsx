import { CardContainer } from "@/components/CardContainer";
import { Navigation } from "@/components/Navigation";
import { RecipesFooter } from "@/components/RecipesFooter";
import { RecipesHeader } from "@/components/RecipesHeader";
import { Box } from "@chakra-ui/react";

export default function Recipes() {
    return (
        <Box>
            <Navigation />
            <RecipesHeader />
            <CardContainer />
            <RecipesFooter />
        </Box>
    );
}
