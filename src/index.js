const PORTA = 3001
const { ApolloServer} = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({typeDefs, resolvers});

server.listen(PORTA);