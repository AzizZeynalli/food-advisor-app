"use client";

import { useAuth } from "@/contexts/authContext";
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
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BiUser,
  BiHeart,
  BiSolidHeart,
  BiSolidEditAlt,
  BiHash,
  BiSave,
  BiArrowBack,
} from "react-icons/bi";

export default function Profile() {
  const { user, unlikeRecipe, logout } = useAuth();
  const [isEditing, setIsEditing] = useBoolean();
  const router = useRouter();
  const [editedUsername, setEditedUsername] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  useEffect(() => {
    if (user) {
      setEditedUsername(user.username);
      setEditedEmail(user.email);
    }
  }, [user]);

  const handleUnlike = (mealId:string) => {
    if(window.confirm('Are you sure you want to delete this recipe from liked?')) {
      unlikeRecipe(mealId);
    }
  }

  const handleEditClick = () => {
    setIsEditing.toggle();
  };

  const handleSubmit = () => {
    setIsEditing.off();
  };
  return (
    <Box>
      <Tabs
        variant="soft-rounded"
        display="flex"
        flexDirection={{ lg: "row", base: "column" }}
      >
        <Button
          position="absolute"
          top="32px"
          left="32px"
          zIndex="1"
          bg="#233345"
          color="#fff"
          borderRadius="24px"
          _hover={{ bg: "#3e5a7b" }}
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          onClick={() => router.back()}
        >
          <BiArrowBack />
        </Button>
        <VStack
          minW="350px"
          bg="#cde9f9"
          h={{ lg: "100vh" }}
          justifyContent="space-between"
          py="48px"
          pos={{ lg: "fixed" }}
        >
          <VStack>
            <Avatar size="2xl" name={user?.username} />
            <Heading>{user?.username}</Heading>
          </VStack>
          <TabList flexDirection="column" alignItems="strech" w={{ lg: "90%" }}>
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
            w={{ lg: "90%" }}
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Sign out
          </Button>
        </VStack>
        <Box w="100%" position="relative" marginLeft={{ lg: "350px" }}>
          <TabPanels>
            <TabPanel p={{ lg: "48px", base: "16px" }}>
              <Heading color="#3e5a7b">About me</Heading>
              <VStack
                mt={{ lg: "48px", base: "16px" }}
                bg="#ffffff"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                as="form"
                p={{ md: "32px", base: "16px" }}
                w="100%"
              >
                <Flex
                  flexDirection="column"
                  gap="16px"
                  w={{ lg: "400px", base: "100%" }}
                >
                  <Flex bg="#f8fafc" alignItems="center" borderRadius="6px">
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
                      border="red"
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
            <TabPanel h={{ lg: "100vh" }} p={{ lg: "48px", base: "16px" }}>
              <Heading color="#3e5a7b">Liked recipes</Heading>
              <VStack
                mt={{ lg: "48px", base: "16px" }}
                bg="#ffffff"
                w="100%"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                p={{ md: "32px", base: "16px" }}
                alignItems="stretch"
                spacing={10}
              >
                {user?.likedRecipes.map((meal) => (
                  <Card
                    key={meal.idMeal}
                    direction="row"
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      objectFit="cover"
                      w="100px"
                      src={meal.strMealThumb}
                      alt=""
                    />
                    <Flex
                      p="16px"
                      justifyContent="space-between"
                      w="90%"
                      flexDirection={{ sm: "row", base: "column" }}
                    >
                      <VStack alignItems="flex-start" px={3}>
                        <Heading size="md">{meal.strMeal}</Heading>
                        <Text noOfLines={2}>
                          {meal.strInstructions}
                        </Text>
                      </VStack>
                      <Button minW="100px" color="red" leftIcon={<BiSolidHeart />} onClick={()=>handleUnlike(meal.idMeal)}>
                        Liked
                      </Button>
                    </Flex>
                  </Card>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel h={{ lg: "100vh" }} p={{ lg: "48px", base: "16px" }}>
              <Heading color="#3e5a7b">Liked blogs</Heading>
              <VStack
                mt={{ lg: "48px", base: "16px" }}
                bg="#ffffff"
                w="100%"
                boxShadow="0px 0px 16px 0px rgba(0, 0, 0, 0.5)"
                borderRadius="12px"
                p={{ md: "32px", base: "16px" }}
                alignItems="stretch"
              >
                <Card direction="row" overflow="hidden" variant="outline">
                  <Image
                    objectFit="cover"
                    w="100px"
                    h="100px"
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                  <Flex
                    p="16px"
                    justifyContent="space-between"
                    w="100%"
                    flexDirection={{ sm: "row", base: "column" }}
                  >
                    <Heading size="md">Latte</Heading>
                    <Button color="red" leftIcon={<BiSolidHeart />}>
                      Liked
                    </Button>
                  </Flex>
                </Card>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
      {/* </VStack>F */}
      <Box></Box>
    </Box>
  );
}
