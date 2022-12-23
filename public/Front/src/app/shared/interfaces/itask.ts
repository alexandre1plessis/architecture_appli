import { Task } from "../models/task.model";

export interface ITask {
    getAllTask(): Task[];
    getTaskByDay(date: string): Task[];
    getTaskById(id: number): Task;
    getTaskByProject(id_projet: number): Task[];
    getTaskByColor(color: string): Task[];
    getTimeByDay(day: string, id: number): string;
    deleteTask(id: number): void;
}