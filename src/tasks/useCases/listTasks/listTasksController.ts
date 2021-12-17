import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListTasksUseCase } from "./listTasksUseCase"

class ListTasksController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listTasksUseCase = container.resolve(ListTasksUseCase)

        const all = await listTasksUseCase.execute()

        return response.json(all)
    }
}

export { ListTasksController }