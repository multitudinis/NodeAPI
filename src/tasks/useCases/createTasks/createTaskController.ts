import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateTasksUseCase } from "./createTaskUseCase"

class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, conteudo, nomeAutor } = request.body

        const createTaskUseCase = container.resolve(CreateTasksUseCase)

        await createTaskUseCase.execute({
            nome,
            conteudo,
            nomeAutor
        })
        return response.status(201).send()
    }
}

export { CreateTaskController }