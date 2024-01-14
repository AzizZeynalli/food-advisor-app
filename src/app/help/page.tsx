"use client";
import axios from "axios";
import { VStack, Image, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, RefObject } from "react";
import { Controller, useForm } from "react-hook-form";
import PasswordInput from "@/components/(formComponents)/PasswordInput";
import EmailInput from "@/components/(formComponents)/EmailInput";
import LoginButton from "@/components/(formComponents)/LoginButton";
import HelpTitle from "@/components/helpPage/HelpTitle";
import HelpTextarea from "@/components/helpPage/HelpTextarea";
import HelpButton from "@/components/helpPage/HelpButton";
import emailjs from "@emailjs/browser";
const HelpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (window) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      };
    }
  }, []);

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
  const form: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = (e: any) => {
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_h58rsde",
          "template_bmikcsn",
          form.current,
          "g7ff1YFVqqwiDDX1K"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title:
                "We received your application. Please wait for our response!",
              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
              colorScheme: "blue",
            });
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.error("Form ref is not defined.");
    }
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <VStack
      gap="0"
      justifyContent="center"
      alignItems="center"
      minWidth="400px"
      height="100vh"
      padding="50px"
      shadow="sm"
      borderWidth={3}
      borderRadius="lg"
    >
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
      <Text
        alignSelf="flex-start"
        pl="10%"
        pb="20px"
        fontSize="20px"
        fontWeight="700"
      >
        If you have any problem, please write us!
      </Text>
      <VStack width="80%">
        <form ref={form} style={{ width: "100%" }} action="#">
          <EmailInput errors={errors} control={control} />
          <HelpTitle errors={errors} control={control} />
          <HelpTextarea errors={errors} control={control} />
          <HelpButton
            handleSubmit={handleSubmit}
            onSubmit={sendEmail}
            isValid={isValid}
            isloading={isloading}
          />
        </form>
      </VStack>
    </VStack>
  );
};
export default HelpPage;
