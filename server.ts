import { fastify } from 'fastify';
import { dbpostgres } from './db-postgres';

const db = new dbpostgres();

const server = fastify();

server.get('/', () => {
    return 'hello word';
});

server.post<{
    Body: { name: string; value: number; type: string; category: string };
}>('/transaction', async (request, reply) => {
    const { name, value, type, category } = request.body;

    await db.addTransaction({
        name,
        value,
        type,
        category,
    });

    return reply.status(201).send();
});

server.get<{
    Querystring: { search?: string };
}>('/transaction', async (request) => {
    const search = request.query.search;
    console.log(search);
    const transactions = await db.listTransactions(search);

    return transactions;
});

server.put<{
    Params: { id: string };
    Body: { name: string; value: number; type: string; category: string };
}>('/transaction/:id', async (request, reply) => {
    const transactionId = request.params.id;
    const { name, value, type, category } = request.body;

    await db.changeTransaction(transactionId, {
        name,
        value,
        type,
        category,
    });

    return reply.status(204).send();
});

server.delete<{
    Params: { id: string };
}>('/transaction/:id', async (request, reply) => {
    const transactionId = request.params.id;

    await db.deleteTransaction(transactionId);

    return reply.status(204).send();
});

server.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333 });
