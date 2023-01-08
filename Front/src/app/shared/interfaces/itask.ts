import { Task } from "../models/task.model";

export interface ITask {
    getAllTask(): Task[];
    getTaskByDay(date: string): Task[];
    getTaskById(id: number): Task;
    getTaskByProject(idProjet: number): Task[];
    getTaskByColor(color: string): Task[];
    getTimeByDay(day: string, id: number): string;
    deleteTask(id: number): void;
}