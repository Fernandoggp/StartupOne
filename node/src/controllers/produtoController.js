import produto from "../models/Produto.js";
import { mercado } from "../models/Mercado.js";
// let data = require("../server.js")

class produtoController {

    static async listarProdutos(req, res) {
        try {
            const produtosResultado = await produto.find({});
            res.status(200).json(produtosResultado)
            //res.status(200).json(produtosResultado)
        } catch (error) {
            res.status(500);
        }
    }

    static async cadastrarProduto(req, res) {
        const novoProduto = req.body;
        try {
            const mercadoEncontrado = await mercado.findById(novoProduto.mercado);
            const produtoCompleto = { ...novoProduto, mercado: { ...mercadoEncontrado._doc } };
            const produtoCriado = await produto.create(produtoCompleto)
            res.status(201).json({ message: "Criado com sucesso", produto: produtoCriado })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar produto` })
        }
    }

    static async listarProdutoPorId(req, res) {
        try {
            const id = req.params.id
            const produtoEncontrado = await produto.findById(id);
            res.status(200).json(produtoEncontrado)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do produto` });
        }
    }

    static async atualizarProduto(req, res) {
        try {
            const id = req.params.id
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Produto atualizado" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar produto` })
        }
    }

    static async deletarProduto(req, res) {
        try {
            const id = req.params.id
            await produto.findByIdAndDelete(id)
            res.status(204).json({ message: "Produto deletado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar produto` })
        }
    }

    static async listarProdutosPorMercado(req, res) {
        const mercado = req.query.mercado;
        try {
            const produtosPorMercado = await produto.find({ nome: mercado })
            res.status(200).json(produtosPorMercado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
    }

    static async listarProdutoPorPreco(req, res) {
        const nome = req.params.nome;
        try {
          // Use the `sort` method to sort by the 'preco' attribute in ascending order (1)
          const produtosEncontrados = await Produto.find({ nome: nome }).sort({ preco: 1 });
      
          res.status(200).json(produtosEncontrados);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na ordenação` });
        }
      }
      

    static async filterByName(products, name) {
        // Use the filter() method to create a new array containing only matching objects
        const filteredProducts = products.filter(product => {
          // Perform a case-insensitive comparison to filter by name
          return product.name.toLowerCase().includes(name.toLowerCase());
        });
      
        return filteredProducts;
      }

};


export default produtoController

