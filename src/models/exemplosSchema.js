const mongoose = require("mongoose");

const doceriaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true 
    },
    bairro: {
        type: String,
        required: true 
    },
    cidade: {
        type: String,
        required: true 
    },
    telefone: {
        type: String,
        required: true
    },
    formasPagamento: {
        type: Array
    },
    delivery: {
        type: Boolean
    }
}, { timestamps: true })

const Docerias = mongoose.model("doceria", doceriaSchema);

module.exports = Docerias


