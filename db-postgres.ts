import { randomUUID } from 'node:crypto';
import sql from './db-connect';

interface Transaction {
    name: string;
    value: number;
    type: string;
    category: string;
}

export class dbpostgres {
    private _transaction: Map<string, Transaction> = new Map();

    // list transacitons
    async listTransactions(search?: string) {
        let transactions;

        if (search) {
            transactions = await sql`SELECT * FROM transactions WHERE name ilike ${`%${search}%`}`;
        } else {
            transactions = await sql`SELECT * FROM transactions`;
        }

        return transactions;
    }

    async addTransaction(transaction: Transaction) {
        const transactionId = randomUUID();

        const { name, value, type, category } = transaction;
        await sql`insert into transactions (id, name, value, type, category) values (${transactionId}, ${name}, ${value}, ${type}, ${category})`;
    }

    async changeTransaction(transactionId: string, transaction: Transaction) {
        const { name, value, type, category } = transaction;
        await sql`UPDATE transactions SET name = ${name}, value = ${value}, type = ${type}, category = ${category} WHERE id = ${transactionId}`;
    }

    async deleteTransaction(transactionId: string) {
        const id = transactionId;
        await sql`delete from transactions where id=${id}`;
    }
}
