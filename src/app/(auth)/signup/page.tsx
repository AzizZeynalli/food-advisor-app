"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  VStack,
  Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  IconButton,
  InputRightElement,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };
  const {
    control,
    formState: { errors,isValid },
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data:any) => {
    // Form gönderme işlemleri
    console.log("Form submitted:", data);
  };
  return (
    <VStack
      minWidth="465px"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      gap="0"
      bg="#D8F9F7"
    >
      <Image src="../images/login.svg" />
      <Text fontWeight="700" fontSize="30px">
        Create your account
      </Text>
      <Text>Register your account to save your settings.</Text>
      <FormControl
        width="35%"
        mt="20px"
        mb="20px"
        isInvalid={!!errors?.username || !!errors?.email || !!errors?.password}
      >
        <FormLabel>Username</FormLabel>
        <Controller
          name="username"
          control={control}
          rules={{
            required: "Username is required!",
          }}
          render={({ field }) => <Input {...field} bg="white" />}
        />
        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
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
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required!",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                bg="white"
              />
            )}
          />

          <InputRightElement>
            <IconButton
              variant="gray"
              borderWidth="1px 1px 1px 0px"
              borderColor="gray.300"
              backgroundColor="white"
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
              onClick={handleTogglePassword}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Checkbox width="35%" isChecked={agreeTerms}
        onChange={handleToggleAgreeTerms}>
        I agree with{" "}
        <Link href={"/"} style={{ color: "blue", textDecoration: "underline" }}>
          terms and conditions
        </Link>
      </Checkbox>
      <Button
        mt="20px"
        width="35%"
        colorScheme="blue"
        variant="solid"
        color="white"
        onClick={handleSubmit(onSubmit)}
        isDisabled={!isValid || !agreeTerms} 
      >
        Sign Up
      </Button>
    </VStack>
  );
};
export default SignUp;
