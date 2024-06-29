import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import vector from "../assets/vector.png";
import { FaShippingFast, FaSmile, FaLeaf } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

// import "../styles/testimonials.scss";

const cardData = [
  {
    id: 1,
    image: <FaShippingFast size={"3rem"} color="gray" />,
    title: "Realistic Mock Interviews",
    desc: "Experience interviews that closely mimic real job settings, helping you practice and perfect your responses.",
  },
  {
    id: 2,
    image: <FaSmile size={"3rem"} color="gray" />,
    title: "Comprehensive Resources",
    desc: "Access a wide range of tools, guides, and tips to enhance your job search and interview skills.",
  },
  {
    id: 3,
    image: <FaLeaf size={"3rem"} color="gray" />,
    title: "Personalized Practice",
    desc: "Tailor your preparation with scenarios and questions specific to your target roles and industries.",
  },
  {
    id: 4,
    image: <RiCustomerService2Fill size={"3rem"} color="gray" />,
    title: "Confidence Building",
    desc: "Strengthen your readiness and self-assurance with consistent practice and constructive support.",
  },
];

export default function Testimonials() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoaded(true);
    }, 3000);
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
        <SkeletonCircle isLoaded={loaded} borderRadius={"1rem"}>
          {image}
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
