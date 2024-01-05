"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  VStack,
  Image,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ForgotPassword = () => {
  const router = useRouter();
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
  return (
    <VStack
      padding="50px"
      gap="0"
      bg="#EEF8FD"
      minWidth="400px"
      height="100vh"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="left 5% top 70%"
      bgSize={{base: "10%",sm:"15%", lg: "20%"}}
    >
      <Image
        src="../images/Logo.svg"
        cursor="pointer"
        width={{base:"40%",sm:"35%",md: "30%",lg:"20%"}}
        mb={{base: "20px",lg:"40px"}}
        onClick={() => {
          router.push("/");
        }}
      />

      <VStack width={{base: "70%",sm: "60%" , md:"55%", lg: "45%", xl: "35%"}} alignItems="flex-start">
        <Text fontSize={{base: "20px", md: "30px"}} fontWeight="600">
          Forgot your password?
        </Text>
        <Text mb="20px" fontSize={{base:"14px", md:"16px"}}>Please enter the email you use to sign in</Text>
        <FormControl
          width="100%"
          isInvalid={!!errors?.email}
          mb={errors?.email ? 0 : 6}
        >
          <FormLabel>Email address</FormLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <Input {...field} bg="white" />}
          />
          <FormErrorMessage fontSize="14px">
            {errors?.email?.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mb="20px"
          mt="20px"
          width="100%"
          colorScheme="blue"
          variant="solid"
          color="white"
          onClick={handleSubmit(onSubmit)}
          isDisabled={!isValid}
        >
          Reset password
        </Button>

        <Button
          width="100%"
          colorScheme="blue"
          variant="solid"
          color="white"
          onClick={() => {
            router.push("/login");
          }}
        >
          Back to Login
        </Button>
      </VStack>
    </VStack>
  );
};
export default ForgotPassword;
