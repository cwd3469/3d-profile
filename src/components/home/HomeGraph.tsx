import React, { MouseEventHandler } from "react";
import { Box, Text, GridItem, Heading, Flex, CSSObject, background, Image } from "@chakra-ui/react";
import random from "@utils/random";
import { TodoData } from "@components/home/type";
import { TodoAdd } from "./HomeCenter";
import { AddIcon, StarIcon } from "@chakra-ui/icons";
import { ChartList } from "@components/common/Chart";

interface StartItem {
  url: string;
  title: string;
  image: string;
}

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
  const myPage: Array<StartItem> = [
    {
      url: "https://github.com/cwd3469",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      title: "Git hub",
    },
    {
      url: "https://www.tistory.com/",
      image:
        "https://w.namu.la/s/aec084b1eda1878b6aba5c6edba4950075de77d601abdef0894f59c164089a096c2dd305fc578a64f8519dd129f3aea87dc54660d52820a1b33c259f1295501c029b476298a743c46270368b49a10e654d7ed144a377841668564ebb3724b3b0",
      title: "Tistory",
    },
    {
      url: "https://www.notion.so/c793454c6cae45f893c9f7e0d89dc84a",
      image: "https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png",
      title: "Notion",
    },
    {
      url: "https://github.com/cwd3469",
      image: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      title: "Twitter",
    },
  ];
  const [chartFilter, setChartFilter] = React.useState(String);
  const arr = ["D", "W", "M", "Y"];
  const selectClick = (txt: string) => {
    setChartFilter(txt);
  };
  return (
    <Box bg="#fff" h="100%" w="100%" borderRadius="60px 0 0 60px" padding="30px">
      <Flex flexDirection="column" w="100%" h="100%" gap="10px">
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
              <FinalTitle text="Todo Chart" />
              <Flex alignItems="center" gap="10px">
                {arr.map((item, index) => {
                  return <TodoAdd key={index} text={item} padding="9px 5px" fontSize="20px" onClick={() => selectClick(item)} />;
                })}
              </Flex>
            </Flex>
            <ChartList type={chartFilter} />
          </Flex>
        </Box>
        <Box>
          <Flex flexDirection="column" gap="10px" paddingTop="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <FinalTitle text="Go Run!" />
              <Flex alignItems="center" gap="10px">
                <TodoAdd Icon={<StarIcon lineHeight="1" />} padding="5px" />
                <Heading fontSize="sm" color="#5CBEC7">
                  See All
                </Heading>
              </Flex>
            </Flex>
            <Flex alignItems="center" gap="10px">
              {myPage.map((item, index) => {
                return <StartItem key="index" image={item.image} url={item.url} title={item.title} />;
              })}
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

const hoverAction: CSSObject = {
  transition: "ease-out 0.2s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 3px 3px 10px",
  },
};

const StartItem = (props: StartItem) => {
  const ItmeStyle: CSSObject = {
    cursor: "pointer",
    borderRadius: "30px",
    height: "140px",
    backgroundColor: "#fff",
    w: "100px",
  };
  return (
    <Box sx={{ ...hoverAction, ...ItmeStyle }}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%" gap="10px">
        <Box w="60px" h="60px" bg="#fff" borderRadius="100%" alignItems="center" justifyContent="center">
          <Image w="100%" src={props.image} alt="Git hub" />
        </Box>
        <Heading color="#000" fontSize="md">
          {props.title}
        </Heading>
      </Flex>
    </Box>
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

  const ItemStyle: CSSObject = {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "10px",
  };

  return (
    <Box sx={{ ...hoverAction, ...ItemStyle }} onClick={BoxClick}>
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
