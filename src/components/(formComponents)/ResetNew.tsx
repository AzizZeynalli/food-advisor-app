import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { FormControl, FormErrorMessage, FormLabel, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { Controller } from "react-hook-form"
interface IReseetNewProps{
    methods:any,
}
const ResetNew: React.FC<IReseetNewProps> = ({methods}) => {
    
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl
          isInvalid={!!methods.formState.errors?.newPassword}
          mb={methods.formState.errors?.newPassword ? 0 : 6}
        >
          <FormLabel>New password</ FormLabel>
          <InputGroup>
            <Controller
              name="newPassword"
              control={methods.control}
              rules={{
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]*$/,
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
            {methods.formState.errors?.newPassword?.message}
          </FormErrorMessage>
        </FormControl>
  )
}

export default ResetNew
