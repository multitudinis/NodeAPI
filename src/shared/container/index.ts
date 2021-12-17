import "reflect-metadata"
import { container } from "tsyringe";
import { TasksRepository } from "../../tasks/repositories/implementations/tasksRepository";
import { ITasksRepository } from "../../tasks/repositories/ITasksRepository";

container.registerSingleton<ITasksRepository>(
    "TasksRepository",
    TasksRepository
)