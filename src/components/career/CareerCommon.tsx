import React from "react";
import { Box, Button, CSSObject, Flex, Heading, Text, Tag, Link } from "@chakra-ui/react";
import { CareerBlock as CareerBlockInterface } from "@components/career/type";
import CareerEdit from "./CareerEdit";

export const CareerBlock = (props: CareerBlockInterface): JSX.Element => {
  const [onEdit, setOnEdit] = React.useState<boolean>(false);
  const handleEditOn = () => setOnEdit(true);
  const handleEditClose = () => setOnEdit(false);
  const careerBox: CSSObject = {
    border: "1px solid #ddd",
    padding: "25px",
    borderRadius: "30px",
    bg: "#fff",
    width: "100%",
  };
  fetch("https://api.github.com/repos/cwd3469/cwd3469/commits").then((res) => console.log(res.json()));

  return (
    <Box sx={careerBox}>
      <Flex flexDirection="column" gap="10px">
        <Flex alignItems="center" gap="10px">
          <Text fontSize="xl" color="#000" flexGrow="1" w="100px">
            {props.title}
          </Text>
          {/* <Button bg="#089BAB" color="#fff" onClick={handleEditOn}>
            {props.btnName ? props.btnName : "+ 추가"}
          </Button> */}
        </Flex>
        {/* <CareerEdit close={handleEditClose} /> */}
        <Box flexGrow="8">
          <Flex flexDirection="column" gap="25px">
            {props.section?.map((section, sectionIndex) => {
              return (
                <Flex
                  alignContent="stretch"
                  key={sectionIndex}
                  borderBottom={sectionIndex + 1 === props.section?.length ? "" : "1px solid #ddd"}
                  paddingBottom="20px"
                  gap="10px"
                >
                  <Box w="200px">
                    <Text color="gray.500" wordBreak="keep-all">
                      {section.date}
                    </Text>
                  </Box>
                  <Flex flexDirection="column" w="100%" gap="7px">
                    <Heading fontSize="xl" color="#333" flexGrow="1">
                      {section.sectionTitle}
                    </Heading>

                    {section.subheadings ? <Text wordBreak="keep-all">{section.subheadings}</Text> : ""}

                    {section.tag ? (
                      <Flex gap="5px" flexWrap="wrap">
                        {section.tag?.map((tag, idx) => {
                          return (
                            <Tag size="sm" key={idx}>
                              {tag}
                            </Tag>
                          );
                        })}
                      </Flex>
                    ) : (
                      ""
                    )}

                    <Text fontSize="15px">{section.setTitle}</Text>
                    {section.sectionContents ? (
                      <Flex>
                        <Box w="20px" />
                        <Flex flexDirection="column" gap="3px">
                          {section.sectionContents.map((text, idx) => {
                            return (
                              <Text key={idx} wordBreak="keep-all">
                                {text}
                              </Text>
                            );
                          })}
                        </Flex>
                      </Flex>
                    ) : (
                      ""
                    )}
                    {section.sectionLink ? (
                      <Link color="teal.500" href={`${section.sectionLink}`} target="_blank">
                        {section.sectionLink}
                      </Link>
                    ) : (
                      ""
                    )}
                    <Flex flexDirection="column" gap="25px">
                      {section.list?.map((item, index) => {
                        return (
                          <Flex flexDirection="column" key={index}>
                            <Heading fontSize="md"> - {item.title}</Heading>
                            <Flex>
                              <Box w="10px" />
                              <Text fontSize="sm" color="gray.400">
                                {item.date}
                              </Text>
                            </Flex>
                            <Flex flexDirection="row">
                              <Box w="25px" />
                              <Flex flexDirection="column">
                                {item.contents.map((txt, idx) => {
                                  return <Text key={idx}>{txt}</Text>;
                                })}
                              </Flex>
                            </Flex>
                          </Flex>
                        );
                      })}
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
