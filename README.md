# API de Gerenciamento de Transações

Uma API RESTful para gerenciamento de transações financeiras construída com Node.js, Fastify e PostgreSQL.

## 🚀 Tecnologias

- Node.js (v22+)
- TypeScript
- Fastify
- PostgreSQL
- Postgres.js (driver SQL)
- node-pg-migrate (migrações)
- Dotenv (variáveis de ambiente)
- TSX (execução de TypeScript)

## 📋 Pré-requisitos

- Node.js (versão 22 ou superior)
- PostgreSQL
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositório]
cd projeto-crud-nodejs
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

- Crie um arquivo `.env` na raiz do projeto
- Adicione a URL de conexão do PostgreSQL:

```env
DATABASE_URL=postgresql://[usuario]:[senha]@[host]:[porta]/[banco]?sslmode=require
```

4. Execute as migrações do banco de dados:

```bash
npm run migrate up
```

## 🚀 Executando o projeto

### Desenvolvimento

### Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em modo de desenvolvimento com hot-reload usando TSX.

### Produção

1. Faça o build do projeto:

```bash
npm run build
```

Isso irá compilar os arquivos TypeScript para JavaScript na pasta `dist/`.

2. Inicie o servidor:

```bash

```

Isso irá compilar os arquivos TypeScript para JavaScript na pasta `dist/`.

2. Inicie o servidor:

```bash
npm start
```

O build do projeto irá:

- Compilar todos os arquivos TypeScript para JavaScript
- Gerar os arquivos na pasta `dist/`
- Aplicar as configurações do `tsconfig.json`
- Manter a tipagem e otimizações do TypeScript

## 📌 Endpoints da API

### Transações

- `GET /` - Rota de teste (retorna "hello word")
- `GET /transaction` - Lista todas as transações
- `GET /transaction?search=[termo]` - Busca transações por nome
- `POST /transaction` - Cria uma nova transação
- `PUT /transaction/:id` - Atualiza uma transação
- `DELETE /transaction/:id` - Remove uma transação

### Exemplo de Payload (POST/PUT)

```json
{
    "name": "Energia",
    "value": 150.0,
    "type": "custos",
    "category": "moradia"
}
```

## 🛠️ Estrutura do Projeto

```
projeto-crud-nodejs/
├── src/
│   ├── db-connect.ts      # Configuração da conexão com o banco
│   ├── db-postgres.ts     # Classe de acesso ao banco
│   └── server.ts          # Configuração do servidor Fastify
├── dist/                  # Arquivos compilados
├── .env                   # Variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo git
├── tsconfig.json         # Configuração do TypeScript
└── package.json          # Dependências e scripts
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto TypeScript
- `npm start` - Inicia o servidor em produção
- `npm run migrate` - Executa as migrações do banco de dados
- `npm run create-migration` - Cria uma nova migração

## ✨ Funcionalidades

- CRUD completo de transações
- Busca por nome de transação (case insensitive)
- Validação de dados com TypeScript
- Conexão segura com PostgreSQL (SSL)
- Hot-reload em desenvolvimento
- Build otimizado para produção

## 🔒 Segurança

- Conexão SSL com o banco de dados
- Validação de tipos com TypeScript
- Sanitização de inputs nas queries SQL

## 📄 Licença

Este projeto está sob a licença ISC.
