"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "@/components";
import { BiArrowBack } from "react-icons/bi";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  imageUrl: string;
  dateCreated: Date;
  user: {
    username: string;
    email: string;
    avatar: string;
  };
};

export default function Blog({ params: { blogId } }: any) {
  const router = useRouter();
  const [blog, setBlog] = useState<TBlog | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      if (blogId) {
        const res = await fetch(
          `https://fooderra-api.vercel.app/api/blogs/${blogId}`
        );
        const data = await res.json();
        setBlog(data);
      }
    };
    fetchBlog();
  }, [blogId]);

  return (
    <Layout>
      <Button 
      mx={{base:"0", md:"50px"}}
      mt='20px'
      onClick={() => router.push("/blogs")}
      m={{base:"10px", md:"10 50px"}}
          zIndex="1"
          bg="#233345"
          color="#fff"
          borderRadius="24px"
          _hover={{ bg: "#3e5a7b" }}
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"><BiArrowBack /></Button>
      {blog && (
        <Box p={{base:"10px", md:"10 50px"}} px={{base:"10px", md:"50px"}}>
          <Box  display='flex' justifyContent="space-between" alignItems='center' mb='30px' flexDirection={{base:"column", md:"row"}} gap='20px'>
            <HStack alignItems="center">
              <Avatar name={blog.user.username} />
              <Text
                p="7px 25px"
                borderRadius="100px"
                fontSize="16px"
                fontWeight="500"
                backgroundColor="#EEF8FD"
              >
                @{blog.user.username}
              </Text>
            </HStack>
            <Text fontSize="16px" fontWeight="500">
              {" "}
              {new Date(blog.dateCreated)
                .toLocaleString(undefined, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(
                  /(\d{2})\.(\d{2})\.(\d{4}),\s(\d{2}):(\d{2})/,
                  "$1.$2.$3, $4:$5"
                )}
            </Text>
          </Box>
          <Box>
            <Image w={{base:"100%", md:"50%"}} float={{base:"none", md:"left"}} mr='20px' src={blog.imageUrl} alt="blog image" />
            <Box>
              <Flex justifyContent='space-between' alignItems='center' flexDirection={{base:"column", md:"row"}}>
              <Heading
                fontSize="36px"
                fontWeight="500"
                m="30px 0"
              >
                {blog.title}
              </Heading>
              <HStack>
              <Button>Like</Button>
              <Text  
              p='4px 7px'
              borderRadius='10px'
              bg='#BEE3F8'>{blog.likes} Likes</Text>
              </HStack>
              </Flex>
              
              <Text fontSize="20px" fontWeight="400">
                {blog.content}
              </Text>
              
            </Box>
          </Box>
        </Box>
      )}
    </Layout>
  );
}
