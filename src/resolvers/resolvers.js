const Contato = require("../models/Contato");

const resolvers = {
    Query:{
        Agenda(){
            return Contato.find();
        },
        Contato(_, args){
            return Contato.findOne(args.id);
        },
        obterContatoPorEmail(_,args){
            return Contato.findOne(args.email);
        },
        obterContatoPorTelefone(_,args){
            return Contato.findOne(args.telefone);
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