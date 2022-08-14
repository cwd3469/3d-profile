import React, { useState, useEffect, useCallback } from 'react';
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
import {
  collection,
  DocumentData,
  getDocs,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import EditIcon from '@mui/icons-material/Edit';
import type { Mybodyinfo, TodoData as TodoDataType, TodoAdd as TodoAddInterface } from '@components/home/type';
import { AddIcon } from '@chakra-ui/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListAtom } from '@states/todo';
import { SectionTitle } from './HomeGraph';
import { authUserInfo } from '@states/auth';
import { GrayDate } from '@components/common/KText';
import { db } from '@utils/firebase';
import moment from 'moment';
import isEmptyArr from '@utils/isEmptyArr';
import { WeeksBox } from '@components/todo/TodoEdit';
import weekChange from '@utils/weekChange';
import { ArrWeeks } from '@components/todo/type';
import { TodoObjCompare } from '@utils/objCompare';

const shadow: CSSObject = {
  boxShadow: '2px 1px 10px 1px rgba(0,0,0,0.1)',
};
const board = collection(db, 'todo');

const HomeCenter = () => {
  const [todos, setTodos] = useRecoilState<Array<TodoDataType>>(todoListAtom);
  const userInfo = useRecoilValue<Mybodyinfo>(authUserInfo);
  const [addTodo, setAddTodo] = useState<string>('');
  const [openView, setOpenView] = useState<boolean>(false);
  const [openisEmptyArr, setOpenisEmptyArr] = useState<boolean>(false);
  const addTodoList = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddTodo(value);
  }, []);

  const openSwich = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenView(e.target.checked);
  }, []);

  const addTodoInput = useCallback(async () => {
    const date = new Date();
    const week = moment().format('dddd').toUpperCase().substring(0, 2);
    const answer = {
      autherId: userInfo.autherId,
      goalId: '-',
      todoTitle: addTodo,
      todoCheck: false,
      onOff: openView,
      totalAmount: 1,
      allotment: 1,
      counter: 0,
      endDate: moment().format('YYYY.MM.DD.'),
      startDate: moment().format('YYYY.MM.DD.'),
      timestamp: date,
      weeks: weekChange(week),
    };
    const docRef = await addDoc(board, answer);
    setTodos((arrs) => {
      const reArr = arrs;
      const addArr = [...reArr, { ...answer, todoId: docRef.id }];
      console.log([{ ...answer, todoId: docRef.id }, ...reArr]);
      return addArr;
    });
    setAddTodo('');
  }, [addTodo, openView, setTodos, userInfo.autherId]);

  const getTodoList = useCallback(async () => {
    const result = await getDocs(query(board, orderBy('timestamp', 'desc')));
    const todoList = result.docs.map((el) => {
      const res = el.data();
      return {
        todoId: el.id,
        autherId: res.autherId,
        goalId: res.goalId,
        todoTitle: res.todoTitle,
        todoCheck: res.todoCheck,
        onOff: res.onOff,
        totalAmount: res.totalAmount,
        allotment: res.allotment,
        counter: res.counter,
        endDate: res.endDate,
        startDate: res.startDate,
        timestamp: res.timestamp,
        weeks: res.weeks,
      };
    });
    const reArr = [];
    for (let i = 0; i < todoList.length; i++) {
      const element = todoList[i];
      if (element.todoCheck) {
        reArr.push(element);
      } else {
        reArr.unshift(element);
      }
    }

    setTodos(reArr);
  }, [setTodos]);

  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <Box p={4} w="100%" h="100%">
      <Flex flexDirection="column" w="100%" h="100%" gap="14px">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <SectionTitle text="Home" />
          <GrayDate date="26 Aug 2022" />
        </Flex>
        <ProfileInfo />
        <Box w="100%">
          <Box bg="#fff" padding="20px" borderRadius="10px" transition="ease-out 2s">
            {/* {!isEmptyArr(todos) ? ( */}
            <Box h="240px" overflowY="scroll">
              <Flex flexDirection="column" gap="15px">
                {todos.map((item, index) => {
                  console.log(item);
                  return <TodoItem {...item} key={index} />;
                })}
              </Flex>
            </Box>
          </Box>
          <Box h="17px"></Box>
          <Box bg="#FFFFFF" borderRadius="10px" padding="15px 20px" sx={shadow}>
            <Flex flexDirection="column" gap="10px">
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel htmlFor="email-alerts" mb="0">
                  공개 / 비공개
                </FormLabel>
                <Switch colorScheme="green" onChange={openSwich} />
              </FormControl>
              <Flex alignItems="stretch" gap="5px">
                <Input
                  value={addTodo}
                  placeholder="오늘 할일를 입력해주세요."
                  size="md"
                  bg="#fff"
                  h="auto"
                  maxLength={18}
                  onChange={addTodoList}
                />
                <TodoAdd text="add" Icon={<AddIcon />} onClick={addTodoInput} />
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
    <Box bg="#FFFFFF" borderRadius="10px" padding="0 10px 30px">
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
  // todos state
  const [todoArr, setTodoArr] = useRecoilState<Array<TodoDataType>>(todoListAtom);
  //  todo title
  const [inputValue, setInputValue] = useState<string>(props.todoTitle);
  // todo weeks
  const [arrWeeks, setArrWeeks] = useState<Array<ArrWeeks> | undefined>(props.weeks);
  // todo edit onoff swich
  const [editOpen, setEditOpen] = useState<boolean>(false);
  // active color
  const checkColor = props.todoCheck ? '#999' : '#000';
  //todo 완료 확인
  const todoCheck = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const count = e.target.checked ? props.counter + 1 : props.counter - 1;
      const closeTodo = { ...props, todoCheck: e.target.checked, counter: count };
      const newArr = todoArr.map((todo, index) => {
        return todo.todoId === closeTodo.todoId
          ? {
              ...todo,
              todoCheck: closeTodo.todoCheck,
              counter: closeTodo.counter,
            }
          : todo;
      });
      setTodoArr(newArr);
      setEditOpen(false);
      const docRef = doc(board, closeTodo.todoId);
      delete closeTodo.todoId;
      await updateDoc(docRef, { ...closeTodo });
    },
    [props, setTodoArr, todoArr],
  );
  // // todo data update
  // const fixDataOn = () => {
  //   const fixData = { ...props, weeks: arrWeeks, todoTitle: inputValue };
  //   if (!TodoObjCompare(fixData, props)) {
  //     console.log('오케이');
  //     console.log(props);
  //     console.log(fixData);
  //   }
  // };
  // todo edit onOff
  const fixOnOff = useCallback(() => {
    setInputValue(props.todoTitle);
    setArrWeeks(props.weeks);
    setEditOpen(!editOpen);
  }, [editOpen, props.todoTitle, props.weeks]);
  // todo title update
  const fixEditOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue],
  );
  // todo week update
  const weekClick = useCallback(
    (text: string) => {
      const we = arrWeeks?.map((w, idx) => {
        return w.name === text ? { name: text, boo: !w.boo } : w;
      });
      setArrWeeks(we);
    },
    [arrWeeks],
  );
  return (
    <Box padding="10px" border="1px solid #eee" borderRadius="5px">
      <Flex flexDirection="column" gap="10px">
        <Flex justifyContent="space-between" alignItems="center">
          {editOpen ? (
            <Input
              value={inputValue}
              placeholder="수정 해주세요"
              size="sm"
              borderColor="#fff"
              paddingLeft="0px"
              maxLength={18}
              onChange={fixEditOnChange}
            />
          ) : (
            <Heading fontSize="sm" textDecoration={props.todoCheck ? 'line-through' : 'none'} color={checkColor}>
              {inputValue}
            </Heading>
          )}

          <Flex gap="6px">
            {props.todoCheck ? (
              <></>
            ) : (
              <EditIcon fontSize="small" sx={{ cursor: 'pointer', color: checkColor }} onClick={fixOnOff} />
            )}
            <Checkbox defaultChecked={props.todoCheck} onChange={todoCheck} colorScheme="green" />
          </Flex>
        </Flex>
        {editOpen ? (
          <Flex flexDirection="column" gap="10px" alignItems="flex-end">
            {' '}
            <WeeksBox dataWeek={arrWeeks ? arrWeeks : []} WeekClick={weekClick} />
            <Flex gap="10px">
              <Button size="xs" onClick={fixOnOff} w="50px">
                취소
              </Button>
              <Button size="xs" onClick={fixDataOn} w="50px">
                수정
              </Button>
            </Flex>
          </Flex>
        ) : null}
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
