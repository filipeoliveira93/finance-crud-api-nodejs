import sql from './db-connect';

async function createTable() {
    await sql`
    CREATE TABLE transactions (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        value NUMERIC(10, 2) NOT NULL,
        type VARCHAR(50) NOT NULL,
        category VARCHAR(100) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;
}

// Chame a função
createTable();
