import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import vector from "../assets/vector.png";
import interview from "../assets/interview.png";
import learning from "../assets/learning.webp";
import resources from "../assets/resources.png";
import confidence from "../assets/confidence.png";
import t1 from "../assets/google.png";
import t2 from "../assets/microsoft.png";
import t3 from "../assets/atlassian.png";
import t4 from "../assets/tesla.png";
import t5 from "../assets/amazon.png";
import t6 from "../assets/cred.png";
import t7 from "../assets/zomato.png";
import t8 from "../assets/oracle.png";


// import "../styles/testimonials.scss";

const testimonials = [
  {
    id: 1,
    image: t1,
  },
  {
    id: 2,
    image: t2,
  },
  {
    id: 3,
    image: t3,
  },
  {
    id: 4,
    image: t4,
  },
  {
    id: 5,
    image: t5,
  },
  {
    id: 6,
    image: t6,
  },
  {
    id: 7,
    image: t7,
  },
  {
    id: 8,
    image: t8,
  },
];

const cardData = [
  {
    id: 1,
    image: interview,
    title: "Realistic Mock Interviews",
    desc: "Experience interviews that closely mimic real job settings, helping you practice and perfect your responses.",
  },
  {
    id: 2,
    image: learning,
    title: "Comprehensive Resources",
    desc: "Access a wide range of tools, guides, and tips to enhance your job search and interview skills.",
  },
  {
    id: 3,
    image: resources,
    title: "Personalized Practice",
    desc: "Tailor your preparation with scenarios and questions specific to your target roles and industries.",
  },
  {
    id: 4,
    image: confidence,
    title: "Confidence Building",
    desc: "Strengthen your readiness and self-assurance with consistent practice and constructive support.",
  },
];

export default function Testimonials() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
      <Box
        w={"full"}
        className="containertwo"
        px={[5, 20]}
        py={20}
        textAlign={"center"}
        fontSize={["2xl", "3xl"]}
      >
        <Text
          color={"white"}
          fontFamily={"'Libre Baskerville', serif"}
          lineHeight={"160%"}
        >
          "Prepare for your dream job with our platform—featuring personalized
          mock interviews, in-depth practice scenarios, and a wealth of
          resources designed to boost your confidence and sharpen your skills
          for success."
        </Text>
        <Image src={vector} alt="vector" mx={"auto"} mt={4} />
      </Box>
      <Container
        maxW={"container.xl"}
        textAlign={"center"}
        p={[10, 20]}
        alignItems={"center"}
      >
        <Heading
          fontFamily={"'Libre Baskerville', serif"}
          fontSize={["4xl", "5xl"]}
          color={"#658C4A"}
        >
          Why Choose Us?
        </Heading>
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
          mt={[10, 20]}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              desc={card.desc}
              loaded={loaded}
            />
          ))}
        </Grid>
      </Container>
      <Stack
        direction={["column", "row"]}
        className="testimonials"
        alignItems={"center"}
        px={10}
        py={[10, 0]}
        justifyContent={"center"}
      >
        <Heading
          fontFamily={"'Libre Baskerville', serif"}
          fontSize={["4xl", "5xl"]}
          color={"brand.1"}
          borderRight={[0, "2px solid #333"]}
          pr={5}
          textAlign={['center', 'left']}
        >
          Our Alumnis work at
        </Heading>
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
          p={[10, 20]}
          mx={"auto"}
        >
          {testimonials.map((item) => (
            <Image key={item.id} src={item.image} alt="testimonials" />
          ))}
        </Grid>
      </Stack>
      <Box className="newsletter" p={[2, 20]} pt={['12rem', 20]}>
        <VStack
          p={10}
          px={[7, 10]}
          alignItems={"flex-start"}
          bg={"white"}
          w={"fit-content"}
          borderRadius={"2rem"}
        >
          <Text
            fontFamily={"'Inter', sans-serif"}
            color={"#333"}
            fontWeight={600}
          >
            Subscribe to our Newsletter
          </Text>
          <Text fontFamily={"'Inter', sans-serif"} color={"#666"}>
            Be the first to know about exclusive jobs, better opportunities, and new
            arrivals!
          </Text>
          <InputGroup size="sm" pos={"relative"} borderRadius={"2rem"}>
            <Input
              type="email"
              placeholder="Your email"
              borderRadius={"2rem"}
              p={5}
              className="newsletterInput"
              _focusVisible={{ outline: "none" }}
            />
            <InputRightAddon
              border={"1px solid #658C4A"}
              borderRadius={"2rem"}
              pos={"absolute"}
              right={0}
              bg={"linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"}
              color={"white"}
              p={5}
              cursor={"pointer"}
            >
              Subscribe
            </InputRightAddon>
          </InputGroup>
        </VStack>
      </Box>
    </>
  );
}

const Card = ({ image, title, desc, loaded }) => {
  return (
    <GridItem rowSpan={1} colSpan={1}>
      <VStack
        alignItems={"flex-start"}
        textAlign={"left"}
        justifyContent={"center"}
      >
        <SkeletonCircle
          isLoaded={loaded}
          borderRadius={"1rem"}
          className="logo"
        >
          <Image src={image} alt={title} />
        </SkeletonCircle>
        <SkeletonText
          isLoaded={loaded}
          mt="4"
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
        >
          <Text
            as={"a"}
            fontFamily={"'Inter', sans-serif"}
            fontSize={["lg", "xl"]}
            color={"#333"}
            fontWeight={600}
          >
            {title}
          </Text>
          <Text
            fontFamily={"'Inter', sans-serif"}
            fontSize={["md", "lg"]}
            color={"#658C4A"}
            fontWeight={600}
          >
            {desc}
          </Text>
        </SkeletonText>
      </VStack>
    </GridItem>
  );
};
