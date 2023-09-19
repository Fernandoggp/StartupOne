import "dotenv/config";
import app from "./src/app.js";
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUI = require("swagger-ui-express");

const PORT = 3000;

// var swaggerDefinition ={
//     info:{
//         titulo:"Node swagger",
//         versao: "1.0.0",
//         descricao:"Documentação"
//     },
//     componets:{
//         schemas: require("./schemas.json")
// }
// }

// var options={
//     swaggerDefinition:swaggerDefinition,
//     apis: ['./route/*.js']
// }

// var swaggerSpec = swaggerJSDoc(options);
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta na porta ${PORT}`);
})