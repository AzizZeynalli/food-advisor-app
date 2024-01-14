"use client";

import { Navigation } from "@/components/Navigation";
import {
  Avatar,
  Box,
  VStack,
  Text,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  FormLabel,
  Input,
  Flex,
  Image,
  useBoolean,
  Card,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BiUser,
  BiHeart,
  BiSolidHeart,
  BiSolidEditAlt,
  BiHash,
  BiSave,
} from "react-icons/bi";

export default function Profile() {
  const [isEditing, setIsEditing] = useBoolean();
  const router = useRouter();
  const [editedUsername, setEditedUsername] = useState("Murad Israfilov");
  const [editedEmail, setEditedEmail] = useState("muradisrafilov542@gmail.com");

  const handleEditClick = () => {
    setIsEditing.toggle();
  };

  const handleSubmit = () => {
    setIsEditing.off(); // Disable editing mode after submission
  };
  return (
    <Box>
      <Tabs variant="soft-rounded" display="flex">
        <VStack
          minW="350px"
          bg="#cde9f9"
          h="100vh"
          justifyContent="space-between"
          py="48px"
        >
          <VStack>
            <Avatar size="2xl" name="Murad Israfilov" />
            <Heading>Murad Israfilov</Heading>
          </VStack>
          <TabList flexDirection="column" alignItems="strech" w="90%">
            <Tab _selected={{ color: "white", bg: "#233345" }}>
              <BiUser /> About me
            </Tab>
            <Tab _selected={{ color: "white", bg: "#233345" }}>
              <BiHeart /> Liked recipes
            </Tab>
            <Tab _selected={{ color: "white", bg: "#233345" }}>
              <BiHeart />
              Liked blogs
            </Tab>
          </TabList>
          <Button
            bg="#233345"
            color="#fff"
            borderRadius="24px"
            _hover={{ bg: "#3e5a7b" }}
            w="90%"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            onClick={() => router.push("/")}
          >
            Sign out
          </Button>
        </VStack>
        <Box w="100%" bg="#f8f8f8" position="relative">
          <TabPanels>
            <TabPanel h="100vh" p="48px">
              <Heading color="#3e5a7b">About me</Heading>
              <VStack
                mt="48px"
                bg="#ffffff"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                as="form"
                p="32px"
              >
                <Flex flexDirection="column" gap="16px">
                  <Flex
                    bg="#f8fafc"
                    w="400px"
                    alignItems="center"
                    borderRadius="6px"
                  >
                    <BiHash fontSize="24px" />
                    <Box ml="16px">
                      <Text fontSize="12px">ID</Text>
                      <Text fontSize="16px">465466</Text>
                    </Box>
                  </Flex>
                  <Flex alignItems="baseline">
                    <FormLabel fontSize="18px">Username:</FormLabel>
                    {isEditing ? (
                      <BiSave ml="4" onClick={handleSubmit} />
                    ) : (
                      <BiSolidEditAlt ml="4" onClick={handleEditClick} />
                    )}
                  </Flex>
                  {isEditing ? (
                    <Input
                      variant="filled"
                      placeholder="Filled"
                      w="400px"
                      value={editedUsername}
                      onChange={(e) => setEditedUsername(e.target.value)}
                    />
                  ) : (
                    <Input
                      disabled
                      variant="filled"
                      value={editedUsername}
                      fontSize="18px"
                    />
                  )}
                  <Flex alignItems="baseline">
                    <FormLabel fontSize="18px">Email:</FormLabel>
                    {isEditing ? (
                      <BiSave ml="4" onClick={handleSubmit} />
                    ) : (
                      <BiSolidEditAlt ml="4" onClick={handleEditClick} />
                    )}
                  </Flex>
                  {isEditing ? (
                    <Input
                      variant="filled"
                      placeholder="Filled"
                      w="400px"
                      type="email"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                    />
                  ) : (
                    <Input
                      disabled
                      variant="filled"
                      value={editedEmail}
                      fontSize="18px"
                    />
                  )}
                </Flex>
              </VStack>
            </TabPanel>
            <TabPanel h="100vh" p="48px">
              <Heading color="#3e5a7b">Liked recipes</Heading>
              <Box
                mt="48px"
                bg="#ffffff"
                w="100%"
                h="600px"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                p="32px"
              >
                <Card direction="row" overflow="hidden" variant="outline">
                  <Image
                    objectFit="cover"
                    w="100px"
                    h="100px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                  <Flex p="16px" justifyContent="space-between" w="100%">
                    <Heading size="md">Latte</Heading>
                    <Button  color="red" leftIcon={<BiSolidHeart />}>
                      Liked
                    </Button>
                  </Flex>
                </Card>
              </Box>
            </TabPanel>
            <TabPanel h="100vh" p="48px">
              <Heading color="#3e5a7b">Liked blogs</Heading>
              <Box
                mt="48px"
                bg="#ffffff"
                w="100%"
                h="600px"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                p="32px"
              ></Box>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
      {/* </VStack>F */}
      <Box></Box>
    </Box>
  );
}
