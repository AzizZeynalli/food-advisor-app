"use client";
import {
  Text,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("Select Image" as any);

  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (fileInput.current && fileInput.current.files) {
      formData.append("image", fileInput.current.files[0]);
    }
    try {
      const response = await axios.post(
        "http://localhost:3003/api/blogs",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        toast({
          title: "Blog post created successfully",
          status: "success",
          isClosable: true,
          duration: 2000,
          containerStyle: {
            bottom: "100px",
          }
        })
        setTitle("");
        setContent("");
        fileInput.current && (fileInput.current.value = "");
      } else {
        toast({
          title: "Could not create blog post. Please try again.",
          status: "error",
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: "Unexpected error happened.",
        status: "error",
        isClosable: true,
      })
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <Flex direction="column" px={56} py={20}>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            variant="filled"
            placeholder="Title"
            size="md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="content" isRequired mt={6}>
          <FormLabel>Content</FormLabel>
          <Textarea
            variant="filled"
            placeholder="I want to share..."
            size="md"
            resize="none"
            h="300px"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
              ref={fileInput}
              onChange={(event) => {
                if(event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  setFileName(file.name);
                } 
              }}
            />
            <FormLabel htmlFor="file-upload" mx={4} mt={2} cursor="pointer">
              <Text mr={2} color="green" fontSize="lg">
                {fileName}
              </Text>
            </FormLabel>
          </Flex>
        </FormControl>
        <Button type="submit" mt={10} colorScheme="green">
          Publish
        </Button>
      </Flex>
    </form>
  );
}
