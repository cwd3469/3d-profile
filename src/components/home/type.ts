import { MouseEventHandler } from 'react';

export interface Mybodyinfo {
  autherProfileImage: string;
  autherName: string;
  autherAge: string;
  autherBlood: string;
  autherHeight: string;
  autherWeight: string;
  autherId: string;
}

export interface TodoData {
  todoId?: string;
  autherId: string;
  goalId?: string;
  todoTitle: string;
  todoCheck: boolean;
  startDate?: string;
  endDate?: string;
  weeks?: Array<string>;
  onOff: boolean;
  totalAmount?: number;
  allotment?: number;
  counter?: number;
  timestamp?: Date;
}
export interface GoalData {
  goalId: string;
  goalIcon?: string;
  autherId: string;
  goalTitle: string;
  goalCheck: boolean;
  startDate?: string;
  endDate?: string;
  todoList?: Array<string>;
  onOff: boolean;
  memo?: Array<string>;
}

export interface TodoAdd {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
  Icon?: JSX.Element;
  padding?: string;
  fontSize?: string;
}

export interface CareerPortfolio {
  url: string;
  title: string;
  image: string;
}
