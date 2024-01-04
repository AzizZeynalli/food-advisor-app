"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  HStack,
  ModalFooter,
} from "@chakra-ui/react";
import {
  Box,
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
 
  
  const handleAccept = () => {
    setAgreeTerms(true);
    setIsTermsModalOpen(false);
  };

  const handleReject = () => {
    setAgreeTerms(false)
    setIsTermsModalOpen(false);
  };
  const {
    control,
    formState: { errors, isValid },
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
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
  
  return (
    
    <VStack
      minWidth="400px"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      gap="0"
      bg="#EEF8FD"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="left 5% top 70%"
      bgSize="20%"
    >
      <Image
        width="20%"
        src="../images/Logo.svg"
        mb="20px"
        onClick={() => {
          router.push("/");
        }}
      />
      <VStack width="35%">
        <Text fontWeight="700" fontSize="30px">
          Create your account
        </Text>
        <Text>Register your account to save your settings</Text>
        <FormControl
          isInvalid={!!errors?.username}
          mb={errors?.username ? 0 : 6}
        >
          <FormLabel>Username</FormLabel>
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Username is required!",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username cannot exceed 20 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message:
                  "Username can only contain letters, numbers, and underscores",
              },
            }}
            render={({ field }) => <Input {...field} bg="white" />}
          />
          <FormErrorMessage fontSize="14px">
            {errors?.username?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.email} mb={errors?.email ? 0 : 6}>
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
                borderWidth="1px 1px 1px 0px"
                backgroundColor="white"
                borderLeftRadius="0"
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

        <Checkbox
          width="100%"
          mb="20px"
          isChecked={agreeTerms}
         
          onChange={() => {
          
            if (!agreeTerms) {
              setIsTermsModalOpen(true); // Checkbox işaretlenmediyse modalı aç
            }
          }}
        >
          I agree with{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => setIsTermsModalOpen(true)}
          >
            terms and conditions
          </span>
        </Checkbox>
        <Modal
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
          size="2xl"
          
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" >Terms and Conditions</ModalHeader>
            <ModalCloseButton />
            <ModalBody style={{ overflowY: 'auto', maxHeight: '60vh' }}>
              <Text>
                FOODERRA strives to provide information on the "Fooderra"
                Application that is as accurate as possible. However, FOODERRA
                shall not be held liable for any omissions, inaccuracies or
                deficiencies in the information provided, whether caused by
                itself or by third party partners who provide it with such
                information. FOODERRA, as publisher of the "Fooderra"
                Application, is only bound by an obligation of means: its
                liability can only be engaged if it is shown that it has not
                implemented the means necessary for the execution of the
                contract. The User agrees to use the "Fooderra" Application
                under his own responsibility and at his own risk. The
                information communicated via the "Fooderra" Application by
                FOODERRA is for information purposes only. The User is informed
                that he is free to follow or not follow the advice provided
                through the "Fooderra" Application and that he may not, under
                any circumstances, seek the responsibility of FOODERRA in the
                event that the implementation of these recommendations does not
                lead to the expected result. FOODERRA cannot be held liable in
                the event of force majeure. Are considered as force majeure,
                events beyond the control of the parties, which they could not
                reasonably be required to foresee and which they could not
                reasonably avoid or overcome insofar as their occurrence makes
                the performance of the obligations totally impossible. Use of
                the "Fooderra" Application is at the User's sole risk. Under no
                circumstances shall FOODERRA be held liable for any direct or
                indirect damage, including but not limited to, infection by
                viruses, loss of data or programs, loss of use of computer
                equipment (including but not limited to software, hard drives,
                or any system), financial losses (such as but not limited to
                loss of business or loss of opportunity) following the visit to
                or use of the "Fooderra" Application.
              </Text>
              
              
              
            </ModalBody>
            <ModalFooter>
            <HStack justifyContent="space-between" width="100%" >
              <Button colorScheme="gray" variant="solid" color="black" onClick={handleReject}>
                Reject
              </Button>
              <Button colorScheme="gray" variant="solid" color="black" onClick={handleAccept}>
                Accept
              </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button
          mb="20px"
          width="100%"
          colorScheme="blue"
          variant="solid"
          color="white"
          onClick={handleSubmit(onSubmit)}
          isDisabled={!isValid || !agreeTerms}
        >
          Sign Up
        </Button>
        <Text>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </span>
        </Text>
      </VStack>
    </VStack>
  );
};
export default SignUp;
