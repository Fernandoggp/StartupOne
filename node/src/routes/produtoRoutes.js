import express from "express";
import produtoController from "../controllers/produtoController.js";
import Produto from '../models/Produto.js'

const routes = express.Router();

/**
 * @swagger
 * /produtos:
 *  get:
 *      tags: Produtos
 *      description: Get Produtos
 *  produces: application/Json
 *  responses:
 *      200:
 *          description: Retorna todos os produtos
 *      Schema: 
 *          $ref:'#/components/schemas/produto'    
 */
routes.get("/produtos", produtoController.listarProdutos);
routes.get("/produtos/busca", produtoController.listarProdutosPorMercado);
routes.get("/produtos/preco/:nome", produtoController.listarProdutoPorPreco);
routes.get("/produtos/:id", produtoController.listarProdutoPorId);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.get("/api/products", produtoController.filterByName );



export default routes;