// db.ts
import postgres from 'postgres';

const sql = postgres({
  /* suas opções de conexão aqui */
});

export default sql;