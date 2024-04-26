import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import mongoose, { Schema } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import path from 'node:path';
import { tmpdir } from 'node:os';
import net from 'node:net';
import fs from 'fs-extra';

let cachedConnection = null;
async function getConnection() {
  if (cachedConnection) {
    return cachedConnection;
  }
  const uri = await getUri();
  const newConnection = await mongoose.connect(uri);
  cachedConnection = newConnection;
  return newConnection;
}
const useModel = async function(name, schema, collection, options) {
  const conn = await getConnection();
  return conn.models[name] ? conn.models[name] : conn.model(name, schema, collection, options);
};
let cachedUri = null;
async function getUri() {
  if (cachedUri) {
    return cachedUri;
  }
  const uri = globalThis._importMeta_.env.MONGODB_URI;
  if (typeof uri !== "string") {
    throw new Error("MONGODB_URI environment variable is not set");
  }
  const useLocalDb = uri === "local";
  if (useLocalDb) {
    const port = 27017;
    const uri2 = `mongodb://127.0.0.1:${port}`;
    const dbPath = path.join(tmpdir(), "mantis-todo-db");
    if (await isPortInUse(27017)) {
      console.log(`Local database found at uri: ${uri2}, dbPath: ${dbPath}`);
      return uri2;
    }
    await fs.ensureDir(dbPath);
    await MongoMemoryServer.create({
      instance: {
        // Without specifying a dbPath a random path will be selected
        dbPath,
        // Without specifying the port a random port will be selected
        port,
        // Persists the data to disk
        storageEngine: "wiredTiger"
      }
    });
    console.log(`Started local database at uri: ${uri2}, dbPath: ${dbPath}`);
    cachedUri = uri2;
    return uri2;
  } else {
    cachedUri = uri;
    return uri;
  }
}
function isPortInUse(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", (err) => {
      server.close();
      if (err.code != "EADDRINUSE")
        return reject(err);
      resolve(true);
    });
    server.once("listening", () => {
      server.close();
      resolve(false);
    });
    server.listen(port);
  });
}

const TodoSchema = new Schema({
  title: String,
  completed: Boolean
});
const useTodo = async () => useModel("Todo", TodoSchema);

export { useTodo as u };
//# sourceMappingURL=todo.schema.mjs.map
