"use client";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  Box,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
type Category = {
  strCategory: string;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.meals || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      minH="100vh"
      flexDirection="column"
    >
      <Navigation />
      <Heading ml="24px">List of the all countrys:</Heading>
      <Box p="24px">
        {loading ? (
          <SimpleGrid minChildWidth="200px" spacing={5}>
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
            <Skeleton height="50px" />
          </SimpleGrid>
        ) : (
          <SimpleGrid minChildWidth="200px">
            {categories.length > 0 &&
              categories.map((category) => (
                <Box
                  key={category.strCategory}
                  bg="#EEF8FD"
                  borderRadius="48px"
                  px="16px"
                  py="8px"
                  m="8px"
                  textAlign="center"
                >
                  <Link
                    mt="8px"
                    fontSize="24px"
                    m="0"
                    fontWeight="500"
                    _hover={{ color: "red" }}
                    href={`categories/${category.strCategory}`}
                  >
                    {category.strCategory}
                  </Link>
                </Box>
              ))}
          </SimpleGrid>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
