import { ICreateTaskDTO } from "../../DTOs/ICreateTaskDTO";
import { IDeleteTaskDTO } from "../../DTOs/IDeleteTaskDTO";
import { IUpdateTaskDTO } from "../../DTOs/IUpdateTask";
import { Task } from "../../infra/entities/Task";
import { ITasksRepository } from "../ITasksRepository";

class TasksRepositoryInMemory implements ITasksRepository {
    tasks: Task[] = []

    async create({
        nome,
        conteudo,
        nomeAutor
    }: ICreateTaskDTO): Promise<Task> {
        const task = new Task()
        Object.assign(task, {
            nome,
            conteudo,
            nomeAutor
        })
        this.tasks.push(task)
        return task
    }

    async findAll(): Promise<Task[]> {
        return this.tasks
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
        //await this.repository.findOne(id)

        task.nome = nome ? nome : task.nome
        task.conteudo = conteudo ? conteudo : task.conteudo
        task.nomeAutor = nomeAutor ? nomeAutor : task.nomeAutor

        //await this.repository.save(task)
        return task
    }

    async delete(id: IDeleteTaskDTO): Promise<void> {
        //await this.repository.delete(id)
    }

    async findById(id: IFindByIdDTO): Promise<Task> {
        //const task = await this.repository.findOne(id)
        const tasks = new Task();

        return tasks
    }

}

export { TasksRepositoryInMemory }