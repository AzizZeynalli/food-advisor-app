"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

type Blog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:3003/api/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          All blogs
        </Heading>
        {blogs.map((blog) => (
          <Box key={blog.id} p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="lg">
              {blog.title}
            </Heading>
            <Text mt={4}>{blog.content}</Text>
          </Box>
        ))}
      </VStack>
      <Footer />
    </>
  );
}
