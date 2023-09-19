import mongoose from "mongoose";

const mercadoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  endereco: { type: String }
}, { versionKey: false });

const mercado = mongoose.model("mercados", mercadoSchema);

export { mercado , mercadoSchema};
