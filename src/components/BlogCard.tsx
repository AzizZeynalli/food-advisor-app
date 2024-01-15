"use client"
import {
  Icon,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Image,
  Stack,
  Text,
  CardFooter,
  Button,
  Box,
  HStack,
  Link,
  Flex,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

type TBlog = {
  id: string;
  title: string;
  content: string;
  likes: number;
  image: string;
  dateCreated: Date;
  user: {
    username: string;
    email: string;
    avatar: string;
  };
};

type TBlogCard = {
  blog: TBlog;
};

const BlogCard = ({ blog }: TBlogCard) => {
  useEffect(() => {
    localStorage.setItem("token", "");
  }, []);

  const [likes, setLikes] = useState(blog.likes);

  const updateLikes = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3003/api/blogs/${blog.id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleLike = async () => {
    try {
      await updateLikes();
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card w={{ base: "full", md: "sm" }} h="xl" rounded="xl" shadow="md">
      <CardHeader>
        <Flex justify="space-between">
          <Stack align={{ base: "start", md: "center" }}>
            <WrapItem>
              <Avatar src={blog.user.avatar || ""} />
            </WrapItem>
            <Heading size="sm">
              @{blog.user.username}
            </Heading>
          </Stack>
          {blog.dateCreated && (
            <Text color="gray.500" fontSize="md">
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
          )}
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack spacing="2">
          <Heading size="md">{blog.title}</Heading>
          <Text noOfLines={[1, 2]}>{blog.content}</Text>
          <Link color="blue.500" fontSize="md">
            Read more
          </Link>
        </Stack>
      </CardBody>
      {blog.image && (
        <Image
          src={`data:image/jpg;base64,${blog.image}`}
          alt="blog image"
          width="full"
          height={{base: 200, md: 230, lg: 250}}
          mx="auto"
          objectFit="cover"
          objectPosition="top"
        />
      )}
      <CardFooter justify="center">
        <HStack spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            cursor="pointer"
            onClick={handleLike}
          >
            <Icon as={AiOutlineLike} w={8} h={8} mr={2} color="white" />
            Like
          </Button>
          <Text fontSize="lg" color="blue.500" fontWeight="semibold">
            {likes} likes
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;