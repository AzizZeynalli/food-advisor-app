"use client";
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
import { useRouter } from "next/navigation";
import { BiLike, BiSolidLike, BiShare, BiHeart, BiSolidHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { useAuth } from "@/contexts/authContext";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export function CardContainer() {
  const { user, likeRecipe, unlikeRecipe } = useAuth();
  const truncateInstructions = (instructions: string): string => {
    const words = instructions.split(" ");
    const truncatedText = words.slice(0, 10).join(" ");

    return `${truncatedText}...`;
  };

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [likedRecipes, setLikedRecipes] = useState<string[]>([]);
  console.log(user);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        setMeals(response.data.meals || []);
        setLikedRecipes(user?.likedRecipes || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [user]);

  const router = useRouter();

  const handleLikeClick = (idMeal:string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    if(likedRecipes.includes(idMeal)) { 
      unlikeRecipe(idMeal);
      const newLikedRecipes = likedRecipes.filter((recipeId) => recipeId !== idMeal);
      setLikedRecipes(newLikedRecipes);
    } else {
      likeRecipe(idMeal);
      const newLikedRecipes = [...likedRecipes, idMeal]; 
      setLikedRecipes(newLikedRecipes);
    }
  };

  return (
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
                <SkeletonText
                  mt="4"
                  noOfLines={3}
                  spacing="2"
                  skeletonHeight="4"
                />
                <Flex>
                  <Skeleton height="40px" w="100%" mt="4" />
                  <Skeleton height="40px" w="100%" mt="4" ml="2" />
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          {meals.length > 0 &&
            meals.map((meal) => (
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
                      color={likedRecipes.includes(meal.idMeal) ? "red" : ""}
                      leftIcon={
                        likedRecipes.includes(meal.idMeal) ? <BiSolidHeart /> : <BiHeart />
                      }
                      onClick={() => handleLikeClick(meal.idMeal)}
                    >
                      {likedRecipes.includes(meal.idMeal) ? "Liked" : "Like"}
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
      )}
    </Box>
  );
}
