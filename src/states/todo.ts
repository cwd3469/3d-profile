import { TodoData, GoalData } from '@components/home/type';
import { atom, selector } from 'recoil';

const todoListAtom = atom<Array<TodoData>>({
  key: 'todoListAtom',
  default: [],
});

const todoGoalListAtom = atom<Array<GoalData>>({
  key: 'todoGoalListAtom',
  default: [
    {
      goalId: 'goalid1',
      autherId: 'goalidg',
      goalTitle: '시니어 개발자',
      goalCheck: false,
      startDate: '21 Mar , 2022',
      endDate: '21 Mar , 2025',
      onOff: false,
      todoList: [''],
    },
    {
      goalId: 'goalid2',
      autherId: 'goalidg',
      goalTitle: '토익 900',
      goalCheck: false,
      startDate: '21 Mar , 2022',
      endDate: '21 Mar , 2025',
      onOff: false,
      todoList: [''],
    },
    {
      goalId: 'goalid3',
      autherId: 'goalidg',
      goalTitle: '2032년 2월 20일 적금 해지',
      goalCheck: false,
      startDate: '21 Mar , 2022',
      endDate: '21 Feb , 2032',
      onOff: false,
      todoList: [''],
    },
    {
      goalId: 'goalid4',
      autherId: 'goalidg',
      goalTitle: '2032년 2월 20일 적금 해지 2032년 2월 20일 적금 해지 2032년 2월 20일 적금 해지',
      goalCheck: false,
      startDate: '21 Mar , 2022',
      endDate: '21 Feb , 2032',
      onOff: false,
      todoList: [''],
    },
    {
      goalId: 'goalid5',
      autherId: 'goalidg',
      goalTitle: '2032년 2월 20일 적금 해지',
      goalCheck: false,
      startDate: '21 Mar , 2022',
      endDate: '21 Feb , 2032',
      onOff: false,
      todoList: [''],
    },
  ],
});

const todoGoalTodoListAtom = atom<Array<GoalData>>({
  key: 'todoGoalTodoListAtom',
  default: [
    {
      goalId: '222',
      goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
      goalTitle: '시니어 개발자!!!',
      startDate: '2022.02.10',
      endDate: '2032.02.10',
      todoList: ['매일매일 1커밋', '매일매일 회고 작성', '모던 자바스크립트 Deep Dive 정독 중입니다.'],
      autherId: 'autherId',
      goalCheck: false,
      onOff: false,
    },
    {
      goalId: '222',
      goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
      goalTitle: '시니어 개발자!!!',
      startDate: '2022.02.10',
      endDate: '2032.02.10',
      todoList: ['매일매일 1커밋', '매일매일 회고 작성', '모던 자바스크립트 Deep Dive 정독 중입니다.'],
      autherId: 'autherId',
      goalCheck: false,
      onOff: false,
    },
    {
      goalId: '222',
      goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
      goalTitle: '시니어 개발자!!!',
      startDate: '2022.02.10',
      endDate: '2032.02.10',
      todoList: ['매일매일 1커밋', '매일매일 회고 작성', '모던 자바스크립트 Deep Dive 정독 중입니다.'],
      autherId: 'autherId',
      goalCheck: false,
      onOff: false,
    },
    {
      goalId: '222',
      goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
      goalTitle: '시니어 개발자!!!',
      startDate: '2022.02.10',
      endDate: '2032.02.10',
      todoList: ['매일매일 1커밋', '매일매일 회고 작성', '모던 자바스크립트 Deep Dive 정독 중입니다.'],
      autherId: 'autherId',
      goalCheck: false,
      onOff: false,
    },
    {
      goalId: '222',
      goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
      goalTitle: '시니어 개발자!!!',
      startDate: '2022.02.10',
      endDate: '2032.02.10',
      todoList: ['매일매일 1커밋', '매일매일 회고 작성', '모던 자바스크립트 Deep Dive 정독 중입니다.'],
      autherId: 'autherId',
      goalCheck: false,
      onOff: false,
    },
  ],
});

const todoGoalDetailAtom = atom<GoalData>({
  key: 'todoGoalDetailAtom',
  default: {
    goalId: 'goalid',
    goalIcon: 'https://cdn-icons-png.flaticon.com/512/6561/6561877.png',
    goalTitle: '시니어 개발자!!!',
    startDate: '2022.02.10',
    endDate: '2032.02.10',
    memo: [
      '1. 매일매일 꾸준히 한다.',
      '2. 1주일에 한번씩 피드백을 받는다.',
      '3. 어려웠던 부분이 어떤 부분이라도 블로그에 남긴다.',
      '4. 환경에 영향을 받지 말자 내 가방에는 언제나 노트북이 있다!!',
    ],
    autherId: 'autherId',
    goalCheck: false,
    onOff: false,
  },
});

export { todoListAtom, todoGoalListAtom, todoGoalTodoListAtom, todoGoalDetailAtom };
