"use client";
import { Layout } from "@/components";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  VStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiBookReader } from "react-icons/bi";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function Category({ params: { categoryId } }: any) {
  const decodedWord = decodeURIComponent(categoryId);

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${decodedWord}`
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
    <>
      <Navigation />
      <Box>
        <Box padding="24px">
            <Heading mb='16px'>{decodedWord} meals:</Heading>
          {loading ? (
            <SimpleGrid
              spacing={10}
              templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
            >
              {[1, 2, 3, 4].map((index) => (
                <Card key={index}>
                  <CardBody>
                    <Skeleton height="200px" />
                    <Skeleton height="32px" width="150px" mt="4" />
                    <Skeleton height="40px" w="100%" mt="4" />
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
                  <Card key={meal.idMeal} variant="outline" borderRadius='16px'>
                    {/* <CardBody> */}
                      <Image src={meal.strMealThumb} alt="" borderTopRadius='16px' />
                      <VStack alignItems="flex-start" padding='8px'>
                        <Heading mt="8px" fontSize="24px" noOfLines={1}>
                          {meal.strMeal}
                        </Heading>
                        <Divider />
                        <Button
                          width="100%"
                          leftIcon={<BiBookReader />}
                          onClick={() => router.push(`/recipes/${encodeURIComponent(meal.strMeal)}`)}
                        >
                          Read more
                        </Button>
                      </VStack>
                  </Card>
                ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
