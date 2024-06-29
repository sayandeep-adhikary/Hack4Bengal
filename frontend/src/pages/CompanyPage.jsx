import React, { useState } from "react";
import {
  Flex,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { PostJob } from "../components/PostJob";

const CompanyPage = () => {
  const [postJob, setPostJob] = useState(false);

  const handleChange = () => {
    setPostJob((prev) => !prev);
  };

  return (
    <>
      <Flex
        className="company-hero"
        w={"full"}
        flexDir={"column"}
        gap={10}
        padding={100}
      >
        <Flex>
          <Text
            margin={35}
            width={"50%"}
            textColor={"var(--primary)"}
            fontSize={70}
          >
            Hire Employers Quickly and Easily!
          </Text>
          <Flex width={"50%"}>
            <SimpleGrid w={"full"} columns={2} spacing={10}>
              <Box display={"flex"} height="auto">
                <Image
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMwxT54CpYM3WmknWecJ-HDlCLVcNuiMbGA&s"
                />
              </Box>
              <Box display={"flex"} height="auto">
                <Image
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR-z4z3xDvOJhMRxSUoVzpD30sYlkWC5dxMrkML9gyJ13agyFraClsyEbV6tEz2yDw18&usqp=CAU"
                />
              </Box>
              <Box display={"flex"} height="auto">
                <Image
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewwM08lHKbdzSiIetC07yLGj957pwUBHgig&s"
                />
              </Box>
              <Box display={"flex"} height="auto">
                <Image
                  objectFit={"cover"}
                  height={"100%"}
                  width={"100%"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVp8gRyhvgdenEn5JZufF9GZv4Y6azj_CJiA&s"
                />
              </Box>
            </SimpleGrid>
          </Flex>
        </Flex>
        <VStack marginTop={5}>
          <Text textColor={"var(--primary)"} fontSize={40} textAlign={"center"}>
            Why Hire From Inter Prep
          </Text>
          <SimpleGrid marginTop={10} w={"full"} columns={2} spacing={10}>
            <Box display={"flex"} height="auto" gap={10} alignItems={"center"}>
              <Image
                src="https://webcdn.workindia.in/assets/img/adslanding2/EasyToHire.jpg"
                height={"78px"}
                width={"78px"}
              />
              <Flex flexDir={"column"}>
                <Text textColor={"var(--primary)"} fontSize={30}>
                  Easy To Hire
                </Text>
                <Text textColor={"grey"} fontSize={15} fontWeight={200}>
                  Easy to hire means finding and securing the right talent
                  quickly and with minimal effort.
                </Text>
              </Flex>
            </Box>
            <Box display={"flex"} height="auto" gap={10} alignItems={"center"}>
              <Image
                src="https://webcdn.workindia.in/assets/img/adslanding2/FastHiring.jpg"
                height={"78px"}
                width={"78px"}
              />
              <Flex flexDir={"column"}>
                <Text textColor={"var(--primary)"} fontSize={30}>
                  Superfast hiring
                </Text>
                <Text textColor={"grey"} fontSize={15} fontWeight={200}>
                  Superfast hiring fills positions quickly and efficiently.
                </Text>
              </Flex>
            </Box>
            <Box display={"flex"} height="auto" gap={10} alignItems={"center"}>
              <Image
                src="https://webcdn.workindia.in/assets/img/adslanding2/Affordable.jpg"
                height={"78px"}
                width={"78px"}
              />
              <Flex flexDir={"column"}>
                <Text textColor={"var(--primary)"} fontSize={30}>
                  Affordable pricing
                </Text>
                <Text textColor={"grey"} fontSize={15} fontWeight={200}>
                  Affordable pricing offers good value within budget.
                </Text>
              </Flex>
            </Box>
            <Box display={"flex"} height="auto" gap={10} alignItems={"center"}>
              <Image
                src="https://webcdn.workindia.in/assets/img/adslanding2/Affordable.jpg"
                height={"78px"}
                width={"78px"}
              />
              <Flex flexDir={"column"}>
                <Text textColor={"var(--primary)"} fontSize={30}>
                  Trustworthy
                </Text>
                <Text textColor={"grey"} fontSize={15} fontWeight={200}>
                  Trustworthy means consistently reliable and dependable.
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>
          <Flex marginTop={20} w={"full"} justify={"center"}>
            <Button
              onClick={handleChange}
              display={postJob ? "none" : "block"}
              width={"60%"}
              colorScheme="green"
            >
              Post Jobs
            </Button>
          </Flex>
        </VStack>
      </Flex>
      {postJob && <PostJob />}
      <Footer />
    </>
  );
};

export default CompanyPage;
