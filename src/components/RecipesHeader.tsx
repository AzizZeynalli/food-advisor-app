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
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
type Category = {
  strArea: string;
  strCategory: string;
}

export function RecipesHeader() {
  const [areas, setAreas] = useState<Category[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);


  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        setAreas(response.data.meals || []);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        setCategories(response.data.meals || []);
      } catch (error) {
        console.log(error);
      }
    };

    Promise.all([fetchAreas(), fetchCategories()]);

  }, []);


  return (
    <Box
      bg="#EEF8FD"
      bgImage="/images/guakka.svg"
      bgRepeat="no-repeat"
      bgPosition="top 20px left 20px"
    >
      <Flex display='flex' justifyContent='center' gap='24px' pt='24px'>
        <Select w='150px' borderRadius='24px' outline='0' border='0' _hover={{bg:"#d6e0e7"}} _active={{bg:"#d6e0e7", color:"#405167"}}>
          <option>Select</option>
          {areas.map((area) => (
            <option key={area.strArea}>{area.strArea}</option>
          ))}
        </Select> 
        <Select w='150px' borderRadius='24px' outline='0' border='0' _hover={{bg:"#d6e0e7"}} _focus={{bg:"#d6e0e7", color:"#405167"}}>
          <option>Select</option>
          {categories.map((category) => (
            <option key={category.strCategory}>{category.strCategory}</option>
          ))}
        </Select>
      </Flex>
      <Flex justifyContent='center' py='24px'>
        <Input w='70%' placeholder="Search by recipe title" bg='#fff' border='gray.100' />
        <Button
        zIndex='1'
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
