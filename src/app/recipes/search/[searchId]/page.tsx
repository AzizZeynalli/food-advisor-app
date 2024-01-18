'use client';
import Footer from "@/components/Footer";
import MealsNotFound from "@/components/MealsNotFound";
import { Navigation } from "@/components/Navigation";
import { RecipesHeader } from "@/components/RecipesHeader";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";

export default function SearchId({ params: { searchId } }: any) {
  const decodedWord = decodeURIComponent(searchId);

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
  const [likedStates, setLikedStates] = useState<boolean[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${decodedWord}`
        );
        setMeals(response.data.meals || []);
        setLikedStates(Array(response.data.meals.length).fill(false));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [decodedWord]);

  const handleLikeClick = (index: number) => {
    setLikedStates((prevLikedStates) => {
      const newLikedStates = [...prevLikedStates];
      newLikedStates[index] = !newLikedStates[index];
      return newLikedStates;
    });
  };

  const truncateInstructions = (instructions: string): string => {
    const words = instructions.split(" ");
    const truncatedText = words.slice(0, 10).join(" ");

    return `${truncatedText}...`;
  };
  

  return (
    <>
      <Box padding="24px">
        {loading ? (
          <SimpleGrid
            spacing={10}
            templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
          >
            {[1, 2, 3, 4].map((index) => (
              <Card key={index}>
                <CardBody>
                  <Skeleton height="200px" />
                  <Skeleton height="32px" width="100px" mt="4" />
                  <SkeletonText mt="4" noOfLines={3} spacing="2" skeletonHeight="4" />
                  <Flex>
                    <Skeleton height="40px" w="100%" mt="4" />
                    <Skeleton height="40px" w="100%" mt="4" ml="2" />
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        ) : (
          <>
            {meals.length > 0 ? (
              <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
              >
                {meals.map((meal, index) => (
                  <Card key={meal.idMeal} variant="outline">
                    <CardBody>
                      <Image src={meal.strMealThumb} alt="" />
                      <VStack alignItems="flex-start">
                        <Heading mt="8px" fontSize="24px">
                          {meal.strMeal}
                        </Heading>
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
                      </VStack>
                    </CardBody>
                    <Divider />
                    <Box width="100%" p="8px">
                      <Flex width="100%" gap="8px">
                      <Button
                      width="50%"
                      color={likedStates[index] ? "#000" : ""}
                      leftIcon={
                        likedStates[index] ? <BiSolidLike /> : <BiLike />
                      }
                      onClick={() => handleLikeClick(index)}
                    >
                      {likedStates[index] ? "Liked" : "Like"}
                    </Button>
                    <TwitterShareButton
                      style={{
                        display: "flex",
                        width: "50%",
                        height: "40px",
                        alignItems: "center",
                        justifyContent: "center",
                        background:'#000',
                        borderRadius:'8px',
                        color:'#fff',
                        fontWeight:'500'
                      }}
                      url={'http://localhost:3000/recipes/${encodeURIComponent(meal.strMeal)}'}
                      title={`"Share the Joy: Discover the Delightful Recipe of ${meal.strMeal} with #fooderra on Twitter!"`}
                      hashtags={['#fooderra']}
                    >
                      <TwitterIcon size={40} />
                      Share
                    </TwitterShareButton>
                      </Flex>
                    </Box>
                  </Card>
                ))}
              </SimpleGrid>
            ) : (
              <MealsNotFound />
            )}
          </>
        )}
      </Box>
    </>
  );
}
