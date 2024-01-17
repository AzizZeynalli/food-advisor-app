"use client";
import EmailInput from "@/components/(formComponents)/EmailInput";
import ForgotPassButton from "@/components/(formComponents)/ForgotPassButton";
import { VStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

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
  const onSubmit = async (data: any) => {
    //console.log("Form submitted:", data);
    //const email = getValues();
    try {
      const response = await axios.post(
        "https://fooderra-api.vercel.app/api/users",
        { email: data.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    const handleKeyPress = (e:any)=>{
      if(e.key === "Enter" && isValid){
        handleSubmit(onSubmit)();
      }
    }
    document.addEventListener('keypress',handleKeyPress);
    return()=>{
      document.removeEventListener("keypress",handleKeyPress);
    };
  },[isValid,handleSubmit,onSubmit]);
  return (
    <VStack
      gap="0"
      bg="#EEF8FD"
      minWidth="400px"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="left 5% top 70%"
      bgSize={{ base: "0", "2xl": "20%" }}
    >
      <Image
        src="../images/Logo.svg"
        cursor="pointer"
        width={{ base: "40%", sm: "35%", md: "30%", lg: "20%" }}
        mb={{ base: "20px", lg: "40px" }}
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
        alignItems="flex-start"
      >
        <Text fontSize={{ base: "20px", md: "30px" }} fontWeight="600">
          Forgot your password?
        </Text>
        <Text mb="20px" fontSize={{ base: "14px", md: "16px" }}>
          Please enter the email you use to sign in
        </Text>
        <EmailInput errors={errors} control={control} />
        <ForgotPassButton
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isValid={isValid}
        />
      </VStack>
    </VStack>
  );
};
export default ForgotPassword;
