const { gql } = require("apollo-server");

const mutation = gql`
    type Mutation{
        criarContato(nome: String!, telefone: String!, email: String): Contato!
        atualizarContato(id:ID!, nome: String, telefone: String, email: String): Contato!
        excluirContato(id:ID!, nome: String, telefone: String, email: String): Contato!
    }
`;

module.exports = mutation;