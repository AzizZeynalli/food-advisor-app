import { VStack, Image, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

const SignUp = () => {
    return(
        <VStack minWidth="465px"  height="100vh" justifyContent="center" alignItems="center">
            <Image src="../images/login.svg"/>   
            <Text>Create your account</Text> 
            <Text>Register your account to save your settings.</Text>   
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input/>
                <FormLabel>Email address</FormLabel>
                <Input/>
                <FormLabel>Password</FormLabel>
                <Input/>
            </FormControl>
            <Button width="100%" bg="gray.400">Sign Up</Button>
        </VStack>
    )
}
export default SignUp;