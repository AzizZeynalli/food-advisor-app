"use client";
import {Layout} from "@/components/";
import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/blogs');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout>
    
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
      
    </Layout>
  );
}
