import { TasksRepositoryInMemory } from "../../repositories/inMemory/TasksRepositoryInMemory"
import { ListTasksUseCase } from "./listTasksUseCase"

let listTasksUseCase: ListTasksUseCase
let tasksRepositoryInMemory: TasksRepositoryInMemory

describe("list tasks", () => {
    beforeEach(() => {
        tasksRepositoryInMemory = new TasksRepositoryInMemory()
        listTasksUseCase = new ListTasksUseCase(tasksRepositoryInMemory)
    })

    it("Should be able to list all tasks", async () => {
        const task = await tasksRepositoryInMemory.create({
            nome: "Jardinagem",
            conteudo: "Regar todas as plantas, ao fim da tarde",
            nomeAutor: "Alegre"
        })

        await tasksRepositoryInMemory.create({
            nome: "Jardinagem",
            conteudo: "Regar todas as plantas, ao fim da tarde",
            nomeAutor: "Alegre"
        })

        const tasks = await listTasksUseCase.execute()
        expect(tasks).toHaveLength(2)
    })
})