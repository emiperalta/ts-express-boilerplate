import { Router, Request, Response, NextFunction } from 'express';
import * as indexController from '../controllers/index.controller';

const route = Router();

// endpoints
route.get('/', indexController.index);

route.get('/todos', indexController.getTodos);

route.get('/todos/:id', indexController.getTodoById);

route.post('/todos', indexController.postTodo);

route.put('/todos/:id', indexController.updateTodo);

route.delete('/todos/:id', indexController.deletTodo);

export default route;
