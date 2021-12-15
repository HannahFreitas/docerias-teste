const Docerias = require("../models/exemplosSchema");


const getAll = async (req, res) => {
    try {
        const listarDocerias = await Docerias.find();
        res.status(200).json({
            message: "Lista de docerias cadastradas: ",
            listarDocerias
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const criarCadastro = async (req, res) => {
    try {
        const criarDocerias = await Docerias.create(req.body);
        res.status(201).json({
            message: "Cadastro realizado com sucesso",
            criarDocerias
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const atualizarCadastro = async (req, res) => {
    try {
        const atualizarDocerias = await Docerias.findById(req.params.id);

        if(atualizarDocerias) {
            atualizarDocerias.nome = req.body.nome || atualizarDocerias.nome
            atualizarDocerias.rua = req.body.rua || atualizarDocerias.rua
            atualizarDocerias.numero = req.body.numero || atualizarDocerias.numero 
            atualizarDocerias.bairro = req.body.bairro || atualizarDocerias.bairro 
            atualizarDocerias.cidade = req.body.cidade || atualizarDocerias.cidade 
            atualizarDocerias.telefone = req.body.telefone || atualizarDocerias.telefone 
            atualizarDocerias.formasPagamento = req.body.formasPagamento || atualizarDocerias.formasPagamento
            atualizarDocerias.delivery = req.body.delivery || atualizarDocerias.delivery

            const salvarDocerias = await atualizarDocerias.save();
            res.status(200).json({
                message: "Dados da docerias, atualizados com sucesso.",
                salvarDocerias
            });
        }

        res.status(400).json({message: "Me desculpe, doceria não encontrada!"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    getAll,
    criarCadastro,
    atualizarCadastro
}