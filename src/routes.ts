import { Router } from 'express'
import categoryController from './controller/category.controller';
import taskController from './controller/task.controller';
import userController from './controller/user.controller';

const routes = Router()//rotas para categoria
routes.post("/categories", categoryController.create);
routes.get("/categories", categoryController.findAll);
routes.get("/categories/:id", categoryController.findById);
routes.put("/categories/:id", categoryController.update);
routes.delete("/categories/:id", categoryController.delete);

routes.post("/tasks", taskController.create);//rotas para tasks
routes.get("/tasks", taskController.findAll);
routes.get("/tasks/:id", taskController.findById);
routes.put("/tasks/:id", taskController.update);
routes.delete("/tasks/:id", taskController.delete);

routes.post("/user", userController.create);//rotas para usuários
routes.get("/user", userController.findAll);
routes.get("/user/:id", userController.findById);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.delete);

export { routes };