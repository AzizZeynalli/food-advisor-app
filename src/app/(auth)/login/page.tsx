"use client";
import axios from "axios";
import { VStack, Image, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PasswordInput from "@/components/(formComponents)/PasswordInput";
import EmailInput from "@/components/(formComponents)/EmailInput";
import LoginButton from "@/components/(formComponents)/LoginButton";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  
  const toast = useToast();
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
  const onSubmit = async () => {
    const { email, password } = getValues();
    setisLoading(true);
    try {
      const response = await axios.post(
        "https://fooderra-api.vercel.app/api/login",
        { email, password }
      );
      if (response.status !== 200) {
       
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      router.push("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setIsErr(true);
     
    } finally {
      setisLoading(false);
    }
  };
  return (
    <VStack
      //padding="50px"
      gap="0"
      bg="#EEF8FD"
      justifyContent="center"
      alignItems="center"
      minWidth="400px"
      height="100vh"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="left 5% top 70%"
      bgSize={{ base: "0", "2xl": "20%" }}
    >
      {/* {isErr && <Alert><AlertDescription></AlertDescription></Alert>} */}
      <Image
        src="../images/Logo.svg"
        cursor="pointer"
        width={{ base: "40%", sm: "35%", md: "30%", lg: "20%" }}
        mb={{ base: "20px", lg: "40px" }}
        alt=""
        onClick={() => {
          router.push("/");
        }}
      />

      <VStack
        width={{
          base: "80%",
          sm: "75%",
          md: "65%",
          lg: "60%",
          xl: "50%",
          "2xl": "35%",
        }}
      >
        <form action="" style={{width:"100%"}}>
          <EmailInput errors={errors} control={control} />
          <PasswordInput
            errors={errors}
            control={control}
            showPassword={showPassword}
            handleTogglePassword={handleTogglePassword}
          />
          <Text alignSelf="flex-end" color="blue">
            <Link href="/forgotpassword">Forgot password?</Link>
          </Text>
          <LoginButton
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            isValid={isValid}
            isloading={isloading}
          />
        </form>
      </VStack>
    </VStack>
  );
};
export default LoginPage;
