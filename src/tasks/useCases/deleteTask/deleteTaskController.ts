import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteTaskUseCase } from "./deleteTaskUseCase"

class DeleteTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const deleteTaskUseCase = container.resolve(DeleteTaskUseCase)

        await deleteTaskUseCase.execute({
            id
        })
        return response.status(204).send()
    }
}

export { DeleteTaskController }