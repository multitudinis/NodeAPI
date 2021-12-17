import { inject, injectable } from "tsyringe";
import { Task } from "../../infra/entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class ListTasksUseCase {
    constructor(
        @inject("TasksRepository")
        private TasksRepository: ITasksRepository
    ) { }
    async execute(): Promise<Task[]> {
        const tasks = await this.TasksRepository.findAll()
        return tasks
    }
}

export { ListTasksUseCase }