import { Avatar, Box, CSSObject, Grid, GridItem, Flex, Text, Heading, Checkbox, IconButton, Input } from "@chakra-ui/react";
import EditIcon from "@mui/icons-material/Edit";
import random from "@utils/random";
import { Mybodyinfo, todoData } from "@components/home/type";
const HomeCenter = () => {
  const fontCenter: CSSObject = {
    textAlign: "center",
  };

  const shadow: CSSObject = {
    boxShadow: "2px 1px 10px 1px rgba(0,0,0,0.1)",
  };
  const MybodyInfo: Mybodyinfo = {
    autherProfileImage: "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_1280.jpg",
    autherName: "JooYoung choi",
    autherAge: "29 year South Korea",
    autherBlood: "A",
    autherHeight: "170",
    autherWeight: "85",
    autherId: random(30),
  };

  const todoData: Array<todoData> = [
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "출근하기",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "영어단어 10개 외우기",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "낮잠자기",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "퇴근하기",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "서브프로젝트 home 완료 ",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "저녁 먹기",
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "장군이 산책",
      todoCheck: true,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: "12시 전에 취침",
      todoCheck: true,
    },
  ];

  return (
    <Box p={4} w="100%" h="100%">
      <Flex flexDirection="column" w="100%" h="100%">
        <Box h="30px"></Box>
        <Box bg="#FFFFFF" borderRadius="30px" padding="0 10px 30px" sx={shadow}>
          <Box position="relative" w="100%" h="85px">
            <Flex justifyContent="center">
              <Avatar sx={shadow} size="xl" name="Segun Adebayo" src={MybodyInfo.autherProfileImage} top="-25px" />
            </Flex>
          </Box>
          <Heading sx={fontCenter} fontSize="md" paddingBottom="2px">
            {MybodyInfo.autherName}
          </Heading>
          <Text sx={fontCenter} fontSize="sm" color="#C3C4C9">
            {MybodyInfo.autherAge}
          </Text>
          <Flex justifyContent="center" paddingTop="20px">
            {[MybodyInfo.autherBlood, MybodyInfo.autherHeight, MybodyInfo.autherWeight].map((item, index) => {
              return (
                <Flex key={index} flexDirection="column" w="30%">
                  <Heading textAlign="center" fontSize="sm" color="#5CBEC7">
                    {index === 0 ? "Blood" : index === 1 ? "Height" : "Weight"}
                  </Heading>
                  <Flex alignItems="end" gap="2px" justifyContent="center" paddingTop="5px">
                    {" "}
                    <Heading textAlign="center" fontSize="xl" fontWeight="bold">
                      {item}
                    </Heading>
                    <Heading fontSize="sm">{index === 0 ? "" : index === 1 ? "cm" : "kg"}</Heading>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box h="30px"></Box>
        <Box w="100%">
          <Flex justifyContent="space-between" marginBottom="20px">
            <Heading textAlign="center" fontSize="m" color="#5CBEC7">
              Todo day
            </Heading>
            <Heading textAlign="center" fontSize="m" color="#A8ADB4">
              26 Aug 2022
            </Heading>
          </Flex>
          <Box bg="#FFFFFF" borderRadius="30px" padding="20px 10px" sx={shadow} h="370px" overflow="scroll" marginBottom="10px">
            <Flex w="100%" gap="7px" flexDirection="column">
              {todoData.map((item, index) => {
                return <TodoItem key={index} todoId={item.todoId} autherId={item.autherId} todoTitle={item.todoTitle} todoCheck={item.todoCheck} />;
              })}
            </Flex>
          </Box>
          <Input placeholder="오늘 할일를 입력해주세요." size="md" bg="#fff" />
        </Box>
      </Flex>
    </Box>
  );
};

const TodoItem = (props: todoData) => {
  return (
    <Box padding="10px" border="1px solid #eee" borderRadius="5px">
      <Flex justifyContent="space-between">
        <Heading fontSize="sm">{props.todoTitle}</Heading>
        <Flex gap="6px">
          <EditIcon fontSize="small" sx={{ cursor: "pointer" }} />
          <Checkbox checked={props.todoCheck} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeCenter;
