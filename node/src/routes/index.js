import express from "express";
import produtos from "./produtoRoutes.js";
import mercados from "./mercadoRoutes.js";

const routes = (app) =>{
    app.route("/").get((req,res) => res.status(200).send("Projeto node.js"))

    app.use(express.json(), produtos, mercados);
};

export default routes;