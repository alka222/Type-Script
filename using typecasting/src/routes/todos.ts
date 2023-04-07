import { Router } from 'express';

const router = Router();

import { Todo } from '../models/todo';

let todos: Todo[] = [];

type RequestBody = { text: string };
type RequestParams = { todoId: string };

router.get('/', (req, res, next) => {
    return res.status(200).json({todos: todos})
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    };

    todos.push(newTodo);

   return res.status(201).json({ message: 'Added todo.', todo: newTodo, todos: todos })
});

router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if(todoIndex >= 0){
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'updated todo.', todos: todos })
    }

    res.status(404).json({ message: 'could not find a todo for this id.'})
});

router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    return res.status(200).json({ message: 'Deleted todos.', todos: todos });
});

export default router;