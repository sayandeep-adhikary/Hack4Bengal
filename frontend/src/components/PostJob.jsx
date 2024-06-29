import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  GridItem,
  SimpleGrid,
  Select,
  Input,
  Textarea,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Sele from "react-select";

export const PostJob = () => {
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

  return (
    <>
      <Box px={"12rem"}>
        <SimpleGrid columns={2} columnGap={100} rowGap={10}>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Job Title
              </FormLabel>
              <Input
                placeholder="Type"
                // bg={"var(--grey)"}
                variant={"Unstyled"}
                height={"3rem"}
                fontSize={"1.2rem"}
                outlineColor={"var(--grey)"}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Job Location
              </FormLabel>
              <Select
                // bg={"var(--grey)"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"3rem"}
                fontSize={"1.2rem"}
                outlineColor={"var(--grey)"}
              >
                <option value="option1">India</option>
                <option value="option2">USA</option>
                <option value="option3">Germany</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                No. Of Openings
              </FormLabel>
              <Input
                placeholder="Type"
                // bg={"var(--grey)"}
                variant={"Unstyled"}
                height={"3rem"}
                fontSize={"1.2rem"}
                outlineColor={"var(--grey)"}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Experience Of Candidate
              </FormLabel>
              <Select
                // bg={"var(--grey)"}
                placeholder="Select"
                variant={"Unstyled"}
                height={"3rem"}
                fontSize={"1.2rem"}
                outlineColor={"var(--grey)"}
              >
                <option value="option1">0</option>
                <option value="option2">1</option>
                <option value="option3">2</option>
                <option value="option3">3+</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Salary
              </FormLabel>
              <Input
                placeholder="Type"
                // bg={"var(--grey)"}
                variant={"Unstyled"}
                height={"3rem"}
                fontSize={"1.2rem"}
                outlineColor={"var(--grey)"}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Job Description
              </FormLabel>
              <Textarea
                outlineColor={"var(--grey)"}
                h={"12rem"}
                placeholder="Type Description"
                // bg={"var(--grey)"}
                variant={"Unstyled"}
                fontSize={"1.2rem"}
                resize={"none"}
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"} fontWeight={"normal"}>
                Skills Required
              </FormLabel>
              <Sele
                className="select-field"
                isMulti
                name="skill options"
                options={skillOptions}
                required
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <HStack my={"3rem"} justify={"center"}>
          <Button width={"60%"} colorScheme="green">
            Post Job
          </Button>
        </HStack>
      </Box>
    </>
  );
};
