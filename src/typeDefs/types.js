const { gql } = require("apollo-server");

const types = gql`
   type Contato{
        id: ID
        nome: String!
        telefone: String!
        email: String
    }
`;

module.exports = types;

