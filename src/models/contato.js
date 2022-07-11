const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
    nome:{type: String, require:true},
    telefone:{type: String, require:true},
    email:{type: String, require:false, lowercase:true}
},
{
    collection: "contato"
})

module.exports = mongoose.model("Contato", ContatoSchema);