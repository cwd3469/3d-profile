import React from 'react';
import {
  Avatar,
  Box,
  CSSObject,
  Flex,
  Text,
  Heading,
  Checkbox,
  Switch,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import EditIcon from '@mui/icons-material/Edit';
import random from '@utils/random';
import type { Mybodyinfo, TodoData as TodoDataType, TodoAdd as TodoAddInterface } from '@components/home/type';
import { AddIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom } from '@states/todo';
import { SectionTitle } from './HomeGraph';
import { authUserInfo } from '@states/auth';

const shadow: CSSObject = {
  boxShadow: '2px 1px 10px 1px rgba(0,0,0,0.1)',
};

const HomeCenter = () => {
  const [todos, setTodos] = useRecoilState<Array<TodoDataType>>(todoListAtom);
  return (
    <Box p={4} w="100%" h="100%">
      <Flex flexDirection="column" w="100%" h="100%" gap="14px">
        <Box h="20px"></Box>
        <Flex justifyContent="space-between" paddingBottom="15px">
          <SectionTitle text="Todo Daily" />
          <Heading textAlign="center" fontSize="m" color="#A8ADB4">
            26 Aug 2022
          </Heading>
        </Flex>
        <ProfileInfo />
        <Box w="100%">
          <Box bg="#fff" padding="20px" borderRadius="30px">
            <Swiper
              direction={'vertical'}
              slidesPerView={4}
              spaceBetween={0}
              mousewheel={true}
              modules={[Mousewheel]}
              className="todo-swiper">
              {todos.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TodoItem
                      todoId={item.todoId}
                      autherId={item.autherId}
                      todoTitle={item.todoTitle}
                      todoCheck={item.todoCheck}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box h="17px"></Box>
          <Box bg="#FFFFFF" borderRadius="30px" padding="15px 20px" sx={shadow}>
            <Flex flexDirection="column" gap="10px">
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel htmlFor="email-alerts" mb="0">
                  공개 / 비공개
                </FormLabel>
                <Switch id="email-alerts" colorScheme="green" />
              </FormControl>
              <Flex alignItems="stretch" gap="5px">
                <Input placeholder="오늘 할일를 입력해주세요." size="md" bg="#fff" h="auto" />
                <TodoAdd text="add" Icon={<AddIcon />} />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export const ProfileInfo = () => {
  const MybodyInfo = useRecoilValue<Mybodyinfo>(authUserInfo);
  return (
    <Box bg="#FFFFFF" borderRadius="30px" padding="0 10px 30px">
      <Box position="relative" w="100%" h="85px">
        <Flex justifyContent="center">
          <Avatar sx={shadow} size="xl" name="Segun Adebayo" src={MybodyInfo.autherProfileImage} top="-25px" />
        </Flex>
      </Box>
      <Heading textAlign="center" fontSize="md" paddingBottom="2px">
        {MybodyInfo.autherName}
      </Heading>
      <Text textAlign="center" fontSize="sm" color="#C3C4C9">
        {MybodyInfo.autherAge}
      </Text>
      <Flex justifyContent="center" paddingTop="20px">
        {[MybodyInfo.autherBlood, MybodyInfo.autherHeight, MybodyInfo.autherWeight].map((item, index) => {
          return (
            <Flex key={index} flexDirection="column" w="30%">
              <Heading textAlign="center" fontSize="sm" color="#5CBEC7">
                {index === 0 ? 'Blood' : index === 1 ? 'Height' : 'Weight'}
              </Heading>
              <Flex alignItems="end" gap="2px" justifyContent="center" paddingTop="5px">
                {' '}
                <Heading textAlign="center" fontSize="xl" fontWeight="bold">
                  {item}
                </Heading>
                <Heading fontSize="sm">{index === 0 ? '' : index === 1 ? 'cm' : 'kg'}</Heading>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

const TodoItem = (props: TodoDataType) => {
  return (
    <Box padding="10px" border="1px solid #eee" borderRadius="5px">
      <Flex justifyContent="space-between">
        <Heading fontSize="sm">{props.todoTitle}</Heading>
        <Flex gap="6px">
          <EditIcon fontSize="small" sx={{ cursor: 'pointer' }} />
          <Checkbox checked={props.todoCheck} colorScheme="green" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const TodoAdd = (props: TodoAddInterface) => {
  return (
    <Button
      padding={props.padding ? props.padding : '10px 20px'}
      h="auto"
      bg="#CEEBEE"
      color="#5CBEC7"
      onClick={props.onClick}>
      <Flex flexDirection="column" alignItems="center" gap="5px" justifyContent="center">
        <>{props.Icon}</>
        <Text fontSize={props.fontSize ? props.fontSize : '10px'}>{props.text}</Text>
      </Flex>
    </Button>
  );
};

export default HomeCenter;
