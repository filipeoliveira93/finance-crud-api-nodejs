import { fastify } from 'fastify';
import { dbLocal } from './db-local';
import { NOMEM } from 'node:dns';

const db = new dbLocal();

const server = fastify();

server.get('/', () => {
  return 'hello word';
});

server.post<{
  Body: { name: string; value: number; type: string; category: string };
}>('/transaction', (request, reply) => {
  const { name, value, type, category } = request.body;

  db.addTransaction({
    name,
    value,
    type,
    category
  });

  return reply.status(201).send();
});

server.get<{
  Querystring: { search?: string };
}>('/transaction', (request) => {

  const search = request.query.search;
  console.log(search)
  const transactions = db.listTransactions(search);

   return transactions
});

server.put<{
  Params: { id: string };
  Body: { name: string; value: number; type: string; category: string };
}>('/transaction/:id', (request, reply) => {
  const transactionId = request.params.id;
  const { name, value, type, category } = request.body;

  db.changeTransaction(transactionId, {
    name,
    value,
    type,
    category
  });

  return reply.status(204).send();
});

server.delete<{
  Params: { id: string };
}>('/transaction/:id', (request, reply) => {
  const transactionId = request.params.id;

  db.deleteTransaction(transactionId);

  return reply.status(204).send();

});

server.listen({ port: 3333 });

console.log('http://localhost:3333');
