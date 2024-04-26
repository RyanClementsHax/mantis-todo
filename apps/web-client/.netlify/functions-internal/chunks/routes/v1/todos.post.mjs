import { d as defineEventHandler } from '../../runtime.mjs';
import { u as useTodo } from '../../_/todo.schema.mjs';
import { z } from 'zod';
import { p as parseBody } from '../../_/validation.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'mongodb-memory-server';
import 'node:path';
import 'node:os';
import 'node:net';
import 'fs-extra';

const createTodoSchema = z.object({
  title: z.string(),
  completed: z.boolean()
});
const todos_post = defineEventHandler(async (event) => {
  const createTodoDto = await parseBody(event, createTodoSchema);
  const Todo = await useTodo();
  return await Todo.create(createTodoDto);
});

export { todos_post as default };
//# sourceMappingURL=todos.post.mjs.map
