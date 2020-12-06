import { Request, Response, NextFunction } from 'express';

export const index = (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Hello World!' });
};

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    res.json([
        { id: 1, description: 'Study' },
        { id: 2, description: 'Play videogames' },
    ]);
};

export const getTodoById = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.json({ httpMethod: req.method, id: req.params.id });
};

export const postTodo = (req: Request, res: Response, next: NextFunction) => {
    res.json({ httpMethod: req.method });
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    res.json({ httpMethod: req.method, id: req.params.id });
};

export const deletTodo = (req: Request, res: Response, next: NextFunction) => {
    res.json({ httpMethod: req.method, id: req.params.id });
};
