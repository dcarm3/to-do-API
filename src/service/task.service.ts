import taskType from "../schemas/task.schemas";
import { TaskType } from "../types/task.types";

class TaskService {
    async create(task: TaskType) {
        const createdTask = await taskType.create(task);
        return createdTask;
    }

    async findAll() {
        const findedTasks = await taskType.find();
        return findedTasks;
    }

    async findById(id: string) {
        const findedTask = await taskType.findById(id);
        return findedTask;
    }

    async update(id: string, Task: TaskType) {
        const updateTask = await taskType.findByIdAndUpdate(
            id,
            {
                id: Task.id,
                titulo: Task.title,
                descricao: Task.description,
                dataCriacao: Task.creationDate,
                dataConclusao: Task.conclusionDate,
                dataVencimento: Task.dueDate,
                tipo: Task.type,
                categoria: Task.category,
                status: Task.status,
                usuario: Task.user
            },
            { new: true }
        );
        return updateTask;
    }

    async delete(id: string) {
        try {
            await taskType.findByIdAndDelete(id);
            return "Task removed";
        } catch (error) {
            throw new Error('Error on removing Task ${ error }');
        }
    }
}

export default new TaskService();