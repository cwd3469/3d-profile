import React from "react";
import { Box, Button, CSSObject, Flex, Heading, Text, Tag } from "@chakra-ui/react";
import { CareerBlock as CareerBlockInterface } from "@components/career/type";

export const CareerBlock = (props: CareerBlockInterface): JSX.Element => {
  const [onEdit, setOnEdit] = React.useState<boolean>(false);
  const handleEditOn = () => setOnEdit(true);
  const handleEditClose = () => setOnEdit(false);
  const careerBox: CSSObject = {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "20px",
    bg: "#fff",
    width: "100%",
  };
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
        {/* {onEdit ? (
          <Box border="1px solid #ddd" borderRadius="15px" h="100px">
            <Button bg="#089BAB" color="#fff" onClick={handleEditClose}>
              취소
            </Button>
          </Box>
        ) : (
          ""
        )} */}
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
                    <Text color="gray.500">{section.date}</Text>
                  </Box>
                  <Flex flexDirection="column" w="100%" gap="7px">
                    <Heading fontSize="xl" color="#333" flexGrow="1">
                      {section.sectionTitle}
                    </Heading>
                    {section.subheadings ? <Text>{section.subheadings}</Text> : ""}
                    <Flex gap="5px">
                      {section.tag?.map((tag, idx) => {
                        return <Tag key={idx}>{tag}</Tag>;
                      })}
                    </Flex>
                    <Text p="5px 0px">{section.setTitle}</Text>
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
