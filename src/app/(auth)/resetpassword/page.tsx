"use client";
import EmailInput from "@/components/(formComponents)/EmailInput";
import ForgotPassButton from "@/components/(formComponents)/ForgotPassButton";
import ResetNew from "@/components/(formComponents)/ResetNew";
import ResetRepeat from "@/components/(formComponents)/ResetRepeat";
import { VStack, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ResetPassword = () => {
  const router = useRouter();
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { formState, handleSubmit, watch } = methods;
  const { isValid } = formState;

  const onSubmit = async (data: any) => {
    try {
      const resetData = {
        email: data.email,
        newPassword: data.newPassword,
      };
      const response = await axios.put(
        'https://fooderra-api.vercel.app/api/resetpassword',
        resetData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Password reset successful:', response.data);
  
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

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
          Reset your password
        </Text>
        <Text mb="20px" fontSize={{ base: "14px", md: "16px" }}>
          Please choose a new password to finishing sign in
        </Text>
        <FormProvider {...methods}>
          <ResetNew />
          <ResetRepeat />
          <Button
            mb="20px"
            mt="20px"
            width="100%"
            colorScheme="blue"
            variant="solid"
            type="submit"
            color="white"
            onClick={() => {
              handleSubmit(onSubmit);
              router.push("/login");
            }}
            isDisabled={
              !isValid || watch("newPassword") !== watch("confirmPassword")
            }
          >
            Confirm
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
        </FormProvider>
      </VStack>
    </VStack>
  );
};
export default ResetPassword;
