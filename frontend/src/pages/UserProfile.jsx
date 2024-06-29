import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdImages, IoIosRemoveCircle } from "react-icons/io";
import Select from "react-select";
import { FileUploader } from "react-drag-drop-files";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Select as C_Select,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
  useToast,
  Textarea,
} from "@chakra-ui/react";

export default function Profile() {
  const skillOptions = [
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "Git", label: "Git" },
    { value: "Github", label: "Github" },
    { value: "HTML5", label: "HTML5" },
    { value: "CSS3", label: "CSS3" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Redux", label: "Redux" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "EcmaScript", label: "EcmaScript" },
    { value: "Leadership", label: "Leadership" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Project Management", label: "Project Management" },
    { value: "Data Analysis", label: "Data Analysis" },
    { value: "Communication", label: "Communication" },
    { value: "Branding", label: "Branding" },
  ];
  const interestedOptions = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Contract", label: "Contract" },
    { value: "Freelance", label: "Freelance" },
    { value: "Intern", label: "Intern" },
  ];

  const typeOptions = [
    { value: "On-Site", label: "On-Site" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Remote", label: "Remote" },
  ]
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const inputRef = React.useRef(null);
  const [image, setImage] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");
  const [name, setName] = React.useState("Sayandeep Adhikary");
  const [email, setEmail] = React.useState("sayandeepadhikary2003@gmail.com");
  const [isEditable, setIsEditable] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const nameRef = React.useRef(null);

  const handleImageChange = async (e) => {
    e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfilePicChange = async (e) => {
    e.target.files[0] && setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleProfilePicRemove = () => {
    setProfilePic("");
  };

  const handleNameEdit = () => {
    if (isEditable) {
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "")
      return toast({
        title: "Name cannot be empty.",
        status: "error",
        variant: "subtle",
        position: "top",
        isClosable: true,
      });
    setIsEditable(false);
  };

  useEffect(() => {
    document.title = "User's Profile";
    window.scrollTo(0, 0);
    // if (!isLoggedIn) {
    //   navigate("/login", { state: { prevUrl: "/profile" } });
    // }
  }, []);

  return (
    <Box pt={["4rem", "6rem"]} pb={[0, "8rem"]}>
      <Input
        type="file"
        opacity={0}
        ref={inputRef}
        pos={"absolute"}
        zIndex={-500}
        accept="image/*"
        onChange={(e) => handleProfilePicChange(e)}
      />
      <Box minH={["fit-content", "40vh"]} pos={"relative"} px={[0, 20]}>
        <Image
          src={image}
          h={["200px", "450px"]}
          w={"100%"}
          borderRadius={[0, "1rem"]}
          bg={"linear-gradient(to right, #ff6e7f, #bfe9ff)"}
        />
        <Box pos={"absolute"} top={["10px", "1rem"]} right={["10px", "6rem"]}>
          <label htmlFor="file-upload">
            <Box
              p={2}
              zIndex={100}
              borderRadius={"full"}
              bg={"#fff"}
              cursor={"pointer"}
            >
              <FaCamera size={20} />
            </Box>
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => handleImageChange(e)}
              accept="image/*"
            />
          </label>
        </Box>
        <Card
          direction={{ base: "column", sm: "row" }}
          variant="outline"
          maxW={["100%", "2xl"]}
          pos={["", "absolute"]}
          left={0}
          right={0}
          bottom={["", "-25%"]}
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          p={[10, 6]}
          borderRadius={[0, "1rem"]}
        >
          <Avatar
            size={"2xl"}
            cursor={"pointer"}
            name={name}
            bg={"linear-gradient(to right, #ff416c, #ff4b2b)"}
            color={"white"}
            src={profilePic}
            transform={"scale(1.2)"}
            transition={"all 0.3s ease-in-out"}
            _hover={{ filter: "brightness(0.8)" }}
            onClick={onOpen}
          />

          <Stack>
            <CardBody textAlign={["center", "left"]}>
              <HStack justifyContent={["center", "left"]}>
                {isEditable ? (
                  <form onSubmit={handleNameSubmit}>
                    <Stack flexDir={["column", "row"]}>
                      <Input
                        type="text"
                        textAlign={["center", "left"]}
                        ref={nameRef}
                        placeholder="Enter Name"
                        variant={"flushed"}
                        autoFocus
                        _focusVisible={{ borderBottom: "1px solid #ff4e4e" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <ButtonGroup
                        variant="outline"
                        size={["sm", "md"]}
                        mx={"auto"}
                      >
                        <Button colorScheme="red" type="submit">
                          Save
                        </Button>
                        <Button onClick={() => setIsEditable(false)}>
                          Cancel
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  </form>
                ) : (
                  <>
                    <Heading
                      textTransform={"capitalize"}
                      size="md"
                      fontFamily={"'Inter', sans-serif"}
                    >
                      {name}
                    </Heading>
                    <IconButton
                      // variant={'outline'}
                      colorScheme="red"
                      size={"sm"}
                      icon={<CiEdit size={20} />}
                      onClick={handleNameEdit}
                    />
                  </>
                )}
              </HStack>

              <Text py="2" fontFamily={"'Inter', sans-serif"}>
                {email}
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                colorScheme="red"
                leftIcon={<MdLogout size={20} />}
                mx={["auto", "0"]}
                onClick={() => {
                  signOutUser();
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
      <Modal isCentered size={["xs", "xl"]} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"1rem"}>
          <ModalCloseButton _focusVisible={{ outline: "none" }} />
          <ModalBody p={8}>
            <Button
              variant={"ghost"}
              colorScheme="red"
              w={"100%"}
              justifyContent={"start"}
              my={2}
              onClick={() => {
                inputRef.current.click();
                onClose();
              }}
            >
              <HStack>
                <IconButton
                  variant={"outline"}
                  colorScheme="red"
                  size={"sm"}
                  icon={<IoMdImages size={20} />}
                  pointerEvents={"none"}
                />
                <Text fontFamily={"'Inter', sans-serif"}>
                  Change Profile Picture
                </Text>
              </HStack>
            </Button>
            <Divider />
            <Button
              variant={"ghost"}
              colorScheme="red"
              w={"100%"}
              justifyContent={"start"}
              my={2}
              onClick={() => {
                handleProfilePicRemove();
                onClose();
              }}
            >
              <HStack>
                <IconButton
                  variant={"outline"}
                  colorScheme="red"
                  size={"sm"}
                  icon={<IoIosRemoveCircle size={20} />}
                  pointerEvents={"none"}
                />
                <Text fontFamily={"'Inter', sans-serif"}>
                  Remove Profile Picture
                </Text>
              </HStack>
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box pt={40} px={20}>
        <Text
          fontFamily={"'Libre Baskerville', serif"}
          textAlign={"center"}
          fontSize={["xl", "2xl"]}
          textDecor={"underline"}
          color={"#658C4A"}
        >
          Enter your basic details
        </Text>
        <VStack my={4}>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                First Name <span style={{ color: "red" }}>*</span>
              </Text>
              <Input
                type="text"
                placeholder="Enter your first name"
                size="md"
                required
              />
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Last Name <span style={{ color: "red" }}>*</span>
              </Text>
              <Input
                type="text"
                placeholder="Enter your Last name"
                size="md"
                required
              />
            </VStack>
          </Stack>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Github Profile <span style={{ color: "red" }}>*</span>
              </Text>
              <Input type="text" size="md" required />
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                LinkedIn Profile <span style={{ color: "red" }}>*</span>
              </Text>
              <Input type="text" size="md" required />
            </VStack>
          </Stack>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Skills <span style={{ color: "red" }}>*</span>
              </Text>
              <Box w={"100%"}>
                <Select isMulti name="skills" options={skillOptions} required />
              </Box>
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Experience <span style={{ color: "red" }}>*</span>
              </Text>
              <C_Select placeholder="Select option">
                <option value="0-1 Year">0-1 Year</option>
                <option value="1-3 Years">0-1 Years</option>
                <option value="3+ Years">3+ Years</option>
              </C_Select>
            </VStack>
          </Stack>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Resume <span style={{ color: "red" }}>*</span>
              </Text>
              <Box w={"100%"}>
                <FileUploader
                  handleChange={(file) => {
                    setFile(file);
                  }}
                  label="Upload or drop your resume right here"
                  name="resume"
                  required
                  types={["PDF"]}
                />
              </Box>
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Biography
              </Text>
              <Textarea placeholder="Write your Bio here" />
            </VStack>
          </Stack>
        </VStack>
      </Box>
      <Box pt={18} px={20}>
        <Text
          fontFamily={"'Libre Baskerville', serif"}
          textAlign={"center"}
          fontSize={["xl", "2xl"]}
          textDecor={"underline"}
          color={"#658C4A"}
        >
          Job Preferences
        </Text>
        <VStack my={4}>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                Availability <span style={{ color: "red" }}>*</span>
              </Text>
              <C_Select placeholder="Select option">
                <option value="open to work">Open to work</option>
                <option value="just browsing">Just browsing</option>
                <option value="Not looking for work">
                  Not looking for work
                </option>
              </C_Select>
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                When can you start a new role?{" "}
                <span style={{ color: "red" }}>*</span>
              </Text>
              <C_Select placeholder="Select option">
                <option value="Immediately">Immediately</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
              </C_Select>
            </VStack>
          </Stack>
          <Stack flexDir={["column", "row"]} w={"full"} gap={5}>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                What type of employment are you interested in?{" "}
                <span style={{ color: "red" }}>*</span>
              </Text>
              <Box w={'100%'}>
                <Select
                  isMulti
                  name="interested options"
                  options={interestedOptions}
                  required
                />
              </Box>
            </VStack>
            <VStack align={"start"} minW={"50%"}>
              <Text
                fontFamily={'"Roboto","sans-serif"'}
                fontSize={["md", "xl"]}
                textAlign={"center"}
                mt={2}
              >
                What types of roles would you like to see? <span style={{ color: "red" }}>*</span>
              </Text>
              <Box w={'100%'}>
                <Select
                  isMulti
                  name="interested options"
                  options={typeOptions}
                  required
                />
              </Box>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
}
