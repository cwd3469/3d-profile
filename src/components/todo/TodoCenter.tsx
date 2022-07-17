import { Box, Flex, Avatar, Heading, Text, CSSObject } from "@chakra-ui/react";
import KBox, { BoxCase } from "@components/common/KBox";
import { SectionTitle } from "@components/home/HomeGraph";
import { GrayDate } from "@components/common/KText";
import { GraphBtn } from "@components/common/KButton";
import { StarIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { GoalsType } from "@components/todo/type";
const TodoCenter = () => {
  const data: Array<GoalsType> = [
    {
      goalsId: "222",
      goalsIcon: "https://cdn-icons-png.flaticon.com/512/6561/6561877.png",
      goalsTitle: "시니어 개발자!!!",
      startDate: "2022.02.10",
      endDate: "2032.02.10",
      todoList: ["매일매일 1커밋", "매일매일 회고 작성", "모던 자바스크립트 Deep Dive 정독 중입니다."],
    },
  ];
  return (
    <Box p="30px" h="100%" w="100%">
      <Flex flexDirection="column">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <SectionTitle text="My Todo List" />
          <GrayDate date="26 Aug 2022" />
        </Flex>
        <Swiper direction={"vertical"} slidesPerView={3} spaceBetween={0} mousewheel={true} modules={[Mousewheel]} className="goals-swiper">
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProfileItem {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </Box>
  );
};

export const ProfileItem = (props: GoalsType) => {
  const profileHead: CSSObject = {
    padding: "5px",
    bg: "#fff",
    border: "1px solid #000",
  };
  const DotHidden: CSSObject = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
  };
  return (
    <Box cursor="pointer" onClick={() => console.log(props.goalsId)}>
      <KBox type={BoxCase.small}>
        <Flex flexDirection="column">
          <Flex gap="3px">
            <Avatar sx={profileHead} name="Dan Abrahmov" src={props.goalsIcon} />
            <Flex flexDirection="column" padding="5px 0px" justifyContent="center">
              <Heading fontSize="sm">{props.goalsTitle}</Heading>
              <Text color="#999" fontSize="sm">
                {props.startDate} - {props.endDate}
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" padding="10px">
            {props.todoList
              ? props.todoList.map((txt, idx) => {
                  return (
                    <Text key={idx} fontSize="sm" sx={DotHidden}>
                      {txt}
                    </Text>
                  );
                })
              : ""}
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" paddingLeft="10px">
            <Heading fontSize="xl" color="#5CBEC7">
              D-100
            </Heading>
            <Flex gap="5px" alignItems="center">
              <Heading fontSize="12px" color="#5CBEC7">
                See All
              </Heading>
              <GraphBtn Icon={<StarIcon />} />
            </Flex>
          </Flex>
        </Flex>
      </KBox>
    </Box>
  );
};
export default TodoCenter;
