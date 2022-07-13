const { gql } = require("apollo-server");

const query = gql`
   type Query{
        agenda: [Contato]
        obterContatoPorID(id:ID!): Contato
        obterContatoPorEmail(email: String!): Contato
        obterContatoPorTelefone(telefone: String!): Contato
    }
`;

module.exports = query;
