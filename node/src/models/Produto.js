import mongoose from "mongoose";
import { mercadoSchema } from "./Mercado.js";

const ProdutoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    preco: { type: Number },
    mercado:  mercadoSchema 
}, { versionKey: false });

const produtos = mongoose.model("produtos", ProdutoSchema);

export default produtos; 