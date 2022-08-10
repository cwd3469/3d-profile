import { Box, Flex, Avatar, Heading, Text, CSSObject } from '@chakra-ui/react';
import KBox, { BoxCase } from '@components/common/KBox';
import { SectionTitle } from '@components/home/HomeGraph';
import { GrayDate } from '@components/common/KText';
import { GraphBtn } from '@components/common/KButton';
import { StarIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { GoalData } from '@components/home/type';
import { useRecoilValue } from 'recoil';
import { todoGoalTodoListAtom } from '@states/todo';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@utils/firebase';
import { useState } from 'react';
const TodoCenter = () => {
  const goal = useRecoilValue(todoGoalTodoListAtom);
  const board = collection(db, 'goal');
  const [goalData, setGoalData] = useState();

  return (
    <Box p={4} h="100%" w="100%">
      <Flex flexDirection="column">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <SectionTitle text="Todo List" />
          <GrayDate date="26 Aug 2022" />
        </Flex>
        <Swiper
          direction={'vertical'}
          slidesPerView={3.4}
          spaceBetween={0}
          mousewheel={true}
          modules={[Mousewheel]}
          className="goals-swiper">
          {goal.map((item, index) => {
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

export const ProfileItem = (props: GoalData) => {
  const profileHead: CSSObject = {
    padding: '5px',
    bg: '#fff',
    border: '1px solid #000',
  };
  const DotHidden: CSSObject = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  };
  return (
    <Box cursor="pointer" onClick={() => console.log(props.goalId)}>
      <KBox type={BoxCase.small}>
        <Flex flexDirection="column">
          <Flex gap="3px">
            <Avatar sx={profileHead} name="Dan Abrahmov" src={props.goalIcon} />
            <Flex flexDirection="column" padding="5px 0px" justifyContent="center">
              <Heading fontSize="sm">{props.goalTitle}</Heading>
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
              : ''}
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
