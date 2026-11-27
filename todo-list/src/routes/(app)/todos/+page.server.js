import {todos} from '#lib/server/database.js';
import { fail } from '@sveltejs/kit';
import {BSON} from 'mongodb';

// form actions: https://svelte.dev/docs/kit/form-actions

export async function load() {
    const results = await todos
        .find({userId: 'test-user', done: false})
        //newest first
        .sort({createdAt: -1})
        .toArray();
    return {
        todos: results.map((todo) => ({
            id: todo._id.toString(),
            text: todo.text
        }))
    };
}

export const actions = { 
    create: async ({request}) => {

        const formData = await request.formData();
        const text = formData.get('text')?.toString().trim();
        if (!text) {
            return fail(400, { error: 'Todo cannot be empty' });
        } 

        // insertOne: https://www.mongodb.com/docs/manual/reference/method/db.collection.insertone/
        await todos.insertOne({
            text,
            done: false,
            userId: 'test-user',
            createdAt: new Date()
        });
    },
    markDone: async ({request}) => {

        const formData = await request.formData();
        const id = formData.get('id')?.toString();
        await todos.updateOne(
            { _id: new BSON.ObjectId(id), userId: 'test-user'},
            { $set: {done: true} }
        );
    }
}
