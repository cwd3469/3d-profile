import { Box, Text, GridItem, Heading, Flex, CSSObject, background } from "@chakra-ui/react";
import random from "@utils/random";
import { TodoData } from "@components/home/type";
import { TodoAdd } from "./HomeCenter";
import { AddIcon, StarIcon } from "@chakra-ui/icons";
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
            <Flex justifyContent="space-between" alignItems="center">
              <FinalTitle text=" Final goal" />
              <Flex alignItems="center" gap="10px">
                <TodoAdd Icon={<StarIcon lineHeight="1" />} padding="5px" />
                <Heading fontSize="sm" color="#5CBEC7">
                  See All
                </Heading>
              </Flex>
            </Flex>

            <Flex flex="1" overflowX="scroll" overflowY="hidden">
              <Flex flexWrap="nowrap" gap="5px" padding="10px">
                {data.map((x, index) => {
                  return (
                    <FinalItem
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

        <Box>
          <Flex flexDirection="column" gap="10px" paddingTop="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <FinalTitle text="Goal curve" />
              <Flex alignItems="center" gap="10px">
                <TodoAdd text="D" padding="9px 5px" fontSize="20px" />
                <TodoAdd text="W" padding="9px 5px" fontSize="20px" />
                <TodoAdd text="M" padding="9px 5px" fontSize="20px" />
                <TodoAdd text="Y" padding="9px 5px" fontSize="20px" />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const FinalTitle = (props: { text: string }) => {
  return (
    <Heading color="#5CBEC7" fontSize="2xl" paddingLeft="20px">
      {props.text}
    </Heading>
  );
};

const FinalItem = (props: TodoData) => {
  const BoxClick = (): void => {
    console.log(props.todoId);
  };
  const DoxTitle: CSSObject = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const hoverAction: CSSObject = {
    transition: "ease-out 0.5s",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.35) 3px 3px 10px",
    },
  };
  return (
    <Box sx={hoverAction} onClick={BoxClick}>
      <Flex alignItems="stretch" w="200px">
        <Box w="7px" backgroundColor="salmon" borderRadius="30px" />
        <Flex w="185px" flexDirection="column" padding="10px">
          <Heading color="#C1C3C9" fontSize="10px" paddingBottom="10px" letterSpacing="-1px">
            {props.endDate}
          </Heading>
          <Heading color="#000" fontSize="md" sx={DoxTitle} paddingBottom="5px">
            {props.todoTitle}
          </Heading>
          <Heading color="#C1C3C9" fontSize="13px">
            D - 100
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeGraph;
