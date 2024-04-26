import { d as defineEventHandler } from '../../runtime.mjs';
import { u as useTodo } from '../../_/todo.schema.mjs';
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

const todos_get = defineEventHandler(async () => {
  const Todo = await useTodo();
  return await Todo.find().exec();
});

export { todos_get as default };
//# sourceMappingURL=todos.get.mjs.map
