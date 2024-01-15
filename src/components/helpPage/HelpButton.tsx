import { Button, Spinner,Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'
 interface IHelpButtonProps {
    handleSubmit: any,
    onSubmit: any,
    isValid: any,
    isloading: boolean
 }
const HelpButton: React.FC<IHelpButtonProps> = ({handleSubmit,onSubmit, isloading,isValid}) => {
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
          {isloading ? <Spinner /> : "Send"}
        </Button>
        <Button
          width="100%"
          colorScheme="blue"
          variant="solid"
          color="white"
          onClick={() => {
            router.push("/");
          }}
        >
          Back to Home page
        </Button>
    </VStack>
  )
}

export default HelpButton