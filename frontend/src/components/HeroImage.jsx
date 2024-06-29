import { Box, Center, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Heroimg from "../assets/heroImage.jpg";

function HeroImage() {
  return (
    <Box position={"relative"}>
      <Image src={Heroimg} alt="HeroImage" />
      {/* <Box padding="4" bg="blue.400" color="black" maxW="md" pos={"absolute"} top={0} left={'20px'}>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production.
      </Box> */}
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

export default HeroImage;
