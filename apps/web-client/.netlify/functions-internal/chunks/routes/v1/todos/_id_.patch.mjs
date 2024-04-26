import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { z } from 'zod';
import { u as useTodo } from '../../../_/todo.schema.mjs';
import { p as parseBody } from '../../../_/validation.mjs';
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

const updateTodoSchema = z.object({
  title: z.string(),
  completed: z.boolean()
});
const _id__patch = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const updateTodoDto = await parseBody(event, updateTodoSchema);
  const Todo = await useTodo();
  return await Todo.findByIdAndUpdate({ _id: id }, updateTodoDto, {
    new: true
  });
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
