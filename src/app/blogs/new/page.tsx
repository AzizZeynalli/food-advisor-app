import {
  Text,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function BlogForm() {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box
        as="form"
        w={["90%", "70%"]}
        minH="85%"
        p={10}
        shadow="sm"
        borderWidth={3}
        borderRadius="lg"
      >
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input variant="filled" placeholder="Title" size="md" />
        </FormControl>
        <FormControl id="content" isRequired mt={6}>
          <FormLabel>Content</FormLabel>
          <Textarea
            variant="filled"
            placeholder="I want to share..."
            size="md"
            resize="none"
            h="300px"
          />
        </FormControl>
        <FormControl id="image" mt={6}>
          <Flex
            align="center"
            p={1}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Input
              variant="filled"
              type="file"
              accept="image/*"
              hidden
              id="file-upload"
            />
            <FormLabel htmlFor="file-upload" mx={4} mt={2}  cursor="pointer">
              <Text mr={2} color="green" fontSize="lg" >Select Image</Text>
            </FormLabel>
          </Flex>
        </FormControl>
        <Button type="submit" mt={10} colorScheme="green">
          Publish
        </Button>
      </Box>
    </Flex>
  );
}
