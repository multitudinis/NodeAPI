import "reflect-metadata"
import { inject, injectable } from 'tsyringe'
import { ITasksRepository } from '../../repositories/ITasksRepository'

interface IRequest {
    nome: string;
    conteudo: string;
    nomeAutor: string;
}

@injectable()
class CreateTasksUseCase {
    constructor(
        @inject("TasksRepository")
        private TasksRepository: ITasksRepository
    ) { }
    async execute(
        { nome,
            conteudo,
            nomeAutor }: IRequest
    ): Promise<void> {
        await this.TasksRepository.create({
            nome,
            conteudo,
            nomeAutor
        })
    }
}

export { CreateTasksUseCase }