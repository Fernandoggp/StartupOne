import  express  from "express";
import mercadoController from "../controllers/mercadoController.js";

const routes = express.Router();

routes.get("/mercados", mercadoController.listarMercados);
routes.get("/mercados/:id", mercadoController.listarMercadoPorId);
routes.post("/mercados", mercadoController.cadastrarMercado);
routes.put("/mercados/:id", mercadoController.atualizarMercado);
routes.delete("/mercados/:id" , mercadoController.deletarMercado);



export default routes;