import { Box, Center, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Heroimg from "../assets/heroImg.jpg";

function Hero() {
  return (
    <Box position={"relative"}>
      <Image src={Heroimg} alt="HeroImage" />
      <Center h="100px" color="black" position={"absolute"} className="hero1">
        <VStack>
          <Text fontSize="4xl" color={"#FA7070"}>
            India's best tech learning company
          </Text>
          <Text fontSize="xl" color={"#FA7070"}>
            Learn industry-releated skills with top tech veterans
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}

export default Hero;