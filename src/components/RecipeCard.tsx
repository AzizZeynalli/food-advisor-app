"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext";
import {
  Box,
  Card,
  CardBody,
  Divider,
  VStack,
  Image,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import LikeAndShareButtons from "./LikeAndShareButtons";
import { useRouter } from "next/navigation";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

interface RecipeCardProps {
  meal: Meal;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  const router = useRouter();
  const { user, likeRecipe, unlikeRecipe } = useAuth();
  const [likedRecipes, setLikedRecipes] = useState<string[]>([]);

  const truncateInstructions = (instructions: string): string => {
    const words = instructions.split(" ");
    const truncatedText = words.slice(0, 10).join(" ");
    return `${truncatedText}...`;
  };

  useEffect(() => {
    setLikedRecipes(user?.likedRecipes || []);
  }, [user]);

  const handleLikeClick = (idMeal: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (likedRecipes.includes(idMeal)) {
      unlikeRecipe(idMeal);
      const newLikedRecipes = likedRecipes.filter(
        (recipeId) => recipeId !== idMeal
      );
      setLikedRecipes(newLikedRecipes);
    } else {
      likeRecipe(idMeal);
      const newLikedRecipes = [...likedRecipes, idMeal];
      setLikedRecipes(newLikedRecipes);
    }
  };

  return (
    <Card key={meal.idMeal} variant="outline">
      <CardBody>
        <Image src={meal.strMealThumb} alt="" />
        <VStack alignItems="flex-start">
          <Heading mt="8px" fontSize="24px" noOfLines={1}>
            {meal.strMeal}
          </Heading>
          <Text
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px"
          >
            {meal.strInstructions ? (
              <>
                {truncateInstructions(meal.strInstructions)}
                <Link
                  href={`/recipes/${encodeURIComponent(meal.strMeal)}`}
                  color="blue.500"
                  _hover={{ color: "red", textDecoration: "underline" }}
                >
                  read more
                </Link>
              </>
            ) : (
              <Link
                href={`/recipes/${encodeURIComponent(meal.strMeal)}`}
                color="blue.500"
                _hover={{ color: "red", textDecoration: "underline" }}
              >
                Read more
              </Link>
            )}
          </Text>
        </VStack>
      </CardBody>
      <Divider />
      <Box width="100%" p="8px">
        <LikeAndShareButtons
          isLiked={likedRecipes.includes(meal.idMeal)}
          onLikeClick={() => handleLikeClick(meal.idMeal)}
          shareUrl={`http://localhost:3000/recipes/${encodeURIComponent(
            meal.strMeal
          )}`}
          shareTitle={meal.strMeal}
        />
      </Box>
    </Card>
  );
};

export default RecipeCard;
