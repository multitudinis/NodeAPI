import { inject, injectable } from "tsyringe"
import { AppError } from "../../../shared/errors/appError"
import { ITasksRepository } from "../../repositories/ITasksRepository"

interface IRequest {
    id: string;
}

@injectable()
class DeleteTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private TasksRepository: ITasksRepository
    ) { }

    async execute({ id }: IRequest): Promise<void> {
        const wrongId = await this.TasksRepository.findById({ id })
        if (!wrongId) {
            throw new AppError("The provided ID does not exists!")
        }
        await this.TasksRepository.delete({ id })
    }
}

export { DeleteTaskUseCase }