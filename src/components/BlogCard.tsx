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
  dateCreated: string;
  user: {
    username: string;
    email: string;
  }
};

type TBlogCard = {
  blog: TBlog;
};

const BlogCard = ({ blog }: TBlogCard) => {
  useEffect(() => {
    // Consider handling token storage and retrieval more securely
    localStorage.setItem("token", "");
  }, []);

  const [likes, setLikes] = useState(blog.likes);

  const updateLikes = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3003/api/blogs/${blog.id}/like`,
        {}, // Empty object for the request body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data); // Log or handle the response data if needed
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in the calling function if needed
    }
  };

  const handleLike = async () => {
    try {
      setLikes((prev) => prev + 1);
      await updateLikes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card w="md" h="xl" rounded="xl" shadow="md">
      <CardHeader>
        <Flex gap="2">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{blog.user.username}</Heading>
            </Box>
            {blog.dateCreated && <Text fontSize="sm">{blog.dateCreated}</Text>}
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading size="md">{blog.title}</Heading>
          <Text>{blog.content}</Text>
          <Link color="blue.600" fontSize="lg" mt={3}>
            Read more...
          </Link>
        </Stack>
      </CardBody>
      {blog.image && (
        <Image
          src={`data:image/jpg;base64,${blog.image}`}
          alt="blog image"
          width="full"
          height={250}
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
