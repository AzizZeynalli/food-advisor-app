"use client"
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Input,
  Button,
} from "@chakra-ui/react";

export function RecipesHeader() {
  return (
    <Box
      bg="#EEF8FD"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="top 20px left 20px"
    >
      <Flex display='flex' justifyContent='center' gap='24px' pt='24px'>
        <Menu>
          <MenuButton  py='4px' px='16px' borderRadius='24px' _active={{bg:"#d6e0e7", color:"#405167"}} >
            Time
            <Icon as={ChevronDownIcon} />
          </MenuButton>
          <MenuList>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton  py='4px' px='16px' borderRadius='24px' _active={{bg:"#d6e0e7", color:"#405167"}} >
            Category
            <Icon as={ChevronDownIcon} />
          </MenuButton>
          <MenuList>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton  py='4px' px='16px' borderRadius='24px' _active={{bg:"#d6e0e7", color:"#405167"}} >
            IDK
            <Icon as={ChevronDownIcon} />
          </MenuButton>
          <MenuList>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
            <MenuItem>Random</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex justifyContent='center' py='24px'>
        <Input w='70%' placeholder="Search by recipe title" bg='#fff' border='gray.100' />
        <Button
        zIndex='10000'
          ml='-50px'
         bg="#233345"
         borderRadius="24px"
         _hover={{ bg: "#3e5a7b" }}
         px='24px'>
          <Icon as={Search2Icon} color='#fff' />
        </Button>
      </Flex>
    </Box>
  );
}
