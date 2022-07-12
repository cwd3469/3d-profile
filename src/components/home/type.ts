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
}