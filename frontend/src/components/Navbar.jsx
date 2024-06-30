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
  Image,
} from "@chakra-ui/react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  return (
    <Box
      bg="linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
      color={"white"}
      py={4}
      borderBottom={"1.5px solid #fff"}
    >
      <Flex
        maxW="container.lg"
        mx="auto"
        px={4}
        align="center"
        justifyContent={"space-around"}
      >
        <Image
          cursor={"pointer"}
          src={logo1}
          w={"10%"}
          borderRadius={"50%"}
          p={2}
          onClick={() => {
            navigate("/");
            setIsLoginClicked(false);
          }}
        />
        <IconButton
          display={["flex", "none"]}
          aria-label="Menu"
          colorScheme="white"
          icon={<RiMenu2Fill size={20} />}
          onClick={onOpen}
        />
        <HStack gap={10} display={["none", "flex"]}>
          <Button
            variant="link"
            colorScheme="white"
            onClick={() => navigate("/lobby")}
          >
            Mock Interview
          </Button>
          <Button variant="link" colorScheme="white">
            Resources
          </Button>
          <Button variant="link" colorScheme="white">
            Jobs
          </Button>
          <Button variant="link" colorScheme="white">
            Community
          </Button>
        </HStack>
        <Link
          to="/login"
          style={{ display: isLoginClicked ? "none" : "block" }}
        >
          <Button
            colorScheme="white"
            variant="outline"
            _hover={{
              bg: "white",
              color: "green.500",
            }}
            onClick={() => setIsLoginClicked(true)}
          >
            Login / Register
          </Button>
        </Link>
      </Flex>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent bg="linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)">
          <DrawerHeader borderBottomWidth="1px">
            <HStack justifyContent={"space-between"}>
              <Text variant="h6" color={"white"}>
                Menu
              </Text>
              <IconButton
                aria-label="Close"
                icon={<IoMdClose size={20} />}
                onClick={onClose}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              spacing={4}
              alignItems={"start"}
              justifyContent={"flex-start"}
              h={"full"}
              pos={"relative"}
            >
              <Button variant="link" color="white" onClick={onClose}>
                Mock Interview
              </Button>
              <Button variant="link" color="white" onClick={onClose}>
                Resources
              </Button>
              <Button variant="link" color="white" onClick={onClose}>
                Jobs
              </Button>
              <Link
                href="/login"
                style={{ minWidth: "100%", position: "absolute", bottom: 20 }}
              >
                <Button color="white" variant="outline" w={"full"}>
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
