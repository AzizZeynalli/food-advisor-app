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
  Divider,
  Button,
  Box,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";

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

type TBlogCard = {
  blog: TBlog;
};

export default function BlogCard({ blog }: TBlogCard) {
  const handleLike = () => {
    alert("You liked this blog");
  };
  return (
    <Card maxW="xl" h="xl" rounded="xl">
      <CardHeader>
        <Flex gap="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{blog.title}</Heading>
              <Text>{blog.title}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Stack mt="2" spacing="3">
          <Heading size="md">{blog.title}</Heading>
          <Text>{blog.content}</Text>
          <Link color="blue.600" fontSize="lg">
            Read more...
          </Link>
        </Stack>
      </CardBody>
      <Image
        src={`data:image/jpg;base64,${blog.image}`}
        alt="blog image"
        width="full"
        height={200}
        mx="auto"
        objectFit="cover"
        objectPosition="top"
      />
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
            {blog.likes} likes
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
}
