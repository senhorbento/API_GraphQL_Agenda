const Contato = require("../models/Contato");

const resolvers = {
    Query:{
        async agenda(){
            return await Contato.find();
        },
        async contato(_, args){
            return await Contato.findOne(args.id);
        },
        async obterContatoPorEmail(_,args){
            return await Contato.findOne(args.email);
        },
        async obterContatoPorTelefone(_,args){
            return await Contato.findOne(args.telefone);
        }
    },
    Mutation:{
        criarContato(_,args){
            const novoContato = {
                nome: args.nome,
                telefone: args.telefone,
                email: args.email
            }
            return novoContato;
        },
        atualizarContato(_,args){

        },
        excluirContato(_,args){

        }
    }
};

module.exports = resolvers;