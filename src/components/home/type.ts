import { MouseEventHandler } from "react";

export interface Mybodyinfo {
    autherProfileImage: string,
    autherName:string,
    autherAge: string,
    autherBlood: string,
    autherHeight: string,
    autherWeight: string,
    autherId:string,
}

export interface TodoData {
    todoId: string,
      autherId: string,
      todoTitle: string, 
      todoCheck: boolean,
      todoDate?:string,
      endDate?:string
      weeks?:Array<string>,
}

export interface TodoAdd {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    Icon?: JSX.Element;
    padding?: string;
    fontSize?: string;
  }

export interface StartItem {
  url: string;
  title: string;
  image: string;
}