# Projeto app-bank-gql com Nest.js, GraphQL, MongoDB e Prisma

Este é um projeto simples que utiliza o framework Nest.js com MongoDB como banco de dados e o Prisma como ORM, além do GraphQL.

## Pré-requisitos

Verifique se você tem os seguintes requisitos instalado na sua máquina:

- [Node.js](https://nodejs.org/)

- [MongoDB](https://www.mongodb.com/try/download/community)

## Configuração do MongoDB

1. Verifique se o MongoDB está instalado e em execução na sua máquina. Para executar você precisará entrar no arquivo onde está o MongoDB e executar o comando "mongod".

2. Crie um banco de dados MongoDB para o seu projeto.

3. Nesse repositório está o arquivo da collection account.json para o seu banco.

4. Copie a connection string e cole-a no arquivo `.env` na raiz do projeto. No arquivo terá uma variável DATABASE_URL, você irá colocar sua connection string como valor dela. 
 
## Configurações do Prisma

1. Todas as configurações estão feitas porém recomendo instalar o Prisma separadamente e globalmente das outras dependências:
<p>yarn add -g prisma</p>

## Intalação das Dependências

1. Instale as dependências do projeto executando:
   <p>yarn install</p>

## Executando o Projeto

Agora que o MongoDB, o Prisma e as dependências do projeto estão configurados, você pode iniciar o projeto com o watcher use o seguinte comando:
<p>yarn start:dev</p>

## Testando a API

Com o projeto em execução entre na localhost com a porta definida no arquivo main.ts e adicione um /graphql. Ficaria mais ou menos assim:
<p>http://localhost:3040/graphql</p>

Ele abrirá um servidor que você poderá testar os endpoints.

## Consulta GraphQL para Obter o Saldo da Conta, Depositar e Sacar

```graphql
query {
  getAccountBalance(accountNumber: 1416) {
    accountNumber
    balance
  }
}

mutation {
  updateAccountBalance(accountNumber: 1416, updateAccountInput: { balance: -100 }) {
    accountNumber
    balance
  }
}

mutation {
  updateAccountBalance(accountNumber: 1416, updateAccountInput: { balance: 200 }) {
    accountNumber
    balance
  }
}
