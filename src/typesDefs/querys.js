const { gql } = require("apollo-server");

const types = gql`
   type Query{
    agenda: [Contato!]!
    contato: Contato!
    obterContatoPorEmail(email: String!): Contato!
    obterContatoPorTelefone(telefone: String!): Contato!
    }
`;

module.exports = querys;
