import {
  Box,
  Button,
  Card,
  Container,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  // const putData = () => {
  //   set(ref(db, "users/shuvayu"), {
  //     id: 1,
  //     name: "Shuvayu",
  //     age: 20,
  //   });
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [signedup, setSignedUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // const firebase = useFirebase();
  // const signupUserWithEmailandPassword =
  //   firebase.signupUserWithEmailandPassword;
  // const signinUserWithEmailandPassword =
  //   firebase.signinUserWithEmailandPassword;
  // const signinWithGoogle = firebase.signinWithGoogle;
  // const loggedin = firebase.loggedin;
  // const navigate = useNavigate();
  // const HandleButtonClick = () => {
  //   if (signedup) {
  //     signupUserWithEmailandPassword(name, email, password);
  //   } else {
  //     signinUserWithEmailandPassword(email, password);
  //   }
  // };

  // useEffect(() => {
  //   if (loggedin) {
  //     navigate("/");
  //   }
  // }, [loggedin, navigate]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  const options = ["Candidate", "Company"];

  return (
    <>
      <Container my={10} minW={["", "container.sm"]}>
        <Card>
          <Stack p={[4, 8]} alignItems={"start"} gap={5}>
            <Heading
              fontFamily={'"Roboto","sans-serif"'}
              borderBottom={"2px solid black"}
              maxWidth={"fit-content"}
              fontSize={["2xl", "5xl"]}
              mx={"auto"}
            >
              {signedup ? "Register" : "Login"}
            </Heading>
            <HStack
              {...group}
              w={"full"}
              justifyContent={"space-between"}
              gap={[1, 5]}
            >
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>
            {signedup ? (
              <>
                <Text
                  fontFamily={'"Roboto","sans-serif"'}
                  fontSize={["md", "xl"]}
                  textAlign={"center"}
                  mt={2}
                >
                  Name
                </Text>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your name"
                  size="md"
                  required
                />
              </>
            ) : null}
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
              mt={2}
            >
              Email address
            </Text>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              size="md"
              required
            />
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
            >
              Password
            </Text>
            <InputGroup size="md">
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <InputRightElement
                width="4.5rem"
                px={0}
                onClick={handleClickShowPassword}
                cursor={"pointer"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </InputRightElement>
            </InputGroup>
            <Button
              className="btn-border"
              bg="linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
              color={"white"}
              _hover={{
                bg: "white",
                color: "green.500",
              }}
              mx={"auto"}
              mt={4}
              w={"full"}
              // onClick={HandleButtonClick}
            >
              {signedup ? "Sign Up" : "Login"}
            </Button>
            {/* <Text
                  fontFamily={'"Roboto","sans-serif"'}
                  fontSize={["md", "xl"]}
                  textAlign={"center"}
                  mx={"auto"}
                  mt={2}
                >
                  Or Login with
                </Text>
                <Button
                  leftIcon={<FcGoogle />}
                  colorScheme="teal"
                  variant="outline"
                  mx={"auto"}
                  size={["md", "lg"]}
                  mt={2}
                  w={"full"}
                  // onClick={signinWithGoogle}
                >
                  Login with Google
                </Button> */}
            {/* <Button
                  leftIcon={<FaFacebook />}
                  colorScheme="teal"
                  variant="outline"
                  mx={"auto"}
                  size={["md", "lg"]}
                  mt={2}
                  w={"full"}
                >
                  Login with Facebook
                </Button> */}
            {/* <Button
                  leftIcon={<FaGithub />}
                  colorScheme="teal"
                  variant="outline"
                  mx={"auto"}
                  size={["md", "lg"]}
                  mt={2}
                  w={"full"}
                >
                  Login with Github
                </Button> */}
            <Text
              fontFamily={'"Roboto","sans-serif"'}
              fontSize={["md", "xl"]}
              textAlign={"center"}
              mx={"auto"}
              mt={2}
            >
              {signedup ? "Already have an account?" : "Don't have an account?"}
            </Text>
            <Button
              className="btn-border"
              bg="linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
              color={"white"}
              _hover={{
                bg: "white",
                color: "green.500",
              }}
              mx={"auto"}
              mt={4}
              w={"full"}
              onClick={() => {
                setSignedUp(!signedup);
                window.scrollTo(0, 0);
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              {signedup ? "Login" : "Register"}
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" minW={"50%"}>
      <input {...input} required />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "#658C4A",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
