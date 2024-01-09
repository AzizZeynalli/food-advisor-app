import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

type Blog = {
  id: string;
  title: string;
  content: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl">Blog Page</Heading>
      {blogs.map(blog => (
        <Box key={blog.id} p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">{blog.title}</Heading>
          <Text mt={4}>{blog.content}</Text>
        </Box>
      ))}
    </VStack>
  );
}