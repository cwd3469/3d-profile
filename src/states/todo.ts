import { atom, selector } from 'recoil';
import { TodoData as TodoDataType } from '@components/home/type';

const todoListAtom = atom({
  key: 'todoListAtom',
  default: {
    todoData: [
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '출근하기',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '영어단어 10개 외우기',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '낮잠자기',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '퇴근하기',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '서브프로젝트 home 완료 ',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '저녁 먹기',
        todoCheck: false,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '장군이 산책',
        todoCheck: true,
      },
      {
        todoId: 'id',
        autherId: 'id',
        todoTitle: '12시 전에 취침',
        todoCheck: true,
      },
    ],
  },
});

const todoListCreate = selector({
  key: 'todoListCreate',
  get: ({ get }) => {
    const todo = get(todoListAtom);
  },
});

export { todoListAtom };
