import { Button, Flex, Input, Textarea, Text, Box } from '@chakra-ui/react';
import { GraphBtn, RoundBtn } from '@components/common/KButton';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import random from '@utils/random';
import { TodoData } from '@components/home/type';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { DetailTodo } from '@components/todo/TodoSide';
import DatePickerComponent from '@components/common/DatePickerComponent';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListAtom } from '@states/todo';
import moment from 'moment';
import { ArrWeeks } from './type';

interface WeekBoxInterface {
  dataWeek: Array<ArrWeeks>;
  WeekClick: (text: string) => void;
}

export const WeeksBox = (props: WeekBoxInterface) => {
  return (
    <Flex gap="5px" justifyContent="space-between" w="100%">
      {props.dataWeek.map((week, index) => {
        return (
          <GraphBtn
            text={week.name}
            key={index}
            active={week.boo}
            onClick={() => {
              props.WeekClick(week.name);
            }}
          />
        );
      })}
    </Flex>
  );
};

const TodoEdit = () => {
  const router = useRouter();
  const editTodo = useRecoilValue(todoListAtom);

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndtDate] = useState<string>('');

  return (
    <Flex flexDirection="column" gap="15px">
      <Flex gap="10px" justifyContent="space-between" alignItems="center">
        <RoundBtn Icon={<AddAPhotoIcon />} big />
        <Input placeholder="목표를 입력해주세요" size="lg" w="85%" />
      </Flex>
      <Textarea placeholder="Here is a sample placeholder" resize="none" height="160px" />
      <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel]}
        className="edit-todo">
        {editTodo.map((todo, index) => {
          return (
            <SwiperSlide key={index} className="detail-swiper-item">
              {' '}
              <DetailTodo {...todo} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <Flex justifyContent="space-between">
        <WeeksBox />
      </Flex> */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
        border="1px solid #ddd"
        padding="5px 5px 5px 0px"
        borderRadius="10px">
        <Input placeholder="할일 목록을 입력해주세요" size="lg" border="0px" />
        <Button>Todo!</Button>
      </Flex>
      <Box h="15px" />
      <Box h="1px" w="100%" bg="#ddd" />
      <Flex justifyContent="space-between">
        <DatePickerComponent setSearchDateString={setStartDate} setSelectedEndDateString={setEndtDate} isRangeSearch />
        <Flex gap="15px" justifyContent="flex-end">
          <Button>목표 설정</Button>
          <Button>취소</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TodoEdit;
