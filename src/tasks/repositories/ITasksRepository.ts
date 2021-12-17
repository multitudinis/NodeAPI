import { ICreateTaskDTO } from "../DTOs/ICreateTaskDTO";
import { IDeleteTaskDTO } from "../DTOs/IDeleteTaskDTO";
import { IUpdateTaskDTO } from "../DTOs/IUpdateTask";
import { Task } from "../infra/entities/Task";

interface ITasksRepository {
    create(data: ICreateTaskDTO): Promise<Task>
    findAll(): Promise<Task[]>
    update(data: IUpdateTaskDTO): Promise<Task>
    delete(data: IDeleteTaskDTO): Promise<void>
    findById(data: IFindByIdDTO): Promise<Task>
}

export { ITasksRepository }