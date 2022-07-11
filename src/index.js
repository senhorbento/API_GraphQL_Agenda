const PORTA = 3001
const mongoose = require('mongoose');
const { ApolloServer} = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({typeDefs, resolvers});

mongoose.connect('mongodb://localhost/Agenda');
mongoose.Promise = global.Promise;

server.listen(PORTA);