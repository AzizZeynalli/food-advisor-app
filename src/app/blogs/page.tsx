"use client";
import { Layout } from "@/components/";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Spinner,
  Center,
  Grid
} from "@chakra-ui/react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
  dateCreated: string;
  user: {
    username: string;
    email: string;
  };
};

export default function Blog() {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3003/api/blogs");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout>
      <VStack spacing={4} align="stretch">
        <Center p={4}>
          <Heading size="lg" color="blue.500">
            Read and enjoy the latest blogs! 😊
          </Heading>
        </Center>
        {isLoading && (
          <Flex direction="column" align="center" justify="center" h="full" py={20}>
            <Spinner
              thickness="3px"
              speed="0.5s"
              emptyColor="gray.300"
              color="blue.600"
              size="lg"
            />
            <Text as="p" mt={4}>Loading content...</Text>
          </Flex>
        )}
        <Grid templateColumns="repeat(3, 1fr)" justifyContent="space-around" p={10} gap={10}>
          {blogs.map((blog) => {
            console.log(blog);
            return <BlogCard key={blog.id} blog={blog} />
})}
        </Grid>
      </VStack>
    </Layout>
  );
}
