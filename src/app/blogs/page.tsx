"use client";
import {Layout} from "@/components/";
import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
  user: {
    id: string;
    name: string;
  };
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
        <Flex justifyContent="space-around">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
        </Flex>
      </VStack>
     
      
    </Layout>
    
  );
}
