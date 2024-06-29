import React from "react";
import badge from "../assets/badge.png";

import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      className="footerContainer"
      pos={"relative"}
      py={10}
      borderTop={"1px solid #658C4A"}
    >
      <Link to={"/"}>
        <Image
          src={badge}
          alt="badge"
          pos={"absolute"}
          left={"0"}
          right={"0"}
          // top={"2rem"}
          textAlign={"center"}
          m={"auto"}
        />
      </Link>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        pt={"10rem"}
        fontFamily={"'Inter', sans-serif"}
        px={["1rem", "5rem"]}
        borderBottom={"1px solid #666"}
        pb={5}
      >
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Inter Prep
            </Text>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
            <Text>FAQs</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Explore Inter Prep
            </Text>
            <Link to="/#new">
              <Text cursor={"pointer"}>Mock Interview</Text>
            </Link>
            <Link to={"/products/category/electronics"}>
              <Text cursor={"pointer"}>Resources</Text>
            </Link>
            <Link to={"/products/category/jewelery"}>
              <Text cursor={"pointer"}>Jobs</Text>
            </Link>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Support
            </Text>
            <Text>Shipping</Text>
            <Text>Returns</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Use</Text>
            <Text>Affiliates</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Payment
            </Text>
            <Grid
              templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]}
              gap={2}
            >
              <Image src={p1} alt="payment method 1" w={"4rem"} />
              <Image src={p2} alt="payment method 2" w={"4rem"} />
              <Image src={p3} alt="payment method 3" w={"4rem"} />
              <Image src={p4} alt="payment method 4" w={"4rem"} />
              <Image src={p5} alt="payment method 5" w={"4rem"} />
              <Image src={p6} alt="payment method 6" w={"4rem"} />
              <Image src={p7} alt="payment method 7" w={"4rem"} />
              <Image src={p8} alt="payment method 8" w={"4rem"} />
              <Image src={p9} alt="payment method 9" w={"4rem"} />
              <Image src={p10} alt="payment method 10" w={"4rem"} />
              <Image src={p11} alt="payment method 11" w={"4rem"} />
              <Image src={p12} alt="payment method 12" w={"4rem"} />
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
      <Stack
        direction={["column", "row"]}
        p={6}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        gap={5}
      >
        <VStack order={[2, 1]} textAlign={"center"}>
          <Text>© 2024 All Rights Reserved.</Text>
          <Text>Made with 💓 by Team 8Bit.</Text>
        </VStack>
        <HStack order={[1, 2]} gap={5}>
          <a
            href="https://www.facebook.com/profile.php?id=100073317752458"
            target="blank"
          >
            <FaFacebook size={"2rem"} color="black" />
          </a>
          <a
            href="https://www.instagram.com/sayandeep.adhikary/"
            target="blank"
          >
            <FaInstagram size={"2rem"} color="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/sayandeep-adhikary/"
            target="blank"
          >
            <FaLinkedin size={"2rem"} color="black" />
          </a>
          <a href="https://github.com/sayandeep-adhikary" target="blank">
            <FaGithub size={"2rem"} color="black" />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
}
