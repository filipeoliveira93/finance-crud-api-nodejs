// db.ts
import 'dotenv/config';
import postgres from 'postgres';

const options = {
    url: process.env.DATABASE_URL as string,
};

const sql = postgres(options.url, { ssl: { rejectUnauthorized: false } });

export default sql;
