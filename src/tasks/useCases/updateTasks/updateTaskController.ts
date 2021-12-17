import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateTaskUseCase } from "./updateTaskUseCase"

class UpdateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { nome, conteudo, nomeAutor } = request.body

        const updateTaskUseCase = container.resolve(UpdateTaskUseCase)

        const updated = await updateTaskUseCase.execute({
            id,
            nome,
            conteudo,
            nomeAutor
        })
        return response.status(201).json(updated)
    }
}

export { UpdateTaskController }