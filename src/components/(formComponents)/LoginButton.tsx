import { Button, Spinner,Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'
 interface ILoginButtonProps {
    handleSubmit: any,
    onSubmit: any,
    isValid: any,
    isloading: boolean
 }
const LoginButton: React.FC<ILoginButtonProps> = ({handleSubmit,onSubmit, isloading,isValid}) => {
    const router = useRouter();
  return (
    
    <>
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
    </>
  )
}

export default LoginButton
