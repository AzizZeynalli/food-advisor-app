import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

export function RecipesCard() {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src='/images/guakka.svg' alt="" />
        <VStack>
          <Heading textAlign='left'>Product</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            necessitatibus dolorem eveniet ullam nobis ratione?
          </Text>
          <Divider />
          <CardFooter>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Read more
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </CardFooter>
        </VStack>
      </CardBody>
    </Card>
  );
}
