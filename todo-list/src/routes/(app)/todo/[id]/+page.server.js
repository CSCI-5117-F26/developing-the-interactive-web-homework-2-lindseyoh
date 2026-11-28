import {todos} from '#lib/server/database.js';
import {error, fail} from '@sveltejs/kit';
import {BSON} from 'mongodb';

export async function load({params}) {
    if (!BSON.ObjectId.isValid(params.id)) {
        error(404, "404 not found");
    }

    const todo = await todos.findOne({
        _id: new BSON.ObjectId(params.id),
        userId: 'test-user'
    });

    if (!todo) {
        error(404, "not found");
    }

    return {
        todo: {
            id: todo._id.toString(),
            text: todo.text,
            done: todo.done
        }
    };
}


export const actions = { 
    save: async ({request, params}) => {

        const formData = await request.formData();
        const text = formData.get('text')?.toString().trim();
        if (!text) {
            return fail(400, { error: 'Todo cannot be empty' });
        } 
        await todos.updateOne(
            { _id: new BSON.ObjectId(params.id), userId: 'test-user'},
            { $set: {text} }
        );
    },
    markDone: async ({params}) => {
        await todos.updateOne(
            { _id: new BSON.ObjectId(params.id), userId: 'test-user'},
            { $set: {done: true} }
        );
    }
}