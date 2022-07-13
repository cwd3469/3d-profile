import { Box, Text, GridItem, Heading, Flex, CSSObject } from "@chakra-ui/react";
import random from "@utils/random";
import { TodoData } from "@components/home/type";

const HomeGraph = () => {
  const data: Array<TodoData> = [
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "시니어 개발자",
      todoCheck: false,
      todoDate: "21 Mar , 2022",
      endDate: "21 Mar , 2032",
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "토익 900",
      todoCheck: false,
      todoDate: "21 Mar , 2022",
      endDate: "21 Mar , 2025",
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "2032년 2월 20일 적금 해지",
      todoCheck: false,
      todoDate: "21 Mar , 2022",
      endDate: "21 Feb , 2032",
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "2032년 2월 20일 적금 해지 2032년 2월 20일 적금 해지 2032년 2월 20일 적금 해지",
      todoCheck: false,
      todoDate: "21 Mar , 2022",
      endDate: "21 Feb , 2032",
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "2032년 2월 20일 적금 해지",
      todoCheck: false,
      todoDate: "21 Mar , 2022",
      endDate: "21 Feb , 2032",
    },
  ];
  return (
    <Box bg="#fff" h="100%" w="100%" borderRadius="60px 0 0 60px" padding="30px">
      <Flex flexDirection="column" w="100%" h="100%">
        <Box>
          <Flex flexDirection="column" gap="10px" paddingTop="10px">
            <Heading color="#5CBEC7" fontSize="2xl" letterSpacing="3px">
              마라톤
            </Heading>
            <Flex flex="1" overflowX="scroll" overflowY="hidden">
              <Flex flexWrap="nowrap">
                {data.map((x, index) => {
                  return (
                    <MarathonItem
                      key={index}
                      todoId={x.todoId}
                      autherId={x.autherId}
                      todoTitle={x.todoTitle}
                      todoCheck={x.todoCheck}
                      todoDate={x.todoDate}
                      endDate={x.endDate}
                    />
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box bg="saddlebrown" h="120px"></Box>
        <Box bg="yellow.100" h="300px"></Box>
      </Flex>
    </Box>
  );
};

const MarathonItem = (props: TodoData) => {
  const DoxTitle: CSSObject = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <Box padding="10px" bg="#fff">
      <Flex alignItems="stretch" gap="10px" w="200px">
        <Box w="5px" backgroundColor="salmon" borderRadius="30px" />
        <Flex w="185px" flexDirection="column">
          <Heading color="#C1C3C9" fontSize="10px" paddingBottom="10px" letterSpacing="-1px">
            {props.endDate}
          </Heading>
          <Heading color="#000" fontSize="sm" sx={DoxTitle}>
            {props.todoTitle}
          </Heading>
          <Heading color="#C1C3C9" fontSize="13px">
            {props.todoDate}
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeGraph;
