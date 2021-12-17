import { TasksRepositoryInMemory } from '../../repositories/inMemory/TasksRepositoryInMemory';
import { CreateTasksUseCase } from './createTaskUseCase'

let createTasksUseCase: CreateTasksUseCase;
let tasksRepositoryInMemory: TasksRepositoryInMemory

describe("Create Task", () => {
    beforeEach(() => {
        tasksRepositoryInMemory = new TasksRepositoryInMemory()
        createTasksUseCase = new CreateTasksUseCase(tasksRepositoryInMemory)
    })

    it("should be able to create a new task", async () => {
        await createTasksUseCase.execute({
            nome: "Matematica de padaria",
            conteudo: "Calcule a multiplicação da metade de 8 por 2",
            nomeAutor: "Lucas"
        })
    })
})