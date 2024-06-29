import {
  Box,
  Flex,
  Button,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg="linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
      color={"white"}
      py={4}
    >
      <Flex
        maxW="container.lg"
        mx="auto"
        px={4}
        align="center"
        justifyContent={"space-between"}
      >
        <IconButton
          display={["flex", "none"]}
          aria-label="Menu"
          colorScheme="white"
          icon={<RiMenu2Fill size={20} />}
          onClick={onOpen}
        />
        <HStack gap={10} display={["none", "flex"]}>
          <Button variant="link" colorScheme="white">
            Mock Interview
          </Button>
          <Button variant="link" colorScheme="white">
            Resources
          </Button>
          <Button variant="link" colorScheme="white">
            Jobs
          </Button>
        </HStack>
        <Link to="/login">
          <Button colorScheme="white" variant="outline" _hover={{
            bg: "white",
            color: "green.500"
          }}>
            Login / Register
          </Button>
        </Link>
      </Flex>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <HStack justifyContent={"space-between"}>
              <Text variant="h6">Menu</Text>
              <IconButton
                aria-label="Close"
                icon={<IoMdClose size={20} />}
                onClick={onClose}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={"start"} h={"full"}>
              <Button variant="link" colorScheme="white" onClick={onClose}>
                Mock Interview
              </Button>
              <Button variant="link" colorScheme="white" onClick={onClose}>
                Resources
              </Button>
              <Button variant="link" colorScheme="white" onClick={onClose}>
                Jobs
              </Button>
              <Link to="/login" onClick={onClose}>
                <Button colorScheme="white" variant="outline" w={"full"}>
                  Login / Register
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
