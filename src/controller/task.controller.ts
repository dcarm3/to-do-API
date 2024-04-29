import { Request, Response } from "express";
import taskService from "../service/task.service";

class TaskController {
    async create(req: Request, res: Response) {
        const createdTask = await taskService.create(req.body);
        res.status(201);
        return res.json(createdTask);
    }

    async findAll(req: Request, res: Response) {
        const findedTask = await taskService.findAll();
        return res.json(findedTask);
    }

    async findById(req: Request, res: Response) {
        const findedTask = await taskService.findById(req.params.id);
        return res.json(findedTask);
    }

    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(
            req.params.id,
            req.body
        );
        return res.json(updatedTask);
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await taskService.delete(req.params.id);
        return res.json(deleteMessage);
    }
}

export default new TaskController();
