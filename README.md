# EstudoAPI.js

Este projeto é uma API RESTful desenvolvida em Node.js utilizando o framework Express e o ORM Prisma, com banco de dados SQLite. O objetivo principal é servir como um ambiente de estudo e prática para construção de APIs modernas, incluindo validação de dados, organização em camadas (controllers, models, validators, routes) e integração com banco de dados relacional.

## Funcionalidades

A API gerencia quatro entidades principais:

- **Usuários (`User`)**
- **Produtos (`Produto`)**
- **Tarefas (`Tarefas`)**
- **Imagens (`Image`)**

Cada entidade possui rotas para as operações CRUD (Create, Read, Update, Delete), com validação de dados e tratamento de erros.

### Usuários

- **GET /api/users**: Lista todos os usuários, incluindo as tarefas associadas.
- **POST /api/users**: Cria um novo usuário (validação de email, nome e idade).
- **GET /api/users/:id**: Busca um usuário pelo ID, incluindo suas tarefas.
- **PUT /api/users/:id**: Atualiza dados de um usuário.
- **DELETE /api/users/:id**: Remove um usuário.

### Produtos

- **GET /api/produtos**: Lista todos os produtos, incluindo imagens associadas.
- **POST /api/produtos**: Cria um novo produto (validação de descrição e preço).
- **GET /api/produtos/:id**: Busca um produto pelo ID.
- **PUT /api/produtos/:id**: Atualiza dados de um produto.
- **DELETE /api/produtos/:id**: Remove um produto.

### Tarefas

- **GET /api/tarefas**: Lista todas as tarefas, incluindo o nome do usuário associado.
- **POST /api/tarefas**: Cria uma nova tarefa (validação de descrição e userId).
- **GET /api/tarefas/:id**: Busca uma tarefa pelo ID.
- **PUT /api/tarefas/:id**: Atualiza dados de uma tarefa.
- **DELETE /api/tarefas/:id**: Remove uma tarefa.

### Imagens

- **GET /api/image**: Lista todas as imagens.
- **POST /api/image**: Cria uma nova imagem (validação de título, URL e produtoId).
- **GET /api/image/:id**: Busca uma imagem pelo ID.
- **PUT /api/image/:id**: Atualiza dados de uma imagem.
- **DELETE /api/image/:id**: Remove uma imagem.

## Estrutura do Projeto

```
/src
    /controllers   # Lógica de negócio de cada entidade
    /models        # Integração com o Prisma Client
    /routes        # Definição das rotas da API
    /validator     # Validações com express-validator
/prisma
    schema.prisma  # Definição do modelo de dados
    Dados.sqlite   # Banco de dados SQLite
server.js        # Inicialização do servidor Express
index.js         # Registro das rotas principais
.env             # Variáveis de ambiente (ex: DATABASE_URL)
```

## Objetivos

- Praticar a criação de APIs RESTful com Express e Prisma.
- Aprender a estruturar projetos Node.js de forma escalável.
- Implementar validação de dados e tratamento de erros.
- Realizar operações CRUD completas em múltiplas entidades relacionadas.

## Como executar

1. Instale as dependências:
     ```sh
     npm install
     ```

2. Execute as migrações do Prisma (se necessário):
     ```sh
     npx prisma generate
     ```

3. Inicie o servidor:
     ```sh
     npm start
     ```

4. Acesse a API em: [http://localhost:3000/api](http://localhost:3000/api)

## Observações

- O projeto utiliza SQLite para facilitar testes e desenvolvimento local.
- As validações são feitas com express-validator.
- O código está organizado para facilitar a manutenção e expansão futura.