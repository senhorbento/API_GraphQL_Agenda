const mongoose = require('../database');

const ContatoSchema = new mongoose.Schema({
    id:{type: String, require:false},
    nome:{type: String, require:true},
    telefone:{type: String, require:true},
    email:{type: String, require:false, lowercase:true}
},
{
    collection: "contato"
})

module.exports = mongoose.model('Contato', ContatoSchema);