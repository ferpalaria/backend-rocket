const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenricated = ("../middlewares/ensureAuthenricated");

const usersRoutes = Router();

function myMiddleware(req, resp, next) {
    next();
}

const usersController = new UsersController();

usersRoutes.use(myMiddleware); // Para usar em todas as requisições de /user

usersRoutes.post("/", myMiddleware, usersController.create);
usersRoutes.put("/", ensureAuthenricated, usersController.update);

module.exports = usersRoutes;