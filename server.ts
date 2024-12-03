// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//   response.write('eae boca de pelo');

//   return response.end();
// });

// server.listen(3232);

import { fastify } from 'fastify';
import { dbLocal } from './db-local';

const db = new dbLocal();

const server = fastify();

server.get('/', () => {
  return 'hello word';
});

server.post('/transaction', (request, reply) => {
  db.addTransaction('aluguel');
  console.log(db.listTransactions());

  return reply.status(201).send();
});

server.get('/transaction', () => {
  return 'hello mars';
});

server.put('/transaction/:id', () => {
  return 'hello venus';
});

server.delete('/transaction/:id', () => {
  return 'hello sun';
});

server.listen({ port: 3333 });

console.log('https://localhost/3333');
