import { MONGODB_URI } from '$app/env/private';
import { BSON, MongoClient } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

export const EJSON = BSON.EJSON;

export const mongo_client = new MongoClient(MONGODB_URI);
attachDatabasePool(mongo_client);

export const db = mongo_client.db('todo-list').collection('todos');