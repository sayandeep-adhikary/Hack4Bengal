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
    <Box bg="gray.200" py={4}>
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
          colorScheme="teal"
          icon={<RiMenu2Fill size={20} />}
          onClick={onOpen}
        />
        <HStack gap={10} display={["none", "flex"]}>
          <Button variant="link" colorScheme="teal">
            Mock Interview
          </Button>
          <Button variant="link" colorScheme="teal">
            Resources
          </Button>
          <Button variant="link" colorScheme="teal">
            Jobs
          </Button>
        </HStack>
        <Link to="/login">
          <Button colorScheme="teal" variant="outline">
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
              <Button variant="link" colorScheme="teal" onClick={onClose}>
                Mock Interview
              </Button>
              <Button variant="link" colorScheme="teal" onClick={onClose}>
                Resources
              </Button>
              <Button variant="link" colorScheme="teal" onClick={onClose}>
                Jobs
              </Button>
              <Link to="/login" onClick={onClose}>
                <Button colorScheme="teal" variant="outline" w={"full"}>
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
