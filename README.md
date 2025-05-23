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

---

# StudyAPI.js

This project is a RESTful API developed in Node.js using the Express framework and Prisma ORM, with an SQLite database. Its main purpose is to serve as a study and practice environment for building modern APIs, including data validation, layered organization (controllers, models, validators, routes), and integration with a relational database.

## Features

The API manages four main entities:

- **Users (`User`)**  
- **Products (`Produto`)**  
- **Tasks (`Tarefas`)**  
- **Images (`Image`)**  

Each entity has routes for CRUD operations (Create, Read, Update, Delete), with data validation and error handling.

### Users

- **GET /api/users**: Lists all users, including associated tasks.  
- **POST /api/users**: Creates a new user (validates email, name, and age).  
- **GET /api/users/:id**: Retrieves a user by ID, including their tasks.  
- **PUT /api/users/:id**: Updates a user’s data.  
- **DELETE /api/users/:id**: Deletes a user.  

### Products

- **GET /api/produtos**: Lists all products, including associated images.  
- **POST /api/produtos**: Creates a new product (validates description and price).  
- **GET /api/produtos/:id**: Retrieves a product by ID.  
- **PUT /api/produtos/:id**: Updates a product’s data.  
- **DELETE /api/produtos/:id**: Deletes a product.  

### Tasks

- **GET /api/tarefas**: Lists all tasks, including the associated user’s name.  
- **POST /api/tarefas**: Creates a new task (validates description and userId).  
- **GET /api/tarefas/:id**: Retrieves a task by ID.  
- **PUT /api/tarefas/:id**: Updates a task’s data.  
- **DELETE /api/tarefas/:id**: Deletes a task.  

### Images

- **GET /api/image**: Lists all images.  
- **POST /api/image**: Creates a new image (validates title, URL, and produtoId).  
- **GET /api/image/:id**: Retrieves an image by ID.  
- **PUT /api/image/:id**: Updates an image’s data.  
- **DELETE /api/image/:id**: Deletes an image.  

## Project Structure
```
/src
    /controllers   # Business logic for each entity
    /models        # Prisma Client integration
    /routes        # API route definitions
    /validator     # Validations with express-validator
/prisma
    schema.prisma  # Data model definition
    Dados.sqlite   # SQLite database
server.js        # Express server initialization
index.js         # Main route registration
.env             # Environment variables (e.g., DATABASE_URL)
```


## Goals

- Practice building RESTful APIs with Express and Prisma.  
- Learn to structure Node.js projects for scalability.  
- Implement data validation and error handling.  
- Perform complete CRUD operations on multiple related entities.  

## How to Run

1. Install dependencies:  
    ```sh
    npm install
    ```
2. Run Prisma migrations (if needed):

    ```sh
    npx prisma generate
    ```
3. Start the server:

    ```sh
    npm start
    ```

Access the API at: http://localhost:3000/api

### Notes

* The project uses SQLite for easy local testing and development.
* Validations are implemented with express-validator.
* The code is organized to facilitate maintenance and future expansion.
