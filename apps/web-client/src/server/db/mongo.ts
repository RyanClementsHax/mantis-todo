import mongoose, {
  type model,
  type Schema,
  type CompileModelOptions,
} from 'mongoose';
import path from 'node:path';
import { tmpdir } from 'node:os';
import net from 'node:net';
import fs from 'fs-extra';

let cachedConnection: typeof mongoose | null = null;
export async function getConnection(): Promise<typeof mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }
  const uri = await getUri();
  const newConnection = await mongoose.connect(uri);
  cachedConnection = newConnection;
  return newConnection;
}

export const useModel = async function <TSchema extends Schema>(
  name: string,
  schema?: TSchema,
  collection?: string,
  options?: CompileModelOptions,
) {
  const conn = await getConnection();
  return conn.models[name]
    ? conn.models[name]
    : conn.model(name, schema, collection, options);
} as typeof model;

let cachedUri: string | null = null;
async function getUri(): Promise<string> {
  if (cachedUri) {
    return cachedUri;
  }
  const uri = import.meta.env.MONGODB_URI;
  if (typeof uri !== 'string') {
    throw new Error('MONGODB_URI environment variable is not set');
  }
  cachedUri = uri;
  return uri;
}
