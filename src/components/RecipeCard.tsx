import React, { useEffect, useState } from "react";
import { Box, Card, CardBody, Divider, Heading, Image, Text, VStack, Link } from "@chakra-ui/react";
import LikeAndShareButtons from "./LikeAndShareButtons";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

type RecipeCardProps = {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
  };
};

const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  const { user, likeRecipe, unlikeRecipe } = useAuth();
  const [likedRecipes, setLikedRecipes] = useState<RecipeCardProps["meal"][]>(
    []
  );
  const router = useRouter();
  const truncateInstructions = (instructions: string): string => {
    const words = instructions.split(" ");
    const truncatedText = words.slice(0, 10).join(" ");
    return `${truncatedText}...`;
  };

  const handleLikeClick = (meal: RecipeCardProps["meal"]) => {
    if (!user) {
      router.push("/login");
      return;
    }

    const found = likedRecipes.some(
      (likedRecipe) => likedRecipe.idMeal === meal.idMeal
    );
    if (found) {
      unlikeRecipe(meal.idMeal);
      const newLikedRecipes = likedRecipes.filter(
        (recipe) => recipe.idMeal !== meal.idMeal
      );
      setLikedRecipes(newLikedRecipes);
    } else {
      likeRecipe(meal);
      const newLikedRecipes = [...likedRecipes, meal];
      setLikedRecipes(newLikedRecipes);
    }
  };
  useEffect(() => {
    setLikedRecipes(user?.likedRecipes || []);
  }, [user]);

  return (
    <Card key={meal.idMeal} variant="outline">
      <CardBody>
        <Image src={meal.strMealThumb} alt="" />
        <VStack alignItems="flex-start">
          <Heading mt="8px" fontSize="24px">
            {meal.strMeal}
          </Heading>
          {meal.strInstructions ? (
            <Text
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              {truncateInstructions(meal.strInstructions)}
              <Link
                href={`/recipes/${encodeURIComponent(meal.strMeal)}`}
                color="blue.500"
                _hover={{ color: "red", textDecoration: "underline" }}
              >
                read more
              </Link>
            </Text>
          ) : (
            <Link
              href={`/recipes/${encodeURIComponent(meal.strMeal)}`}
              color="blue.500"
              _hover={{ color: "red", textDecoration: "underline" }}
            >
              Read more
            </Link>
          )}
        </VStack>
      </CardBody>
      <Divider />
      <Box width="100%" p="8px">
        <LikeAndShareButtons
          isLiked={likedRecipes.some(
            (likedRecipe) => likedRecipe.idMeal === meal.idMeal
          )}
          onLikeClick={() => handleLikeClick(meal)}
          recipeUrl={`http://localhost:3000/recipes/${encodeURIComponent(
            meal.strMeal
          )}`}
          recipeTitle={meal.strMeal}
        />
      </Box>
    </Card>
  );
};

export default RecipeCard;
