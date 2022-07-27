import { useRouter } from 'next/router';
import { Heading, Box, Flex, Text, Checkbox, CSSObject } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, AddIcon } from '@chakra-ui/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
import { GraphBtn, RoundBtn } from '@components/common/KButton';
import KBox from '@components/common/KBox';
import { SectionTitle } from '@components/home/HomeGraph';
import { TodoData } from '@components/home/type';
import { GoalsType } from '@components/todo/type';
import random from '@utils/random';
import 'swiper/css';
import 'swiper/css/pagination';
import TodoEdit from '@components/todo/TodoEdit';

const TodoSide = () => {
  const data: GoalsType = {
    goalsId: random(30),
    goalsIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
    goalsTitle: '시니어 개발자!!!',
    startDate: '2022.02.10',
    endDate: '2032.02.10',
    memo: [
      '1. 매일매일 꾸준히 한다.',
      '2. 1주일에 한번씩 피드백을 받는다.',
      '3. 어려웠던 부분이 어떤 부분이라도 블로그에 남긴다.',
      '4. 환경에 영향을 받지 말자 내 가방에는 언제나 노트북이 있다!!',
    ],
  };

  const todoData: Array<TodoData> = [
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '출근하기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '영어단어 10개 외우기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '낮잠자기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '퇴근하기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '서브프로젝트 home 완료 ',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '저녁 먹기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '장군이 산책',
      todoCheck: true,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '12시 전에 취침',
      todoCheck: true,
    },
  ];

  const editTodo: Array<TodoData> = [
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '출근하기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '영어단어 10개 외우기',
      todoCheck: false,
    },
    {
      todoId: random(30),
      autherId: random(30),
      todoTitle: '낮잠자기',
      todoCheck: false,
    },
  ];
  const router = useRouter();
  const { query } = router;
  return (
    <KBox position="relative">
      <>
        {query.mode === 'view' ? (
          <Flex flexDirection="column" gap="20px">
            <SectionTitle text="Goals Detail" />
            <Flex>
              <DetailHead {...data} />
            </Flex>
            <Swiper
              direction={'vertical'}
              slidesPerView={6}
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

const DetailHead = (props: GoalsType) => {
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
  };
  return (
    <Box sx={boxSx}>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" alignItems="center" gap="10px" w="30%">
          <Box sx={detailHead} backgroundImage={props.goalsIcon} />
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
          <Heading fontSize="2xl">{props.goalsTitle}</Heading>
          <Box sx={MemoBox}>
            {props.memo
              ? props.memo.map((txt, index) => {
                  return (
                    <Text fontSize="sm" key={index} wordBreak="keep-all">
                      {txt}
                    </Text>
                  );
                })
              : ''}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoSide;
