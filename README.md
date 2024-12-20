# API de Gerenciamento de Transações

Uma API RESTful para gerenciamento de transações financeiras construída com Node.js, Fastify e PostgreSQL.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Fastify
- PostgreSQL
- Postgres.js (driver SQL)
- node-pg-migrate (migrações)
- Dotenv (variáveis de ambiente)

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
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
DATABASE_URL=postgresql://[usuario]:[senha]@[host]:[porta]/[banco]
```

4. Execute as migrações do banco de dados:

```bash
npm run migrate up
```

## 🚀 Executando o projeto

### Desenvolvimento

```bash
npm run dev
```

### Produção

1. Faça o build do projeto:

```bash
npm run build
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
├── .env                   # Variáveis de ambiente
├── tsconfig.json         # Configuração do TypeScript
└── package.json         # Dependências e scripts
```

## 📄 Licença

Este projeto está sob a licença ISC - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## ✨ Funcionalidades

- CRUD completo de transações
- Busca por nome de transação
- Validação de dados
- Conexão segura com PostgreSQL
- Tipagem forte com TypeScript
