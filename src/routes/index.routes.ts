import { Router } from 'express';
import * as indexController from '../controllers/index.controller';

const router = Router();

// endpoints
router.get('/', indexController.index);

router.get('/todos', indexController.getTodos);

router.get('/todos/:id', indexController.getTodoById);

router.post('/todos', indexController.postTodo);

router.put('/todos/:id', indexController.updateTodo);

router.delete('/todos/:id', indexController.deleteTodo);

export default router;
