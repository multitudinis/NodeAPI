import { Router } from "express";
import { CreateTaskController } from "../../../../tasks/useCases/createTasks/createTaskController";
import { DeleteTaskController } from "../../../../tasks/useCases/deleteTask/deleteTaskController";
import { ListTasksController } from "../../../../tasks/useCases/listTasks/listTasksController";
import { UpdateTaskController } from "../../../../tasks/useCases/updateTasks/updateTaskController";

const tasksRoutes = Router()
const createTaskController = new CreateTaskController()
const listTasksController = new ListTasksController()
const updateTaskController = new UpdateTaskController()
const deleteTaskController = new DeleteTaskController()

tasksRoutes.post("/", createTaskController.handle)
tasksRoutes.get("/", listTasksController.handle)
tasksRoutes.put("/:id", updateTaskController.handle)
tasksRoutes.delete("/:id", deleteTaskController.handle)

export { tasksRoutes }