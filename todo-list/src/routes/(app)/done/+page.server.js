import {todos} from '#lib/server/database.js';

export async function load() {
    const results = await todos
        .find({userId: 'test-user', done: true})
        .sort({createdAt: -1})
        .toArray();
    return {
        todos: results.map((todo) => ({
            id: todo._id.toString(),
            text: todo.text
        }))
    };
}