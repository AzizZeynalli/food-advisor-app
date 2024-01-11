"use client";
import { Layout } from "@/components";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  Box,
  Card,
  Heading,
  Link,
  SimpleGrid,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
type Area = {
  strArea: string;
};

export default function Areas() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        setAreas(response.data.meals || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
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
            {areas.length > 0 &&
              areas.map((area) => (
                <Box
                  key={area.strArea}
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
                    href={`areas/${area.strArea}`}
                  >
                    {area.strArea}
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
