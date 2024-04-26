import { d as defineEventHandler, g as getRouterParam } from '../../../runtime.mjs';
import { u as useTodo } from '../../../_/todo.schema.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const Todo = await useTodo();
  return await Todo.findByIdAndDelete({ _id: id }).exec();
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
