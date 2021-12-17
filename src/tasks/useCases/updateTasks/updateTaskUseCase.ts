import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/appError";
import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
    id: string;
    nome: string;
    conteudo: string;
    nomeAutor: string;
}

@injectable()
class UpdateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private TasksRepository: ITasksRepository
    ) { }

    async execute({ id, nome, conteudo, nomeAutor }: IRequest): Promise<void> {
        const wrongId = await this.TasksRepository.findById({ id })
        if (!wrongId) {
            throw new AppError("The provided ID does not exists!")
        }
        await this.TasksRepository.update({ id, nome, conteudo, nomeAutor })
    }
}

export { UpdateTaskUseCase }