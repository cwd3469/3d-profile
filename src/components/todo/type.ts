import { TodoData } from "@components/home/type";

export interface GoalsType {
    goalsId: string,
    goalsIcon: string,
    goalsTitle: string,
    startDate: string,
    endDate: string,
    memo?: Array<string>,
    todoList?: Array<String>,
}

