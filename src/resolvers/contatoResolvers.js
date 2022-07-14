const Contato = require("../models/Contato");

const resolvers = {
    Query:{
        async agenda(){
            return await Contato.find();
        },
        async obterContatoPorID(_, args){
            const id = args.id;
            return await Contato.findOne({_id: id});
        },
        async obterContatoPorEmail(_,args){
            const email = args.email;
            return await Contato.findOne({email: email});
        },
        async obterContatoPorTelefone(_,args){
            const telefone = args.telefone;
            return await Contato.findOne({telefone: telefone});
        }
    },
    Mutation:{
        async criarContato(_,args){
            const novoContato = {nome: args.nome, telefone: args.telefone, email: args.email};
            return await Contato.create(novoContato);
        },
        async atualizarContato(_,args){
            const id = {_id: args.id};
            const novosDados = {nome: args.nome, telefone: args.telefone, email: args.email};
            return await Contato.updateOne(id, {$set: novosDados});
        },
        async excluirContato(_,args){
            const id = {_id: args.id};
            return await Contato.deleteOne(id);
        }
    }
};

module.exports = resolvers;