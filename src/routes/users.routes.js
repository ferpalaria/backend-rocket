const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddleware(req, resp, next) {
    next();
}

const usersController = new UsersController();

usersRoutes.use(myMiddleware); // Para usar em todas as requisições de /user

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/:id", myMiddleware, usersController.update);

module.exports = usersRoutes;