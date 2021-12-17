import { getRepository, Repository } from "typeorm"
import { ICreateTaskDTO } from "../../DTOs/ICreateTaskDTO";
import { IDeleteTaskDTO } from "../../DTOs/IDeleteTaskDTO";
import { IUpdateTaskDTO } from "../../DTOs/IUpdateTask";
import { Task } from "../../infra/entities/Task"
import { ITasksRepository } from "../ITasksRepository"

class TasksRepository implements ITasksRepository {

    private repository: Repository<Task>
    constructor() {
        this.repository = getRepository(Task)
    }

    async create({ nome, conteudo, nomeAutor }
        : ICreateTaskDTO): Promise<Task> {

        const task = new Task()
        Object.assign(task, {
            nome,
            conteudo,
            nomeAutor
        })

        await this.repository.save(task)
        return task
    }

    async findAll(): Promise<Task[]> {
        const tasks = await this.repository.find()
        return tasks
    }

    async update({
        id,
        nome,
        conteudo,
        nomeAutor
    }: IUpdateTaskDTO
    ): Promise<Task> {
        const task = new Task()
        Object.assign(task, {
            id,
            nome,
            conteudo,
            nomeAutor
        })
        await this.repository.findOne(id)

        task.nome = nome ? nome : task.nome
        task.conteudo = conteudo ? conteudo : task.conteudo
        task.nomeAutor = nomeAutor ? nomeAutor : task.nomeAutor

        await this.repository.save(task)
        return task
    }

    async delete(id: IDeleteTaskDTO): Promise<void> {
        await this.repository.delete(id)
    }

    async findById(id: IFindByIdDTO): Promise<Task> {
        const task = await this.repository.findOne(id)
        return task
    }

}

export { TasksRepository }