import {mercado} from "../models/Mercado.js"

class mercadoController{
    
    static async listarMercados(req, res){
        try {
            const mercadosResultado = await mercado.find({});
            res.status(200).json(mercadosResultado)
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async cadastrarMercado(req,res){
        try {
            const novoMercado = await mercado.create(req.body);
            res.status(201).json({message: "Criado com sucesso", produto: novoMercado})
        } catch (error) {
            res.status(500).json({message : `${error.message} - falha ao cadastrar mercado`})
        }
    }

    static async listarMercadoPorId(req, res){
        try {
            const id = req.params.id
            const mercadoEncontrado = await mercado.findById(id);
            res.status(200).json(mercadoEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do mercado` });
        }
    }

    static async  atualizarMercado(req,res){
        try {
            const id = req.params.id
            await mercado.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Mercado atualizado"})
        } catch (error) {
            res.status(500).json({message : `${error.message} - falha ao atualizar mercado`})
        }
    }

    static async deletarMercado(req, res){
        try {
            const id = req.params.id
            await mercado.findByIdAndDelete(id)
            res.status(204).json({message: "Mercado deletado"});
        } catch (error) {
            res.status(500).json({message : `${error.message} - falha ao deletar mercado`})
        }
    }
}

export default mercadoController