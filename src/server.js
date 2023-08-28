require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) { // error for do mesmo TIPO de AppError
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

app.get("/message/:id/:user", (req, res) => {
    const { id, user } = req.params;

    res.send(`Olá ${user}, seu número é: ${id}`);
})

app.get("/user/", (req, res) => {
    const { page, limit } = req.query;
    res.send(`Pagina: ${page}. Limite por página: ${limit}`);
})


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is unning on Port ${PORT}`));

