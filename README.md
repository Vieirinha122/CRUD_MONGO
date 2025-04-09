# CRUD MongoDB

Este é um projeto de CRUD de uma lista telefônica feito em Node.js e React.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **CSS**: Linguagem de estilo para definir a apresentação de páginas web.
- **JavaScript**: Linguagem de programação utilizada tanto no frontend quanto no backend.
- **HTML**: Linguagem de marcação para estruturar o conteúdo na web.

## Estrutura do Projeto

- **Backend**: O backend é construído com Node.js e Express para gerenciar as operações CRUD (Criar, Ler, Atualizar, Deletar) no MongoDB.
- **Frontend**: O frontend é construído com React para criar uma interface de usuário interativa.

## Funcionalidades

- **Adicionar Contato**: Permite adicionar novos contatos à lista telefônica.
- **Listar Contatos**: Exibe todos os contatos salvos.
- **Atualizar Contato**: Permite editar as informações de um contato existente.
- **Deletar Contato**: Permite remover um contato da lista.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- MongoDB em execução
- Arquivo `.env` configurado

### Configurando o arquivo `.env`

Na raiz do projeto (onde está o backend), crie um arquivo `.env` com o seguinte conteúdo ou copie o arquivo `.env.example` e renomeie para `.env`:

```env
MONGO_URI=mongodb://localhost:27017/nomedobanco
PORT=3000
```
⚠️ Substitua nomedobanco pelo nome desejado para o seu banco de dados MongoDB.

Passos para executar

Clone o repositório:
```bash
git clone https://github.com/Vieirinha122/CRUD_MONGO.git
cd CRUD_MONGO
```

Instale as dependências do backend:
```bash
npm install
```
Crie o arquivo .env conforme as instruções acima.

Inicie o servidor backend:
```bash
npm run dev
```
Em outro terminal, vá para o diretório frontend e instale as dependências:

```bash
cd frontend
npm install
```
Inicie o servidor frontend:

```bash
npm run dev
```

⚠️ A aplicação estará disponível no navegador no endereço gerado no terminal do frontend (geralmente http://localhost:5173).