import { Button, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface IForgotPassButtonProps {
    handleSubmit: any,
    onSubmit: any,
    isValid: any,

}
const ForgotPassButton: React.FC<IForgotPassButtonProps> = ({handleSubmit, onSubmit, isValid}) => {
    const router = useRouter();
  return (
    <VStack width="100%">
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
  )
}

export default ForgotPassButton
