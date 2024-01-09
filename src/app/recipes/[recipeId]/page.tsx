"use client";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  Box,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Recipe({ params: { recipeId } }: any) {
  const decodedWord = decodeURIComponent(recipeId);
  console.log(decodedWord);

  type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strCategory: string;
    strArea: string;
    [key: string]: string | undefined;
  };

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${decodedWord}`
        );
        setMeals(response.data.meals || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [decodedWord]);

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Navigation />
      <Box p="32px" h="100%">
        {loading ? (
          <Box>
            <Skeleton height="400px" float={{md:'right'}} width="400px" my="4" />
            <Skeleton height="45px" width="150px" my="4" />
            <Skeleton height="24px" width="100px" my="4" />            
            <SkeletonText mt='4' noOfLines={10} maxW={{md:"calc(100% - 450px)"}} spacing='2' skeletonHeight='4' />
            <SkeletonText mt='4' noOfLines={5} w='300px' spacing='2' skeletonHeight='4' />
          </Box>
        ) : (
          meals.map((meal) => (
            <Box key={meal.idMeal}>
              <Image
                borderRadius="8px"
                float={{ md: "right" }}
                w={{ md: "400px" }}
                src={meal.strMealThumb}
                alt=""
                ml={{md:'16px'}}
                mb={{md:'16px'}}
              />
              <Heading mb="16px"> {meal.strMeal} </Heading>
              <Text
                color="#95A6BD"
                fontSize="16px"
                lineHeight="normal"
                bg="#EEF8FD"
                px="8px"
                py="2px"
                borderRadius="6px"
                as="span"
              >
                {meal.strCategory} - {meal.strArea}
              </Text>
              <Text
                mt="16px"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                {meal.strInstructions}
              </Text>
              <UnorderedList mt="16px">
                {Object.entries(meal)
                  .filter(
                    ([key]) => key.startsWith("strIngredient") && meal[key]
                  )
                  .map(([key, value]) => (
                    <ListItem key={key}>
                      {value} -{" "}
                      {meal[`strMeasure${key.replace("strIngredient", "")}`]}
                    </ListItem>
                  ))}
              </UnorderedList>
            </Box>
          ))
        )}
      </Box>
      <Footer />
    </Box>
  );
}
