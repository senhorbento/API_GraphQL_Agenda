const { gql } = require("apollo-server");

const types = gql`
   type Contato{
        _id: ID
        nome: String!
        telefone: String!
        email: String
    }
`;

module.exports = types;

