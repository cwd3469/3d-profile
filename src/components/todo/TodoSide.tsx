import { useRouter } from 'next/router';
import { Heading, Box, Flex, Text, Checkbox, CSSObject } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, AddIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import { GraphBtn, RoundBtn } from '@components/common/KButton';
import KBox from '@components/common/KBox';
import { SectionTitle } from '@components/home/HomeGraph';
import { GoalData, TodoData } from '@components/home/type';
import 'swiper/css';
import 'swiper/css/pagination';
import TodoEdit from '@components/todo/TodoEdit';
import { useRecoilValue } from 'recoil';
import { todoGoalDetailAtom, todoListAtom } from '@states/todo';

const TodoSide = () => {
  const goal = useRecoilValue(todoGoalDetailAtom);
  const todoData = useRecoilValue(todoListAtom);
  // const editTodo = useRecoilValue(todoListAtom);

  const router = useRouter();
  const { query } = router;
  return (
    <KBox position="relative">
      <>
        {query.mode === 'view' ? (
          <Flex flexDirection="column" gap="20px">
            <SectionTitle text="Goals Detail" />
            <Flex>
              <DetailHead {...goal} />
            </Flex>
            <Swiper
              direction={'vertical'}
              slidesPerView={6.5}
              spaceBetween={0}
              mousewheel={true}
              modules={[Mousewheel]}
              className="detail-todo">
              {todoData.map((todo, index) => {
                return (
                  <SwiperSlide key={index} className="detail-swiper-item">
                    {' '}
                    <DetailTodo {...todo} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box position="absolute" bottom="10px" right="10px" zIndex="1">
              <RoundBtn big Icon={<AddIcon />} onClick={() => router.push('/todo?mode=edit')} />
            </Box>
          </Flex>
        ) : (
          <TodoEdit />
        )}
      </>
    </KBox>
  );
};

export const DetailTodo = (props: TodoData) => {
  const TodoStype: CSSObject = {
    bg: '#fff',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  };
  return (
    <Box sx={TodoStype}>
      <Flex justifyContent="space-between">
        <Text fontSize="md">{props.todoTitle}</Text>
        <Flex alignItems="center" gap="10px">
          <Flex></Flex>
          <Checkbox size="lg" onClick={() => console.log(props.todoId)} />
          <GraphBtn Icon={<EditIcon />} onClick={() => console.log(props.todoId)} />
          <GraphBtn Icon={<DeleteIcon />} onClick={() => console.log(props.todoId)} />
        </Flex>
      </Flex>
    </Box>
  );
};

const DetailHead = (props: GoalData) => {
  const detailHead: CSSObject = {
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    backgroundColor: '#fff',
    boxShadow: '2px 1px 10px #E2E8E7',
    backgroundPosition: 'center',
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
  };
  const boxSx: CSSObject = {
    padding: '20px 10px',
    backgroundColor: '#fff',
    boxShadow: '2px 1px 10px 1px rgba(0,0,0,0.1)',
    borderRadius: '20px',
    width: '100%',
  };
  const MemoBox: CSSObject = {
    backgroundColor: '#eee',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    height: '140px',
    overflowY: 'scroll',
  };
  return (
    <Box sx={boxSx}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" alignItems="center" gap="10px" w="30%">
          <Box sx={detailHead} backgroundImage={props.goalIcon} />
          <Heading fontSize="xl">D-3650</Heading>
          <Box>
            <Text fontSize="12px" color="#999">
              시작: {props.startDate}
            </Text>
            <Text fontSize="12px" color="#999">
              ~ 끝: {props.endDate}
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="10px" w="68%">
          <Heading fontSize="2xl">{props.goalTitle}</Heading>
          <Box sx={MemoBox}>
            <div>
              {props.memo
                ? props.memo.map((txt, index) => {
                    return (
                      <Text fontSize="sm" key={index} wordBreak="keep-all">
                        {txt}
                      </Text>
                    );
                  })
                : ''}
            </div>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoSide;
