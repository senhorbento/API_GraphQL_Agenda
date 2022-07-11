const PORTA = 3001
const { ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type Contato{
        _id: ID
        nome: String!
        telefone: String!
        email: String
    }
    type Query{
        agenda: [Contato!]!
        contato: Contato!
        obterContatoPorEmail(email: String!): Contato!
        obterContatoPorTelefone(telefone: String!): Contato!
    }
    type Mutation{
        criarContato(nome: String!, telefone: String!, email: String): Contato!
    }
`;
const resolvers = {
    Query:{
        agenda: () => "Hello World!",
        contato: () => "Hello World!",
        obterContatoPorEmail: (_,args) =>"args.email",
        obterContatoPorTelefone: (_,args) => "args.telefone"
    },
    Mutation:{
        criarContato: (_,args) => {
            const novoContato = {
                nome: args.nome,
                telefone: args.telefone,
                email: args.email
            }
            return novoContato;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen(PORTA);