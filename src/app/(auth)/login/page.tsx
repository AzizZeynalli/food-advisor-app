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
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    router.push("/")
  };
  return (
    <VStack
      padding="50px"
      gap="0"
      bg="#EEF8FD"
      height="100vh"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="left 5% top 70%"
      bgSize="20%"
    >
      <Image
        src="../images/Logo.svg"
        cursor="pointer"
        width="20%"
        mb="50px"
        onClick={() => {
          router.push("/");
        }}
      />

      <VStack width="35%" minWidth="465px">
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
        <FormControl
          isInvalid={!!errors?.password}
          mb={errors?.password ? 0 : 6}
        >
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
                  message:
                    "Password must include at least one lowercase letter, one uppercase letter, and one digit",
                },
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
                backgroundColor="transparent"
                outline="none"
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                onClick={handleTogglePassword}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage fontSize="14px">
            {errors?.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Text alignSelf="flex-end" color="blue">
          <Link href="/forgotpassword">Forgot password?</Link>
        </Text>
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
          {isloading ? <Spinner /> : "Login"}
        </Button>
        <Text>
          Don`t have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              router.push("/signup");
            }}
          >
            Signup
          </span>
        </Text>
      </VStack>
    </VStack>
  );
};
export default LoginPage;
