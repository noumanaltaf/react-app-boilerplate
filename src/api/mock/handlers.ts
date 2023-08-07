import { rest } from 'msw';
import { DELAY_TIME, STATUS_CODES, TODOS } from './constants';
import { v4 as uuidv4 } from 'uuid';

export const handlers = [
    rest.get('https://noumanaltaf.com/api/todo', (req, res, ctx) => {
        return res(
            ctx.delay(DELAY_TIME),
            ctx.status(STATUS_CODES.success),
            ctx.json({ status: true, todos: TODOS }),
        )
    }),
    rest.post('https://noumanaltaf.com/api/todo', async (req, res, ctx) => {
        const body = await req.json();
        const id = uuidv4();
        TODOS.push({ id, ...body });

        return res(
            ctx.delay(DELAY_TIME),
            ctx.status(STATUS_CODES.success),
            ctx.json({ status: true, todos: TODOS }),
        )
    }),
    rest.delete('https://noumanaltaf.com/api/todo/:todoId', async (req, res, ctx) => {
        const todoId = req.params?.todoId;
        if (!todoId) {
            return res(
                ctx.delay(DELAY_TIME),
                ctx.status(STATUS_CODES.badRequest),
                ctx.json({ status: false }),
            );
        }
        const index = TODOS.findIndex((todo) => todo.id === todoId);
        TODOS.splice(index, 1);

        return res(
            ctx.delay(DELAY_TIME),
            ctx.status(STATUS_CODES.success),
            ctx.json({ status: true }),
        )
    }),
];
