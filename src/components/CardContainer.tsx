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
import { BiLike, BiShare } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};
export function CardContainer() {
  const truncateInstructions = (instructions: string): string => {
    const words = instructions.split(" ");
    const truncatedText = words.slice(0, 10).join(" ");

    return `${truncatedText}...`;
  };

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        setMeals(response.data.meals || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
                <Skeleton height="32px" width='100px' mt='4' />
                <SkeletonText mt='4' noOfLines={3} spacing='2' skeletonHeight='4' />
                <Flex>
                <Skeleton height="40px" w='100%' mt='4' />
                <Skeleton height="40px" w='100%' mt='4' ml='2' />
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
                    <Divider />
                    <Box width="100%">
                      <Box width="100%">
                        <Button
                          width="50%"
                          variant="ghost"
                          leftIcon={<BiLike />}
                        >
                          Like
                        </Button>
                        <Button
                          width="50%"
                          variant="ghost"
                          leftIcon={<BiShare />}
                        >
                          Share
                        </Button>
                      </Box>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
